import Link from "next/link";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <nav className="absoulte w-full bg-white overflow-x-hidden">
      <div className="2xl:max-w-[1360px] 2xl:h-[60px] 2xl:mx-auto  mobile:px-4 mobile:h-[38px] flex justify-between items-center">
        <Image
          className="mobile:max-w-[94px] md:max-w-[100px]"
          src="/images/logo_test.svg"
          width={160}
          height={30}
          alt="Picture of the author"
        />
        <div className="font-spoqaHangSans md:block sm:hidden mobile:hidden">
          <Link href="/" className="pr-[32px] py-[16px]">
            <span className="text-black text-base font-medium  font-medium">
              About Us
            </span>
          </Link>
          <Link href="/" className="pr-[32px] py-[16px]">
            <span className="text-black text-base font-medium  font-medium">
              FAQ
            </span>
          </Link>
          <Link href="/" className="pr-[32px] py-[16px]">
            <span className="text-black text-base font-medium  font-medium">
              Contact Us
            </span>
          </Link>
          <Link href="/" className="py-[16px]">
            <span className="text-black text-base font-medium  font-medium">
              KOR
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
