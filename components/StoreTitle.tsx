import React from "react";
import Image from "next/image";

interface StoreTitleProps {
  title: string;
  icon?: string;
  alt?: string;
  style?: string;
}

const StoreTitle: React.FC<StoreTitleProps> = ({ title, icon, style, alt }) => {
  return (
    <div
      className={`flex ${
        style ?? "text-neutral-600 text-sm font-spoqaHangSans font-medium"
      }`}
    >
      {icon && (
        <Image
          className="mobile:w-[14px]"
          src={icon}
          width={24}
          height={24}
          alt={alt ?? ""}
        />
      )}
      <span className="mobile:ml-[4px] mobile:mr-[8px]">{title}</span>
    </div>
  );
};

export default StoreTitle;
