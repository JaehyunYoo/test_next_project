import React from "react";
import Image from "next/image";
import StoreTitle from "./StoreTitle";
import { StoreButton } from "./StoreButton";

const MainView = () => {
  return (
    <section
      className='font-spoqaHangSans w-full h-screen flex flex-col items-center justify-center'
      data-aos='fade-in'
      data-aos-easing='ease-out'
      data-aos-duration='500'
      data-aos-once='true'
      data-aos-delay='300'
    >
      <div className='flex xsmobile:flex-col md:flex-row-reverse items-center justify-center'>
        {/* Main Image*/}
        <Image
          className='xsmobile:max-w-[280px] mobile:max-w-[326px] md:max-w-[385px] md:ml-6 2xl:max-w-[700px] xl:max-w-[585px] xl:ml-24'
          src='/images/main_title_2x.png'
          width={756}
          height={750}
          alt='Signaling App Main MockUp Image'
        />
        <div className='md: font-spoqaHangSans flex flex-col items-center justify-center'>
          <div className='flex flex-col items-center justify-center'>
            <Image
              className=' md:max-w-[230px] md:mb-[12px] xsmobile:max-w-[140px] xsmobile:mb-[4px]'
              src='/icons/title_dot.svg'
              width={262}
              height={15}
              alt='Picture of the author'
            />
            <h1 className='md:mb-1.5 text-center text-zinc-800  xl:text-4xl md:text-4xl mobile:text-2xl xsmobile:text-2xl  font-bold'>
              커플 일정 관리
            </h1>
            <p className=''>
              <span className='text-[#ff7a00] xl:text-5xl md:text-5xl mobile:text-[28px] xsmobile:text-[28px] font-bold'>
                시그널링
              </span>
              <span className='xl:text-5xl md:text-5xl mobile:text-[28px]  xsmobile:text-[28px] font-bold'>
                으로
              </span>
            </p>
          </div>
          <div className='md:my-6 md:my-3.5 xsmobile:my-[12px]'>
            <StoreTitle />
          </div>
          <div className='font-spoqaHangSans flex'>
            <StoreButton
              title='App Store'
              icon='/icons/apple_store_btn.svg'
              link='https://signaling.app.link/ZGtOHZvUtLb'
            />
            <div className='mx-1' />
            <StoreButton
              title='Google Play'
              icon='/icons/play_store.svg'
              link='https://signaling.app.link/3zcx85FUtLb'
            />
          </div>
        </div>
      </div>
      <Image
        className='mt-4'
        src='/icons/bottom_arrow.svg'
        width={36}
        height={36}
        alt='Down Scroll Icon'
      />
    </section>
  );
};

export default MainView;
