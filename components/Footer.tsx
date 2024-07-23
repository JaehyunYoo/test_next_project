import Link from "next/link";
import React from "react";
import { ArrowUp } from "lucide-react";
import Gap from "./Gap";

const Footer = () => {
  return (
    <footer className='bg-black w-full'>
      <div className='mx-auto 2xl:max-w-[1440px] p-8'>
        {/*footer nav link*/}
        <div className='font-spoqaHangSans flex justify-between items-center'>
          <div>
            <Link
              href='/'
              className='pr-[26px] text-white text-base font-medium'
            >
              About Us
            </Link>
            <Link
              href='/'
              className='pr-[26px] text-white text-base font-medium'
            >
              FAQ
            </Link>
            <Link
              href='/'
              className='pr-[26px] text-white text-base font-medium'
            >
              Contact us
            </Link>
          </div>
          <ArrowUp color='#fff' />
        </div>
        {/*footer description*/}
        <div>
          <p className='pt-8 mb-2 text-white font-medium mobile:text-sm'>
            (주) 베스펙스
          </p>
          <p className='mb-2 text-white font-medium mobile:text-sm'>
            사업자번호 : 626-81-02814 대표 : 손미진
          </p>
          <p className='mb-2 text-white font-medium mobile:text-sm'>
            제휴 및 사업제안 문의 support@vespexx.com
          </p>
          <Gap size='py-4' />
          <div className='flex'>
            <Link
              href='/'
              className='pr-[20px] text-white text-base font-medium  text-sm'
            >
              서비스 이용약관
            </Link>
            <Link
              href='/'
              className='text-white text-base font-medium  text-sm'
            >
              서비스 이용약관
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
