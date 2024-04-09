import Image from 'next/image';
import './globals.css'
import { Inter } from 'next/font/google';

import Bgpng from "../assets/images/bg-png.png";

const inter = Inter({ subsets: ['latin'], variable: "--font-inter" });

export const metadata = {
  title: 'Launch Map',
  description: 'Launch Map is a community management platform for startups.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Image src={Bgpng} className='absolute w-screen h-screen z-0' />
        <div className='relative z-10'>{children}</div>
      </body>
    </html>
  )
}
