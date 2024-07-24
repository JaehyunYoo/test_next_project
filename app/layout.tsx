import { spoqaHangSans } from "@/core/utils/fontutils";
import "./globals.css";
import { Metadata } from "next";

const siteUrl = "https://signalingtest.vercel.app";

export const metadata: Metadata = {
  icons: [
    {
      rel: "apple-touch-icon",
      url: `${siteUrl}/etc/apple-icon-36x36.png`,
    },
    {
      rel: "apple-touch-icon",
      url: `${siteUrl}/etc/apple-icon-60x60.png`,
    },
    {
      rel: "apple-touch-icon",
      url: `${siteUrl}/etc/apple-icon-72x72.png`,
    },
    {
      rel: "apple-touch-icon",
      url: `${siteUrl}/etc/apple-icon-76x76.png`,
    },
    {
      rel: "apple-touch-icon",
      url: `${siteUrl}/etc/apple-icon-114x114.png`,
    },
    {
      rel: "apple-touch-icon",
      url: `${siteUrl}/etc/apple-icon-152x152.png`,
    },
    {
      rel: "apple-touch-icon",
      url: `${siteUrl}/etc/apple-icon-180x180.png`,
    },
    {
      rel: "apple-touch-icon",
      url: `${siteUrl}/etc/apple-icon-180x180.png`,
    },
    {
      rel: "icon",
      url: `${siteUrl}/etc/android-icon-192x192.png`,
    },
    {
      rel: "icon",
      url: `${siteUrl}/etc/favicon-32x32`,
    },
    {
      rel: "icon",
      url: `${siteUrl}/etc/favicon-96x96`,
    },
    {
      rel: "icon",
      url: `${siteUrl}/etc/favicon-16x16`,
    },
  ],
  title: "시그널링 - 커플 일정 관리 앱 | 실시간 일정 공유 | 앱스토어 4.9점",
  description:
    "시그널링으로 커플 일정을 쉽게 관리하세요. 실시간 일정 공유, 상태 공유, 월경 캘린더 등 다양한 기능. 앱스토어 평점 4.9점, 1,000+ 리뷰. 지금 다운로드하세요!",
  keywords: [
    "커플 일정 공유",
    "커플 앱, 일정 관리",
    "캘린더 공유",
    "실시간 상태 공유",
    "월경 캘린더",
    "커플 필수 앱",
    "커플 채팅",
    "커플 메모",
    "커플 앱 다운로드",
  ],

  openGraph: {
    type: "website",
    url: `${siteUrl}`,
    title: "시그널링: 커플을 위한 최고의 일정 관리 앱",
    description:
      "실시간 일정 공유, 상태 공유, 월경 캘린더 등 다양한 기능. 앱스토어 4.9점 평가. 지금 다운로드하세요!",
    siteName: "Signaling",
    images: [
      {
        url: `${siteUrl}/images/OG_img.png`,
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spoqaHangSans.variable} font-spoqaHangSans`}>
        {children}
      </body>
    </html>
  );
}
