import Link from "next/link";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <>
      <nav className="w-full max-w[1920px] h-[80px] absolute bg-white hidden  xl:block">
        <div className="w-[1360px] mx-auto flex justify-between items-center mt-[25px] mb-[25px]">
          <div>
            <Image
              src="/images/logo.svg"
              width={160}
              height={42}
              alt="Picture of the author"
            />
          </div>
          <div className="font-spoqaHangSans">
            <Link href="/" className="pr-[32px] py-[16px]">
              <span className="text-black text-xl font-medium">About Us</span>
            </Link>
            <Link href="/" className="pr-[32px] py-[16px]">
              <span className="text-black text-xl font-medium">FAQ</span>
            </Link>
            <Link href="/" className="pr-[32px] py-[16px]">
              <span className="text-black text-xl font-medium">Contact Us</span>
            </Link>
            <Link href="/" className="py-[16px]">
              <span>KOR</span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
