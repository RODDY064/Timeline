"use client";

import { useCreateContext } from "@app/utils/context/createContextProvider";
import Image from "next/image";
import { useState } from "react";
import { motion } from 'framer-motion'
import { useRouter, useSearchParams } from "next/navigation";




export default function Add( {type ,projectId , eventId }:{ type: 'event' | 'task',projectId?:string , eventId?:string }) {

    const {  setCreate } =  useCreateContext()
    const searchParams = useSearchParams();
    const param = new URLSearchParams(searchParams);
    const { replace } = useRouter()

    const [isDropDown , setIsDropDown] = useState<boolean>(false)


    const handleTrigger = (action?:string)=>{
        if (!isDropDown) return;
        switch(action){
          case 'event' :  
            setCreate((prev) => ({ ...prev, event: true }));
            if(projectId){
              param.set('id',projectId)
              replace(`?${param.toString()}`)};
          break;
          case 'task' :  setCreate((prev) => ({ ...prev, task: true }));
          break;
          default : console.log('no action');
          break;
        }
    
      }

    
  return (
    <div className="relative">
        <motion.div onMouseLeave={() => setIsDropDown(false)} initial="hide" animate={isDropDown ? "show" : "hide"} variants={pop}  className="w-[7rem] h-[4rem] right-4 top-[-0.5rem] bg-white border-cream_light border rounded-[20px] absolute shadow-dark  font-bold flex flex-col items-center justify-center">
            <ul>
                <li onClick={()=>handleTrigger(type)} className="flex items-center justify-center cursor-pointer px-4 py-2 hover:bg-cream rounded-[12px]">
                    <h4 className="text-[0.8rem]">Add {type}</h4>
                </li>
            </ul>
        </motion.div>
    {<Image  onClick={()=>setIsDropDown((prev)=>(!prev))} src="/icons/dot.svg" width={12} height={12}  alt="dot"/>}
    </div>
  )
}

const pop = {
    show:{
        opacity:1,
        y:0
        
    },
    hide:{
        opacity:0,
        y:20
    }
}
