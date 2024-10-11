import localFont from "next/font/local";
import { Inter } from 'next/font/google';
import { Roboto } from 'next/font/google';

const geistSansFont = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMonoFont = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const robotoFont = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
const interFont = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const geistSans = geistSansFont.variable;
export const geistMono = geistMonoFont.variable;
export const roboto = robotoFont.className;
export const inter = interFont.className;