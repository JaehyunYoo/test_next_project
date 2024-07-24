import Link from "next/link";
import React from "react";
import Image from "next/image";
import { ArrowUp } from "lucide-react";
import Gap from "./Gap";

interface ScrollToTopProps {
  onTopScroll: () => void;
}

const Footer: React.FC<ScrollToTopProps> = ({ onTopScroll }) => {
  return (
    <footer className="bg-[#36312b] w-full">
      <div className="mx-auto 2xl:max-w-[1440px] p-8">
        {/*footer nav link*/}
        <div className="font-spoqaHangSans flex justify-between items-center">
          <div>
            <Link
              href="https://www.vespexx.com/"
              target="_blank"
              rel="noopener noreferrer"
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
          {/* 소셜미디어 링크 */}
          <div className="flex">
            <div className="sm:flex sm:items-center sm:block mobile:hidden">
              <Link
                href="https://www.instagram.com/signaling.couple/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/icons/instagram.svg"
                  width={24}
                  height={24}
                  alt="instagram icon"
                />
              </Link>
              <Link
                href="https://www.tiktok.com/@signaling.couple"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8"
              >
                <Image
                  src="/icons/ticktalk.svg"
                  width={24}
                  height={24}
                  alt="ticktok icon"
                />
              </Link>
              <Link
                href="https://www.youtube.com/@signaling.couple"
                target="_blank"
                rel="noopener noreferrer"
                className="pr-8"
              >
                <Image
                  src="/icons/youtube.svg"
                  width={24}
                  height={24}
                  alt="youtube icon"
                />
              </Link>
            </div>

            <button type="button" onClick={onTopScroll}>
              <ArrowUp color="#fff" />
            </button>
          </div>
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
              href="https://vespexx.oopy.io/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="pr-[20px] text-white text-base font-medium  text-sm"
            >
              서비스 이용약관
            </Link>
            <Link
              href="https://vespexx.oopy.io/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-base font-medium  text-sm"
            >
              개인정보 처리방침
            </Link>
          </div>
          {/*모바일 환경 소셜 링크 */}
          <Gap size="py-4 sm:hidden mobile:block" />
          <div className="sm:hidden mobile:block mobile:flex mobile:justify-center">
            <Link
              href="https://www.instagram.com/signaling.couple/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/instagram.svg"
                width={24}
                height={24}
                alt="instagram icon"
              />
            </Link>
            <Link
              href="https://www.tiktok.com/@signaling.couple"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8"
            >
              <Image
                src="/icons/ticktalk.svg"
                width={24}
                height={24}
                alt="ticktok icon"
              />
            </Link>
            <Link
              href="https://www.youtube.com/@signaling.couple"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/youtube.svg"
                width={24}
                height={24}
                alt="youtube icon"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
