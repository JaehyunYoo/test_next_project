import React from "react";
import Image from "next/image";

interface StoreButtonProps {
  title?: string;
  icon: string;
}
export const StoreButton: React.FC<StoreButtonProps> = ({ title, icon }) => {
  return (
    <div className="flex items-center justify-center item-center mobile:w-[142px]  mobile:h-[41px] xl:w-[200px] xl:h-[60px] bg-black text-white text-base font-bold text-center rounded-[6px]">
      <span>
        <Image
          className="mobile:w-[16px] xl:w-[22px] md:w-[16px]"
          src={icon}
          width={28}
          height={22}
          alt="Picture of the author"
        />
      </span>
      <span className="mobile:ml-[4px] xl:text-[22px]">{title}</span>
    </div>
  );
};
