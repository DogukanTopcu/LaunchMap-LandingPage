"use client"
import React, { useState, FormEvent } from "react"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import Logo from "../assets/images/Icon.svg";
import Image from "next/image";
import Computer from "../assets/images/screen.png"


import { redirect, useRouter } from 'next/navigation';
import axios from 'axios';

// import { POST } from "../api";

export default function Home() {
  const [email, setEmail] = useState("");
  const router = useRouter();
  
  const POST = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget)
    
    if (formData.get("email") == "") {
      alert("Name must be filled out");
    }
    else {
      await axios.post('https://launch-map-server01.azurewebsites.net/save', {"email": formData.get('email')}).then((res) => {
        console.log(res);
        router.push('/welcome');
      }).catch((err) => {
        console.log(err.message);
        alert(err.message);
      });
    }
  }
  

  const onInputChange = (e) => {
    if (e.target.value.length > 0) {
      setActive(true);
      setFontSize(20);
    } else {
      setActive(false);
      setFontSize(40);
    }
    setEmail(e.target.value);
  }

  const [isActive, setActive] = useState(false);
  const [fontSize, setFontSize] = useState(40);
  return (
    <div className="grid grid-rows-4 w-screen h-screen">
      <div className="row-span-3 grid grid-cols-2">
        <div className="flex flex-col justify-center items-center">
          <p className="text-[20px] text-white/40 font-light leading-tight max-w-[380px] text-center">Product submitting, Investors meet up, Product Community and SEO</p>
          <p className="text-[48px] text-white/60 text-center">Submit your product</p>
          <p className="text-[64px] text-white/60 text-center flex gap-4">on <span className="font-bold launchMap">Launch Map</span><Image className="pointer-events-none" src={Logo} alt="Launch Map" /></p>

          <form autoComplete="off" onSubmit={POST} className="border-b-2 border-white/60 mt-12 flex items-center">
            <input required type="email" value={email} placeholder="your email" name="email" onChange={onInputChange} className={`text-white font-bold text-[${fontSize}px] w-[400px] min-h-[100px] bg-transparent outline-none`} />
            <button type="submit"><ArrowDownwardIcon sx={{ fontSize: 48 }} className={`transition-all text-white/60 duration-300 ${isActive ? "-rotate-90" : ""}`} /></button>
          </form>
        </div>
        <div className="flex justify-end items-center">
          <Image src={Computer} alt="Submit Product" className="pointer-events-none w-3/4" />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className='max-w-xl text-center text-[24px]'>We are just starting our journey, but we promise that it will be cool!</p>
        <div className="flex gap-5 items-center my-6">
          <LinkedInIcon sx={{ fontSize: 24}} className="hover:cursor-pointer hover:text-white text-white/75 transition-all duration-300" />
          <InstagramIcon sx={{ fontSize: 24}} className="hover:cursor-pointer hover:text-white text-white/75 transition-all duration-300" />
          <FacebookIcon sx={{ fontSize: 24}} className="hover:cursor-pointer hover:text-white text-white/75 transition-all duration-300" />
          <TwitterIcon sx={{ fontSize: 24}} className="hover:cursor-pointer hover:text-white text-white/75 transition-all duration-300" />
        </div>
        <p className='text-white/50 text-[20px]'>LaunchMap©2023 All Rights Reserved</p>
      </div>
    </div>
  )
}
