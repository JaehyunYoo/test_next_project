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
  animation?: string;
}

const SectionContents: React.FC<SectionContentProps> = (props) => {
  const { path, width, height, alt, imageStyle, style, animation } = props;
  return (
    <section
      className={style}
      data-aos={`${animation ?? "fade-up"}`}
      data-aos-easing="ease-out"
      data-aos-duration="800"
      data-aos-once="true"
      data-aos-delay="500"
    >
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
