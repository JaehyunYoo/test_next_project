"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import MainView from "@/components/MainView";
import Reviews from "@/components/Reviews";
import SectionContents from "@/components/SectionContents";
import StoreTitle from "@/components/StoreTitle";
import { StoreButton } from "@/components/StoreButton";
import AOS from "aos";
import "aos/dist/aos.css";
import Gap from "@/components/Gap";
import Footer from "@/components/Footer";

export default function Home() {
  const [isActive, setActive] = useState<boolean>(false);

  useEffect(() => {
    AOS.init();
  }, []);

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* <Header /> */}
      <Header isActive={isActive} onToggle={setActive} />
      <main className='overflow-x-hidden bg-[#fcf4e8]'>
        {/* ViewMain */}
        <MainView />
        {/* Review */}
        <Reviews />
        {/* Section Content 01*/}
        <div className='xsmobile:mt-[210px]' />
        <SectionContents
          path={"/images/calendar_section.svg"}
          width={600}
          height={504}
          animation='fade-right'
          style='font-spoqaHangSans flex xsmobile:flex-col md:flex-row xsmobile:justify-center items-center'
          imageStyle={
            "md:w-[504px] md:h-[504px] xsmobile:h-[260px] xsmobile:mr-[48px]"
          }
          alt={"Calendar Section Image alt description"}
        >
          <div>
            <div className='flex md:justify-start xsmobile:justify-center items-center xsmobile:mt-[32px] md:mt-0'>
              <span>
                <Image
                  src='/icons/calender_icon.svg'
                  width={26}
                  height={26}
                  alt='Calendar Icon'
                />
              </span>
              <span className='block ml-[8px] text-orange-500 font-bold xsmobile:text-[22px]'>
                공유 캘린더
              </span>
            </div>
            <span className='block my-[12px] text-neutral-700 font-bold xsmobile:text-[32px] '>
              커플 일정 공유
            </span>
            <p className='mx-auto text-neutral-700 mobile:text-lg font-bold md:text-left xsmobile:text-center'>
              서로의 일정을 실시간으로
              <br /> 확인하고 공유 해요.
            </p>
          </div>
        </SectionContents>
        <Gap size='xsmobile:py-[20px] md:py-[50px]' />
        {/* Section Content 02*/}
        <SectionContents
          path={"/images/period_calendar_section.svg"}
          animation='fade-left'
          width={668}
          height={504}
          style='font-spoqaHangSan flex xsmobile:flex-col md:flex-row-reverse xsmobile:justify-center  xsmobile:items-center'
          imageStyle={
            "md:w-[504px] md:h-[504px] mobile:h-[260px]"
          }
          alt={""}
        >
          <div className='md:pr-[48px]'>
            <div className='mt-[32px] flex md:justify-start  justify-center items-center'>
              <span>
                <Image
                  src='/icons/person_icon.svg'
                  width={26}
                  height={26}
                  alt=''
                />
              </span>
              <span className='ml-[8px] text-pink-400 xsmobile:text-[22px] font-bold'>
                상태 설정
              </span>
            </div>
            <span className='block my-[12px] xsmobile:mx-auto text-neutral-700 font-bold  md:text-left  xsmobile:text-center xsmobile:text-[32px]  xsmobile:max-w-[200px]'>
              월경 캘린더 & 나의 상태 공유
            </span>
            <p className='mb-[12px] font-spoqaHangSans md:text-left xsmobile:text-center text-[#3d3d3d] font-bold  xsmobile:text-lg'>
              월경 주기를 기록하고 <br />
              현재 상태를 상대방과 공유해요.
            </p>
          </div>
        </SectionContents>
        <Gap size='xsmobile:py-[20px] md:py-[50px]' />
        {/* Section Content 03*/}
        <SectionContents
          path={"/images/widget_section.svg"}
          width={500}
          height={500}
          style='font-spoqaHangSan flex xsmobile:flex-col md:flex-row xsmobile:justify-center xsmobile:items-center'
          imageStyle={
            "xsmobile:h-[276px] py-[12px] md:w-[500px] md:h-[500px] md:mr-[48px]"
          }
          alt={""}
        >
          <div>
            <div className='mt-[32px] flex md:justify-start  justify-center items-center'>
              <span>
                <Image
                  src='/icons/share_icon.svg'
                  width={26}
                  height={26}
                  alt=''
                />
              </span>
              <span className='block ml-[8px] text-amber-500 font-bold xsmobile:text-[22px]'>
                홈 화면 위젯
              </span>
            </div>
            <span className='block py-[12px] text-neutral-700 font-bold md:text-left text-center xsmobile:text-[32px]'>
              캘린더 위젯
            </span>
            <p className='mb-[12px] md:text-left text-center text-neutral-700 font-bold xsmobile:text-lg'>
              언제 어디서든 일정을 확인 할 수 있게
              <br />
              커플 캘린더 위젯을 제공해요.
            </p>
          </div>
        </SectionContents>
        <Gap size='py-[20px] py-[50px]' />
        {/* Section Content 04*/}
        <SectionContents
          path={"/images/couple_share_section.svg"}
          width={612}
          height={504}
          style='font-spoqaHangSan flex md:flex-row-reverse xsmobile:flex-col xsmobile:justify-center xsmobile:items-center'
          imageStyle={
            "xsmobile:w-[276px] mobile:w-[350px] md:w-[612px] md:h-[504px] py-[12px]"
          }
          alt={""}
        >
          <div>
            <div className='mt-[32px] flex md:justify-start justify-center items-center'>
              <span>
                <Image
                  src='/icons/chat_bubble.svg'
                  width={26}
                  height={26}
                  alt=''
                />
              </span>
              <p className='ml-[4px] text-emerald-500  font-bold xsmobile:text-[22px]'>
                연인과의 대화
              </p>
            </div>
            <p className='my-[12px] text-neutral-700 font-bold md:text-left text-center xsmobile:text-[32px] '>
              채팅 및 메모 기능
            </p>
            <p className='mb-[12px] md:text-left text-center text-neutral-700 font-bold xsmobile:text-lg'>
              일정과 관련된 한줄 메모를 남기고
              <br />
              실시간 채팅으로 소통해요.
            </p>
          </div>
        </SectionContents>
        <Gap size='py-[20px]' />
        <Gap size='py-[40px]' />
        <div className='flex justify-center items-center'>
          <Image
            className='md:max-w-[1200px] mobile:max-w-[900px] xsmobile:max-w-[600px] mx-auto'
            src='/images/CTA_mockup.png'
            width={1280}
            height={508}
            alt=''
          />
        </div>
        <div className='py-[20px]' />
        <div className='flex flex-col justify-center items-center'>
          <Image
            className='mb-[4px]'
            src='/icons/bottom_color_set.svg'
            width={200}
            height={8}
            alt=''
          />
          <span className='text-center text-zinc-800 text-2xl font-bold'>
            커플 필수 앱!
          </span>
          <p className='text-center text-orange-500 text-[28px] font-bold'>
            시그널링 다운로드
          </p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <div className='my-3'>
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
        <Gap size='py-14' />
      </main>
      <Footer onTopScroll={scrollToTop} />
    </>
  );
}
