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
      <DashBar sliderRef={sliderRef} />
      <div className="w-full h-full flex">
        <div className="w-[2rem] h-full px-2 pt-10 />">
          <h2 className="text-black/40 font-medium transform rotate-90 origin-left">
             Timeline
          </h2>
        </div>
        <div
          id="render"
          key={key}
          ref={sliderRef}
          className="w-[100%] flex-none  md:gap-2 gap-2 max-sm:place-items-center  grid grid-cols-1  
                     lg:grid-cols-2 xl:grid-cols-3 h-full pb-[10rem] max-sm:h-[100%] max-sm:pb-4 md:overflow-x-hidden 
                     overflow-y-auto 2xl:grid-cols-6">
          {resource.map((item: any) => (
            <ProjectCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </>
  );
}
