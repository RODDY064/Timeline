"use client"

import { useCreateContext } from "@app/utils/context/createContextProvider"
import { useEffect, useState } from "react";

export default function ErrorMessage() {

    const { create , setCreate } = useCreateContext();
    const [isError, setIsError] = useState<boolean>(false);

    useEffect(()=>{
      if(create.errorMessages !== '' && create.errorMessages?.includes('Something went wrong')){
        setIsError(true)
      }else{
        setIsError(false)
      }

      setTimeout(()=>{ setCreate((prev)=>({...prev, errorMessages:''})) },4000)
    },[create.errorMessages])

   

  return (

    <h3 className={` error font-medium text-xs ${isError ? 'text-red-500': 'text-green-400'} px-2`}>
        {create.errorMessages}
    </h3>
  )
}
