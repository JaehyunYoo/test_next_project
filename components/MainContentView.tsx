import React from "react";
import { StoreButton } from "./StoreButton";
import StoreTitle from "./StoreTitle";
import Image from "next/image";

const MainContentView = () => {
  return (
    <div className="font-spoqaHangSans flex flex-col items-center justify-center xl:mr-[40px]">
      <div className="mb-[32px]">
        <Image
          className="mb-[4px]"
          src="/icons/color_set.png"
          width={173}
          height={17}
          alt="Picture of the author"
        />
        <h1 className="text-center text-zinc-800 text-2xl font-bold">
          커플 일정 관리
        </h1>
        <h2 className="text-center text-zinc-800 text-[28px] font-bold">
          <span className="text-orange-500  font-bold">시그널링</span>
          으로
        </h2>
      </div>
      <div className="font-spoqaHangSans flex mb-[8px]">
        <StoreTitle
          title="App Store"
          icon="/icons/apple_store.svg"
          alt="Signaling Apple Store"
        />
        <StoreTitle
          title="Play Store"
          icon="/icons/play_store.svg"
          alt="Signaling Google Play Store"
        />
        <span className="font-spoqaHangSans text-black/opacity-50 text-[13px] font-medium">
          1000+ reviews
        </span>
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
