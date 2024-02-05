import Button from "@app/ui/buttons/button";
import Render from "@app/ui/dashboard/render";
import Image from "next/image";
import { Suspense } from "react";


 async function getAllData () {
  const res = await fetch(`${process.env.URL}/api/project`,{
    method: 'GET',
    cache: 'no-cache',
  })
  const data = await res.json()
  return data.data

 }

export  default async function dashboard() {

  const resource =  await getAllData();

  return (
    <main className="md:pl-[8rem] px-2 pt-4 md:pt-[5.7rem] md:pr-[18rem] ">
      <div className="w-full flex ">
        <h4 className="text-xs text-dark_black/30 font-medium">DASHBOARD</h4>
        <Image
          src="/icons/right-arrow.svg"
          width={15}
          height={15}
          alt="arrow"
          className="opacity-30 "
        />
        <h4 className="text-xs text-dark_black/30 font-medium">PROJECTS</h4>
      </div>
      <div className="w-full flex justify-between items-center">
        <div className="flex gap-[5px]">
          <h1 className="my-4 text-2xl font-bold">Dashboard</h1>
          <Image
            src="/icons/dashboard.svg"
            width={20}
            height={20}
            alt="dashboard"
            className=""
          />
        </div>
        <div className="flex gap-1">
          <Button word="Share" trigger="event" border="border-light_green" bg_color="bg-cream_green/50" color="text-light_green"/>
          <Button word="Create" trigger="project"/>
        </div>
      </div>
       <Suspense fallback={<div>Loading...</div>}>
        <Render resource={resource}/>
       </Suspense>
    </main>
  );
}
