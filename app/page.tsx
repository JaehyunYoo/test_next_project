import Image from "next/image";
import Header from "@/components/Header";
import MainView from "@/components/MainView";
import Reviews from "@/components/Reviews";
import SectionContents from "@/components/SectionContents";
import StoreTitle from "@/components/StoreTitle";

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <Header />
      <main>
        {/* ViewMain */}
        <MainView />

        {/* Review */}
        <Reviews />
        {/* Section Content 01*/}
        <SectionContents
          path={"/images/calendar_2x.png"}
          width={1248}
          height={1008}
          style={"mobile:w-[323px] sm:mr-[51px]"}
          alt={""}
        >
          <div className="flex mt-8 mb-[12px] justify-center items-center">
            <span>
              <Image
                src="/icons/calender_icon.svg"
                width={26}
                height={26}
                alt=""
              />
            </span>
            <span className="font-spoqaHangSans ml-[8px] text-orange-500 text-[22px] font-bold ">
              공유 캘린더
            </span>
          </div>
          <span className="font-spoqaHangSans mb-[12px] text-neutral-700 text-[32px] font-bold text-center">
            커플 일정 공유
          </span>
          <p className="mx-auto text-center text-neutral-700 text-lg font-bold">
            서로의 일정을 실시간으로
            <br /> 확인하고 공유하세요.
          </p>
        </SectionContents>
        <div className="my-[40px]" />
        {/* Section Content 02*/}
        <SectionContents
          path={"/images/period_calendar_2x.png"}
          width={1336}
          height={1008}
          style={"mobile:w-[350px] sm:mr-[51px]"}
          alt={""}
        >
          <div className="flex mt-8 mb-[12px] justify-center items-center">
            <span>
              <Image
                src="/icons/person_icon.svg"
                width={26}
                height={26}
                alt=""
              />
            </span>
            <span className="font-spoqaHangSans ml-[8px] text-pink-400 text-[22px] font-bold">
              상태 설정
            </span>
          </div>
          <span className="font-spoqaHangSans mb-[12px] text-neutral-700 text-[32px] font-bold text-center">
            월경 캘린더 & 나의 상태 공유
          </span>
          <p className="font-spoqaHangSans  mx-auto text-center text-neutral-700 text-lg font-bold">
            월경 주기를 추적하고 상대방과 공유하세요.
          </p>
        </SectionContents>
        <div className="my-[40px]" />
        {/* Section Content 03*/}
        <SectionContents
          path={"/images/calendar_widget_2x.png"}
          width={760}
          height={504}
          style={"mobile:w-[332px]"}
          alt={""}
        >
          <div className="flex mt-8 mb-[12px] justify-center items-center">
            <span>
              <Image
                src="/icons/share_icon.svg"
                width={26}
                height={26}
                alt=""
              />
            </span>
            <span className="ml-[8px] text-amber-500 text-[22px] font-bold ">
              공유 위젯
            </span>
          </div>
          <span className="mb-[12px] text-neutral-700 text-[32px] font-bold text-center">
            캘린더 위젯
          </span>
          <p className=" mx-auto text-center text-neutral-700 text-lg font-bold">
            언제 어디서든 일정을 확인 할 수 있게
            <br />
            커플 캘린더 위젯을 제공해요.
          </p>
        </SectionContents>
        <div className="my-[40px]" />
        {/* Section Content 04*/}
        <SectionContents
          path={"/images/chat_memo_2x.png"}
          width={610}
          height={500}
          style={"mobile:w-[360px] sm:mr-[51px]"}
          alt={""}
        >
          <div className="flex mt-8 mb-[12px] justify-center items-center">
            <span>
              <Image
                src="/icons/chat_bubble.svg"
                width={26}
                height={26}
                alt=""
              />
            </span>
            <span className="ml-[4px] text-emerald-500 text-[22px] font-bold ">
              연인과의 대화
            </span>
          </div>
          <span className="mb-[12px] text-neutral-700 text-[32px] font-bold text-center">
            채팅 및 메모 기능
          </span>
          <p className="text-center text-neutral-700 text-lg font-bold">
            일정과 관련된 한줄 메모를 남기고
            <br />
            실시간 채팅으로 소통하세요.
          </p>
        </SectionContents>
        <div className="mb-[40px]" />
        <section className="flex justify-center items-center mt-[80px] mb-[48px]">
          <Image
            className="mobile:max-w-[800px]"
            src="/images/bottom_app_screen.svg"
            width={1280}
            height={508}
            alt=""
          />
        </section>
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
        <div className="flex justify-center items-center mt-[26px] mb-[12px]">
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
          <span className="text-black opacity-50 text-sm font-semibold">
            1000+ reviews
          </span>
        </div>
      </main>
    </>
  );
}
