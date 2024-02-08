"use client"
import { useCreateContext } from "@app/utils/context/createContextProvider";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { slideFromTop } from "./animation";
import Cancel from "../buttons/cancel";

export default function EditProject() {

    const { create, setCreate } = useCreateContext();
    const control = useAnimation();

    useEffect(()=>{
        control.start(create.edited ? 'show':'hide') 
    },[create.edited])

  return (
    <>
        <motion.div
         variants={slideFromTop}
         animate={control}
         initial='hide'
         className="md:w-[55%]  w-[95%] md:h-[80%] h-[90%] xl:h-[65%] rounded-[45px] bg-white p-6">
            <div className="flex justify-between ">
              <h2 className="font-[600] text-light_blue">Edit Project</h2>
              <div className="cursor-pointer">
                  <Cancel/>
              </div>
            </div>
          </motion.div>
    </>
  )
}
