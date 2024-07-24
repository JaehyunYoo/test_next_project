import { spoqaHangSans } from "@/core/utils/fontutils";
import "./globals.css";

import { Metadata } from "next";
import Head from "next/head";

const siteUrl = "http://localhost:3000";

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
    url: "signaling-app.com",
    title: "시그널링: 커플을 위한 최고의 일정 관리 앱",
    description:
      "실시간 일정 공유, 상태 공유, 월경 캘린더 등 다양한 기능. 앱스토어 4.9점 평가. 지금 다운로드하세요!",
    siteName: "Signaling",
    images: [
      {
        url: "https://example.com/og.png",
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
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/etc/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/etc/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/etc/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/etc/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/etc/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/etc/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/etc/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/etc/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/etc/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="/etc/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/etc/android-icon-192x192.png"
          sizes="192x192"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-16x16.png"
          sizes="16x16"
        />
      </Head>
      <body className={`${spoqaHangSans.variable} font-spoqaHangSans`}>
        {children}
      </body>
    </html>
  );
}
