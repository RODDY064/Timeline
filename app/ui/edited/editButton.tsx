"use client"

import { useCreateContext } from "@app/utils/context/createContextProvider";
import { useRouter, useSearchParams } from "next/navigation";

export default function EditButton({
  word,
  type,
  id
}: {
  word: string;
  type: "edit" | "delete";
  id:string
}) {

    const { create, setCreate } = useCreateContext();
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);
    const { replace} = useRouter();


    const handleEdit = ()=>{
      switch(type){
        case 'edit':
          setCreate({ ...create, edited: true, type: false });
          break;
        case 'delete':
          setCreate({ ...create, edited: true, type: true });
          break;
        default: ;
        break;
  
      }

    }


  return (
    <>
      <h3 onClick={handleEdit} className={`text-sm py-2 font-medium cursor-pointer ${ type === 'delete' ? ' text-red-400': 'text-light_green'}`}>
        {word}
      </h3>
    </>
  );
}
