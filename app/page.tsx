import Image from "next/image";
import Header from "@/components/Header";
import MainView from "@/components/MainView";
import Reviews from "@/components/Reviews";
import SectionContents from "@/components/SectionContents";
import StoreTitle from "@/components/StoreTitle";
import { StoreButton } from "@/components/StoreButton";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <Header />
      <main className="overflow-x-hidden bg-[#fcf4e8]">
        {/* ViewMain */}
        <MainView />

        {/* Review */}
        <Reviews />
        {/* Section Content 01*/}
        <div className="mobile:mt-[210px]" />
        <SectionContents
          path={"/images/couple_calendar.svg"}
          width={624}
          height={504}
          style="font-spoqaHangSans flex mobile:flex-col mobile:justify-center mobile:items-center"
          imageStyle={"mobile:w-[323px] mobile:mr-[50px]"}
          alt={""}
        >
          <div className="mt-[32px] flex mobile:mt-[32px] justify-center items-center">
            <span>
              <Image
                src="/icons/calender_icon.svg"
                width={26}
                height={26}
                alt=""
              />
            </span>
            <span className="ml-[8px] text-orange-500 font-bold mobile:text-[22px]">
              공유 캘린더
            </span>
          </div>
          <span className="my-[12px] text-neutral-700 font-bold text-center mobile:text-[32px]">
            커플 일정 공유
          </span>
          <p className="mx-auto text-center text-neutral-700 mobile:text-lg font-bold">
            서로의 일정을 실시간으로
            <br /> 확인하고 공유하세요.
          </p>
        </SectionContents>
        <div className="py-[20px]" />
        {/* Section Content 02*/}
        <SectionContents
          path={"/images/period_calendar_status.svg"}
          width={668}
          height={504}
          style="font-spoqaHangSan flex mobile:flex-col mobile:justify-center mobile:items-center"
          imageStyle={"mobile:w-[350px] py-[12px]"}
          alt={""}
        >
          <div className="mt-[32px] flex justify-center items-center">
            <span>
              <Image
                src="/icons/person_icon.svg"
                width={26}
                height={26}
                alt=""
              />
            </span>
            <span className="ml-[8px] text-pink-400 mobile:text-[22px] font-bold">
              상태 설정
            </span>
          </div>
          <span className="my-[12px] text-neutral-700 font-bold text-center mobile:text-[32px] mobile:max-w-[200px]">
            월경 캘린더 & 나의 상태 공유
          </span>
          <p className="mb-[12px] font-spoqaHangSans text-center text-[#3d3d3d] font-bold mobile:text-lg">
            월경 주기를 추적하고 상대방과 공유하세요.
          </p>
        </SectionContents>
        <div className="py-[20px]" />
        {/* Section Content 03*/}
        <SectionContents
          path={"/images/widget.svg"}
          width={500}
          height={500}
          style="font-spoqaHangSan flex mobile:flex-col mobile:justify-center mobile:items-center"
          imageStyle={"mobile:w-[340px] py-[12px]"}
          alt={""}
        >
          <div className="mt-[32px] flex justify-center items-center">
            <span>
              <Image
                src="/icons/share_icon.svg"
                width={26}
                height={26}
                alt=""
              />
            </span>
            <span className="ml-[8px] text-amber-500 font-bold mobile:text-[22px]">
              공유 위젯
            </span>
          </div>
          <span className="py-[12px] text-neutral-700 font-bold text-center mobile:text-[32px]">
            캘린더 위젯
          </span>
          <p className="mb-[12px] text-center text-neutral-700 font-bold mobile:text-lg">
            언제 어디서든 일정을 확인 할 수 있게
            <br />
            커플 캘린더 위젯을 제공해요.
          </p>
        </SectionContents>
        <div className="py-[20px]" />
        {/* Section Content 04*/}
        <SectionContents
          path={"/images/couple_share.svg"}
          width={612}
          height={504}
          style="font-spoqaHangSan flex mobile:flex-col mobile:justify-center mobile:items-center"
          imageStyle={"mobile:w-[350px] py-[12px]"}
          alt={""}
        >
          <div className="mt-[32px] flex justify-center items-center">
            <span>
              <Image
                src="/icons/chat_bubble.svg"
                width={26}
                height={26}
                alt=""
              />
            </span>
            <span className="ml-[4px] text-emerald-500  font-bold mobile:text-[22px]">
              연인과의 대화
            </span>
          </div>
          <span className="my-[12px] text-neutral-700 font-bold text-center mobile:text-[32px] ">
            채팅 및 메모 기능
          </span>
          <p className="mb-[12px] text-center text-neutral-700 font-bold mobile:text-lg">
            일정과 관련된 한줄 메모를 남기고
            <br />
            실시간 채팅으로 소통하세요.
          </p>
        </SectionContents>
        <div className="py-[20px]" />
        <div className="py-[40px]" />
        <div className="flex justify-center items-center">
          <Image
            className="max-w-[800px] mx-auto"
            src="/images/bottom_app_screen.svg"
            width={1280}
            height={508}
            alt=""
          />
        </div>
        <div className="py-[20px]" />
        <div className="flex flex-col justify-center items-center">
          <Image
            className="mb-[4px]"
            src="/icons/bottom_color_set.svg"
            width={200}
            height={8}
            alt=""
          />
          <span className="text-center text-zinc-800 text-2xl font-bold">
            커플 필수 앱!
          </span>
          <p className="text-center text-orange-500 text-[28px] font-bold">
            시그널링 다운로드
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="my-[12px]">
            <StoreTitle />
          </div>
          <div className="font-spoqaHangSans flex">
            <StoreButton title="App Store" icon="/icons/apple_store_btn.svg" />
            <div className="mx-1" />
            <StoreButton title="Google Play" icon="/icons/play_store.svg" />
          </div>
        </div>
        <div className="py-[60px]" />
      </main>
      <footer className="bg-black flex flex-col justify-center items-center">
        {/*footer nav link*/}
        <div className="pt-4 flex justify-start items-center">
          {/*link*/}
          <div className="font-spoqaHangSans mobile:py-[12px] mobile:px-[16px]">
            <Link
              href="/"
              className="pr-[26px] text-white text-base font-medium"
            >
              About Us
            </Link>
            <Link
              href="/"
              className="pr-[26px] text-white text-base font-medium"
            >
              FAQ
            </Link>
            <Link
              href="/"
              className="pr-[26px] text-white text-base font-medium"
            >
              Contact us
            </Link>
          </div>
          {/*icon */}
          <div className="text-white">Icon</div>
        </div>
        {/* footer address info */}
        <div className="pt-8 font-spoqaHangSans mobile:py-[12px] mobile:px-[16px]">
          <p className="mb-1 text-white font-medium mobile:text-sm">베스펙스</p>
          <p className="mb-1 text-white font-medium mobile:text-sm">
            사업자번호 : 626-81-02814 대표 : 손미진
          </p>
          <p className="mb-6 text-white font-medium mobile:text-sm">
            제휴 및 사업제안 문의 support@vespexx.com
          </p>
          <div className="flex">
            <Link
              href="/"
              className="pr-[20px] text-white text-base font-medium  text-sm"
            >
              서비스 이용약관
            </Link>
            <Link
              href="/"
              className="text-white text-base font-medium  text-sm"
            >
              서비스 이용약관
            </Link>
          </div>
        </div>
        <div className="py-16" />
      </footer>
    </>
  );
}
