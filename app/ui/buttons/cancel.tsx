"use client";

import { useCreateContext } from "@app/utils/context/createContextProvider";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

export default function Cancel({ setOpen}:{setOpen?:any}) {
  const { setCreate } = useCreateContext();
  const searchParams = useSearchParams();
  const param = new   URLSearchParams(searchParams);
  const { replace } = useRouter();

  const handleAction = ()=>{
    setCreate((prev) => ({
      ...prev,
      project: false,
      event: false,
      task: false,
    })),

    setOpen && setOpen(false)

    if (param.has('id')) {
      // Delete the 'id' query parameter
      param.delete('id');
      replace(`?${param.toString()}`);
  }
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
