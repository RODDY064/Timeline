"use client"

import { useRef, useState } from "react"
import ProjectCard from "../cards/projectCard"
import DashBar from "./dashBar"

export default function Render( { resource }:{ resource:any }) {
   const sliderRef = useRef(null)
  

  return (
  <>
      <DashBar sliderRef={sliderRef}/>
      <div id='render'  ref={sliderRef} className="w-[100%] md:gap-2 gap-2 place-items-center  grid grid-cols-1 md:grid-cols-3 h-[400px] md:overflow-x-hidden md:overflow-y-scroll">
       {resource.map((item:any) => (
         <ProjectCard key={item.id} data={item}/>
       ))
       }
      </div>
  </>
  )
}
