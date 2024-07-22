import React, { ReactNode } from "react";
import Image from "next/image";

interface SectionContentProps {
  path: string;
  width: number;
  height: number;
  alt: string;
  style: string;
  children: ReactNode;
}

const SectionContents: React.FC<SectionContentProps> = (props) => {
  const { path, width, height, alt, style } = props;
  return (
    <section className="font-spoqaHangSans flex mobile:flex-col my-[12px] sm:justify-center sm:items-center">
      <Image
        className={`${style}`}
        src={path}
        width={width}
        height={height}
        alt={alt}
      />
      {props.children}
    </section>
  );
};

export default SectionContents;
