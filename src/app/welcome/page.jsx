"use client"

import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import Logo from "../../assets/images/logoColorful.png";
import Link from "../../assets/images/link.svg";

import Image from 'next/image';

import { Italianno } from 'next/font/google';
const italianno = Italianno({ weight: "400", subsets: ['latin'], variable: "--font-italianno" });

export default function Done() {
    return (
        <div className='h-screen w-screen flex flex-col justify-between items-center'>
            <div className='h-10'></div>
            <div className='flex gap-4 items-center'>
                <Image src={Logo} alt="Launch Map" className='pointer-events-none' />
                <p className='text-white text-[32px] font-bold leading-normal'>Launch Map</p>
            </div>
            <p className='text-white text-[64px] font-bold leading-normal'>You're on the <span style={italianno.style} className='text-[96px]'>Waitlist</span></p>
            <p className='text-[40px] font-bold'>Jump to form ⚡</p>
            <div className='bg-zinc-300 bg-opacity-10 rounded-[20px] py-12 px-48 flex flex-col items-center gap-8'>
                <p className='opacity-80 text-white text-xl font-bold'>Give us insights to improve the product</p>
                <button className='text-pink-100 text-xl font-bold leading-tight px-16 py-3 bg-gradient-to-r from-rose-600 via-rose-600 to-rose-600 rounded-xl flex justify-center items-center'>Go to Launch Map form <Image src={Link} className='ml-3' /></button>
            </div>
            <p className='mb-10 opacity-50 text-center text-white text-xl'>LaunchMap©2023 All Rights Reserved</p>
        </div>
    );
}