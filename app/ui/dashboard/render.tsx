"use client";

import { useEffect, useRef, useState } from "react";
import ProjectCard from "../cards/projectCard";
import DashBar from "./dashBar";
import { useCreateContext } from "@app/utils/context/createContextProvider";

export default function Render({ resource }: { resource: any }) {
  const sliderRef = useRef(null);
  const { create } = useCreateContext();
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey((prevKey) => prevKey + 1); // Update key based on previous state
  }, [create.key]);

  return (
  <>
      <DashBar sliderRef={sliderRef}/>
      <div id='render' key={key}  ref={sliderRef} className="w-[100%]  md:gap-2 gap-2 place-items-center  
       grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 h-full pb-[10rem] max-sm:pb-4  md:overflow-x-hidden overflow-y-scroll 2xl:grid-cols-6">
       {   resource.map((item:any) => (
         <ProjectCard key={item.id} data={item}/>
       ))
       }
      </div>
    </>
  );
}
