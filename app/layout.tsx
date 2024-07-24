import { spoqaHangSans } from "@/core/utils/fontutils";
import "./globals.css";


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
