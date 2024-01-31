"use client"

import ProjectCard from "../cards/projectCard"
import DashBar from "./dashBar"

export default function Render() {
  return (
  <>
      <DashBar/>
      <div id='render' className="w-full md:gap-1 gap-2   grid grid-cols-1 md:grid-cols-3 h-[400px]md:overflow-hidden">
       <ProjectCard/>

      </div>
  </>
  )
}
