import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

interface MenuProps {
  isActive: boolean;
  onToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<MenuProps> = ({ isActive, onToggle }) => {
  return (
    <nav className="absoulte w-full bg-white overflow-x-hidden">
      <div className="mx-auto flex justify-between items-center 2xl:max-w-[1440px] md:max-w-[1024px] mobile:px-4">
        <div className="xl:py-6 mobile:py-4">
          <Image
            src="/images/signaling_logo.svg"
            width={140}
            height={28}
            alt="Signaling Logo"
          />
        </div>

        <button
          type="button"
          onClick={() => onToggle(!isActive)}
          className="md:hidden sm:block"
        >
          {isActive ? <X /> : <Menu />}
        </button>

        <div className="font-spoqaHangSans md:block sm:hidden mobile:hidden">
          <Link
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="pr-8 py-4"
          >
            <span className="text-black text-base font-medium  font-medium">
              About Us
            </span>
          </Link>
          <Link
            href="https://vespexx.oopy.io/faq"
            target="_blank"
            rel="noopener noreferrer"
            className="pr-8 py-4"
          >
            <span className="text-black text-base font-medium  font-medium">
              FAQ
            </span>
          </Link>
          <Link
            href="https://forms.gle/ecJG8PrqFPvgeT7dA"
            target="_blank"
            rel="noopener noreferrer"
            className="pr-8 py-4"
          >
            <span className="text-black text-base font-medium  font-medium">
              Contact Us
            </span>
          </Link>
          <Link href="/" className="py-4">
            <span className="text-[#FE9800] text-base font-medium  font-medium">
              KOR
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
