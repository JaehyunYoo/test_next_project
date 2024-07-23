import Link from "next/link";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="w-full bg-white relative">
      <nav className="absoulte max-w-[1360px] mx-auto flex justify-between items-center px-8 py-4">
        <Image
          className="mobile:max-w-[94px]"
          src="/images/logo_test.svg"
          width={160}
          height={42}
          alt="Picture of the author"
        />
        <div className="font-spoqaHangSans mobile:hidden">
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
      </nav>
    </div>
  );
};

export default Header;
