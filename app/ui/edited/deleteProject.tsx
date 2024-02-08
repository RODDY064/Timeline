"use client";
import { useCreateContext } from "@app/utils/context/createContextProvider";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { slideFromD } from "./animation";
import Cancel from "../buttons/cancel";

export default function DeleteProject() {
  const { create, setCreate } = useCreateContext();

  const control = useAnimation();

  useEffect(()=>{
      control.start(create.edited ? 'show':'hide') 
  },[create.edited])



  return (
    <>
      <motion.div
       variants={slideFromD}
        animate={control}
        initial='hide'
       className="md:w-[30%]  w-[50%] md:h-[43%] h-[50%] xl:h-[30%] rounded-[35px] bg-white p-4">
        <div className="flex justify-between ">
          <h2 className="font-[600] text-red-400/90">Delete Project</h2>
          <div className="cursor-pointer">
            <Cancel/>
          </div>
        </div>
      </motion.div>
    </>
  );
}
