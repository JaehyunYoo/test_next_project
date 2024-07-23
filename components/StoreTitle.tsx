import React from "react";
import Image from "next/image";

const StoreTitle = () => {
  return (
    <div className="flex justify-center items-center">
      {/* Apple Store */}
      <div className="flex justify-center items-center font-spoqaHangSans mr-[12px]">
        <Image
          className="mr-[4px] mobile:w-[14px]"
          src="/icons/apple_store.svg"
          width={24}
          height={24}
          alt="Apple Store Button"
        />
        <span className="text-[#555555] font-medium mobile:text-[13px] ">
          App Store
        </span>
      </div>
      {/* Goolge Store */}
      <div className="flex items-center font-spoqaHangSans">
        <Image
          className="mr-[4px] mobile:w-[14px]"
          src="/icons/play_store.svg"
          width={24}
          height={24}
          alt="Apple Store Button"
        />
        <span className="text-[#555555] font-medium mobile:text-[13px] ">
          Google Play
        </span>
      </div>
      {/* Review */}
      <span className="ml-[8px] font-spoqaHangSans text-black opacity-50 font-medium mobile:text-[13px]">
        1000+ reviews
      </span>
    </div>
  );
};

export default StoreTitle;
