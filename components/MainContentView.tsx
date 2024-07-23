import React from "react";
import { StoreButton } from "./StoreButton";
import StoreTitle from "./StoreTitle";
import Image from "next/image";

const MainContentView = () => {
  return (
    <div className="md: font-spoqaHangSans flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <Image
          className="mb-[4px] md:max-w-[230px] mobile:max-w-[140px]"
          src="/icons/title_dot.svg"
          width={262}
          height={15}
          alt="Picture of the author"
        />
        <h1 className="text-center text-zinc-800 md:text-4xl mobile:text-2xl   font-bold">
          커플 일정 관리
        </h1>
        <h2 className="text-center text-zinc-800 md:text-4xl mobile:text-[28px] font-bold">
          <span className="text-orange-500  font-bold">시그널링</span>
          으로
        </h2>
      </div>
      <div className="my-[12px]">
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
