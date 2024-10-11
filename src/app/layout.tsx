import type { Metadata } from "next";
import { geistSans, geistMono, roboto, inter } from "./utils/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: 'Small Business Promotion',
  description: 'Landing page for promoting a small business',
};

const mainFonts = [geistSans, geistMono];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${mainFonts.map(font => font).join(' ')} antialiased`} // For local fonts
      >
        {children}
      </body>
    </html>
  );
}