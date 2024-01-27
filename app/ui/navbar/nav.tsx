"use client";

import Logo from "./logo";
import Menu from "./menu";
import SettingBar from "./setting-bar";
import ProfileImg from "./profile-img";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Nav() {
  const [isHidden, setIsHidden] = useState<boolean>(false);

  return (
    <div className="w-[100%] md:h-[98.5%] flex justify-between  items-center   md:block  md:w-[7rem]   rounded-[5px]  m-[0.2rem]   absolute z-20">
      {/* desktop nav*/}
      <Logo />
      <div className="w-full h-[100%]  md:block hidden">
        <Menu />
        <SettingBar />
        <ProfileImg />
      </div>

      {/* mobile nav*/}
      <div className="w-[5.5rem] flex items-center gap-1 justify-center md:hidden h-[3.4rem] rounded-[30px] border border-black/25 mx-2 p-1">
        <div className="w-[2.6rem] h-[2.5rem] flex items-center justify-center border border-black/25 rounded-full ">
          <Image
            src="/icons/mobile-menu.svg"
            width={25}
            height={25}
            alt="menu"
            className="cursor-pointer"
            onClick={() => setIsHidden(true)}
          />
        </div>
        <Image
          src="/icons/right-arrow.svg"
          width={25}
          height={25}
          alt="arrow"
          className="rotate-90 cursor-pointer"
          onClick={() => setIsHidden(true)}
        />
      </div>
      {isHidden && (
        <motion.div 
        animate={{y:"0%"}}
        initial={{y:"-70%"}}
        transition={{duration:0.25, type:'tween'}}
        className="w-full h-screen  flex-col items-center top-0 bg-dark_cream backdrop:blur-[5px] absolute ">
          <div className="w-full flex justify-end font-bold text-lg px-6 py-4">
            <Image src="/icons/x.svg" width={35} height={35} alt="cancel" onClick={() => setIsHidden(false)} className="cursor-pointer"/>
          </div>
          <div className="w-full h-full">
            <Menu />
            <SettingBar />
          </div>
        </motion.div>
      )}
    </div>
  );
}
