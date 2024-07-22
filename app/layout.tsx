import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// const pretendard = localFont({
//   src: "../fonts/PretendardVariable.woff2",
//   display: "swap",
//   weight: "45 920",
//   variable: "--font-pretendard",
// });
const spoqaHangSans = localFont({
  src: [
    {
      path: "../fonts/SpoqaHanSansNeo-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../fonts/SpoqaHanSansNeo-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/SpoqaHanSansNeo-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/SpoqaHanSansNeo-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/SpoqaHanSansNeo-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
   variable: '--font-spoqa-han-sans'
});
export const metadata: Metadata = {
  title: "Signaling",
  description: "커플 일정관리",
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
