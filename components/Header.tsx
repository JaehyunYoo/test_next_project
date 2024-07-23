import Link from "next/link";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <nav className="absoulte w-full bg-white">
      <div className="xl:max-w-[1360px] xl:h-[60px] mx-auto flex justify-between items-center">
        <Image
          className="mobile:max-w-[94px] md:max-w-[142px]"
          src="/images/logo_test.svg"
          width={160}
          height={30}
          alt="Picture of the author"
        />
        <div className="font-spoqaHangSans md:block mobile:hidden">
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
