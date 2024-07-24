import React from "react";
import Image from "next/image";

const StoreTitle = () => {
  return (
    <div className='flex justify-center items-center'>
      {/* Apple Store */}
      <div className='flex justify-center items-center font-spoqaHangSans mr-[12px]'>
        <Image
          className='mr-[4px] mobile:w-[14px] xsmobile:w-[12px] xl:w-[24px]'
          src='/icons/apple_store.svg'
          width={24}
          height={24}
          alt='Apple Store Button'
        />
        <span className='text-[#555555] font-medium mobile:text-[13px] xsmobile:text-[10px] xl:text-lg'>
          App Store
        </span>
      </div>
      {/* Goolge Store */}
      <div className='flex items-center font-spoqaHangSans'>
        <Image
          className='mr-[4px] mobile:w-[14px] xsmobile:w-[12px] xl:w-[24px]'
          src='/icons/play_store.svg'
          width={24}
          height={24}
          alt='Apple Store Button'
        />
        <span className='text-[#555555] font-medium mobile:text-[13px] xsmobile:text-[10px] xl:text-lg'>
          Google Play
        </span>
      </div>
      {/* Review */}
      <span className='ml-[8px] font-spoqaHangSans text-black opacity-50 font-medium mobile:text-[13px]  xsmobile:text-[10px]  xl:text-lg'>
        1000+ reviews
      </span>
    </div>
  );
};

export default StoreTitle;
