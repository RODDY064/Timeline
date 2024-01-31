"use client";

import { useCreateContext } from "@app/utils/context/createContextProvider";
import Image from "next/image";

export default function Cancel({ setOpen}:{setOpen?:any}) {
  const { setCreate } = useCreateContext();

  const handleAction = ()=>{
    setCreate(() => ({
      project: false,
      event: false,
      task: false
    })),

    setOpen && setOpen(false)
  }
  return (
    <div>
      <Image
        src="/icons/x.svg"
        width={25}
        height={25}
        alt="cancel"
        className="cursor-pointer"
        onClick={()=>handleAction()}
      />
    </div>
  );
}
