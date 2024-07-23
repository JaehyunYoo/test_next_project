import React, { ReactNode } from "react";
import Image from "next/image";

interface SectionContentProps {
  path: string;
  width: number;
  height: number;
  alt: string;
  style: string;
  imageStyle: string;
  children: ReactNode;
}

const SectionContents: React.FC<SectionContentProps> = (props) => {
  const { path, width, height, alt, imageStyle, style } = props;
  return (
    <section className={style}>
      <Image
        className={imageStyle}
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
