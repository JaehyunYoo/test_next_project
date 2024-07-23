import React from "react";
import Image from "next/image";
import MainContentView from "./MainContentView";

const MainView = () => {
  return (
    <section className="font-spoqaHangSans w-full h-screen flex flex-col items-center justify-center">
      <div className="flex mobile:flex-col md:flex-row-reverse items-center justify-center">
        {/* Main Image*/}
        <Image
          className="mobile:max-w-[326px] md:max-w-[385px] md:ml-6 xl:max-w-[756px] xl:ml-24"
          src="/images/main_title_2x.png"
          width={756}
          height={750}
          alt="Signaling App Main MockUp Image"
        />
        <MainContentView />
      </div>
      <Image
        className="mt-4 mb-4"
        src="/icons/bottom_arrow.svg"
        width={36}
        height={36}
        alt="Down Scroll Icon"
      />
    </section>
  );
};

export default MainView;
