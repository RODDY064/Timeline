"use client"
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { pop } from './animations';

export default function AddTeam( { open }:{ open:boolean}) {
    const controls = useAnimation()
    useEffect(()=>{
      controls.start(open ? 'show': 'hide')
    },[open])

  return (
    <motion.div 
    initial="hide"
    variants={pop}
    animate={controls}
    className="w-[17rem] h-[12rem] bg-white rounded-[25px] hidden md:block mx-4 p-4">
         <h1 className="font-[600] text-light_blue">Add a team</h1>
    </motion.div>
  )
}
