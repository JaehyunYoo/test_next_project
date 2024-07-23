import React from "react";
import { StoreButton } from "./StoreButton";
import StoreTitle from "./StoreTitle";
import Image from "next/image";

const MainContentView = () => {
  return (
    <div className="md: font-spoqaHangSans flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <Image
          className=" md:max-w-[230px] md:mb-[12px] mobile:max-w-[140px] mobile:mb-[4px]"
          src="/icons/title_dot.svg"
          width={262}
          height={15}
          alt="Picture of the author"
        />
        <h1 className="mb-2 text-center text-zinc-800  xl:text-4xl md:text-4xl mobile:text-2xl  font-bold">
          커플 일정 관리
        </h1>
        <p className="">
          <span className="text-[#ff7a00] xl:text-5xl md:text-5xl mobile:text-[28px] font-bold">
            시그널링
          </span>
          <span className="xl:text-5xl md:text-5xl mobile:text-[28px] font-bold">
            으로
          </span>
        </p>
      </div>
      <div className="md:my-6 md:my-3.5 mobile:my-[12px]">
        <StoreTitle />
      </div>
      <div className="font-spoqaHangSans flex">
        <StoreButton title="App Store" icon="/icons/apple_store_btn.svg" />
        <div className="mx-1" />
        <StoreButton title="Google Play" icon="/icons/play_store.svg" />
      </div>
    </div>
  );
};

export default MainContentView;
