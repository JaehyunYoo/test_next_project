import React from "react";
import Image from "next/image";
import MainContentView from "./MainContentView";
import Reviews from "./Reviews";

const MainView = () => {
  return (
    <section className="font-spoqaHangSans w-full h-screen flex flex-col items-center justify-center">
      <div className="flex mobile:flex-col xl:flex-row-reverse ">
        {/* Main Image*/}
        <Image
          className="sm:max-w-[400px] px-2"
          src="/images/main_title_2x.png"
          width={756}
          height={750}
          alt="Signaling App Main MockUp Image"
        />
        <MainContentView />
      </div>
      <Image
        className="mt-4"
        src="/icons/bottom_arrow.svg"
        width={36}
        height={36}
        alt="Down Scroll Icon"
      />
    </section>
  );
};

export default MainView;
