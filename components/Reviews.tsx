import React from "react";
import Image from "next/image";

import StoreTitle from "./StoreTitle";
import ReviewCarousel from "./ReviewCarousel";

const Reviews = () => {
  const slides: React.ReactNode[] = [
    <Image
      key={1}
      src="/images/review01.svg"
      width={320}
      height={190}
      alt="Review Crown Icon Signaling App"
    />,
    <Image
      key={2}
      src="/images/review02.svg"
      width={320}
      height={190}
      alt="Review Crown Icon Signaling App"
    />,
    <Image
      key={3}
      src="/images/review03.svg"
      width={320}
      height={211}
      alt="Review Crown Icon Signaling App"
    />,
    <Image
      key={4}
      src="/images/review04.svg"
      width={320}
      height={190}
      alt="Review Crown Icon Signaling App"
    />,
    <Image
      key={5}
      src="/images/review05.svg"
      width={320}
      height={190}
      alt="Review Crown Icon Signaling App"
    />,
    <Image
      key={6}
      src="/images/review06.svg"
      width={320}
      height={148}
      alt="Review Crown Icon Signaling App"
    />,
    <Image
      key={6}
      src="/images/review06.svg"
      width={320}
      height={211}
      alt="Review Crown Icon Signaling App"
    />,
  ];
  return (
    <section className="mt-[80px] w-full">
      <div className="w-full flex-col flex items-center justify-center">
        <Image
          src="/images/crown_img_2x.png"
          width={64}
          height={64}
          alt="Review Crown Icon Signaling App"
        />
        <Image
          className="mobile:w-[165px] mobile:mt-[12px]"
          src="/images/store_rating_score.svg"
          width={180}
          height={112}
          alt="Review Crown Icon Signaling App"
        />
        <Image
          className="mobile:w-[200px] mobile:mt-[12px]"
          src="/icons/store_rating.svg"
          width={200}
          height={40}
          alt="Review Crown Icon Signaling App"
        />
        <div className="flex mobile:mt-[20px]">
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
          <span className="text-black opacity-50 text-sm font-semibold ">
            1000+ reviews
          </span>
        </div>

        <div className="w-full my-4 max-h-[231px]">
          <ReviewCarousel slides={slides} />
        </div>
      </div>
    </section>
  );
};

export default Reviews;
