import Link from "next/link";
import Image from "next/image";

interface MenuProps {
  isActive: boolean;
  onToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<MenuProps> = ({ isActive, onToggle }) => {
  return (
    <nav className="absoulte w-full bg-white overflow-x-hidden">
      <div className="2xl:max-w-[1360px] 2xl:h-[60px] 2xl:mx-auto  mobile:px-4 mobile:py-6 mobile:h-[40px] flex justify-between items-center">
        <Image
          className="mobile:max-w-[94px] md:max-w-[100px]"
          src="/images/logo_test.svg"
          width={160}
          height={30}
          alt="Picture of the author"
        />
        <div className="md:hidden sm:block">
          <button type="button" onClick={() => onToggle(!isActive)}>
            {isActive ? (
              <Image
                src="/icons/exit_button.svg"
                width={40}
                height={40}
                alt="Picture of the author"
              />
            ) : (
              <Image
                src="/icons/hamburger.svg"
                width={32}
                height={32}
                alt="Picture of the author"
              />
            )}
          </button>
        </div>
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
