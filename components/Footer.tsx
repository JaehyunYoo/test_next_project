import Link from "next/link";
import React from "react";
import { ArrowUp } from "lucide-react";
import Gap from "./Gap";

interface ScrollToTopProps {
  onTopScroll: () => void;
}

const Footer: React.FC<ScrollToTopProps> = ({ onTopScroll }) => {
  return (
    <footer className="bg-black w-full">
      <div className="mx-auto 2xl:max-w-[1440px] p-8">
        {/*footer nav link*/}
        <div className="font-spoqaHangSans flex justify-between items-center">
          <div>
            <Link
              href="/"
              className="pr-[26px] text-white text-base font-medium"
            >
              About Us
            </Link>
            <Link
              href="https://vespexx.oopy.io/faq"
              target="_blank"
              rel="noopener noreferrer"
              className="pr-[26px] text-white text-base font-medium"
            >
              FAQ
            </Link>
            <Link
              href="https://forms.gle/ecJG8PrqFPvgeT7dA"
              target="_blank"
              rel="noopener noreferrer"
              className="pr-[26px] text-white text-base font-medium"
            >
              Contact us
            </Link>
          </div>
          <button type="button" onClick={onTopScroll}>
            <ArrowUp color="#fff" />
          </button>
        </div>
        {/*footer description*/}
        <div>
          <p className="pt-8 mb-2 text-white font-medium mobile:text-sm">
            (주) 베스펙스
          </p>
          <p className="mb-2 text-white font-medium mobile:text-sm">
            사업자번호 : 626-81-02814 대표 : 손미진
          </p>
          <p className="mb-2 text-white font-medium mobile:text-sm">
            제휴 및 사업제안 문의 support@vespexx.com
          </p>
          <Gap size="py-4" />
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
              개인정보 처리방침
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
