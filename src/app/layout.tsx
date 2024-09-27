import type { Metadata } from "next";
//import localFont from "next/font/local"; // Uncomment if you want to use a local font
//import { Inter } from 'next/font/google'; // Uncomment if you want to use Inter font from Google
import { Roboto } from 'next/font/google';
import "./globals.css";

/* Uncomment if you want to use a local font
const fontSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const fontMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const fonts = [fontSans, fontMono];
*/

// Keep this uncommented if you want to use Roboto font from Google
// If loading a variable font, you don't need to specify the font weight
const font = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
/* Uncomment if you want to use Inter font from Google
const font = Inter({
  subsets: ['latin'],
  display: 'swap',
})
  */

const fonts = [font];

export const metadata: Metadata = {
  title: 'Small Business Promotion',
  description: 'Landing page for promoting a small business',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        //className={`${fonts.map(font => font.variable).join(' ')} antialiased`} // For local fonts
        className={`${fonts.map(font => font.className).join(' ')} antialiased`} // For fonts from google
      >
        {children}
      </body>
    </html>
  );
}