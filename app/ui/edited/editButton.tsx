"use client"

import { useCreateContext } from "@app/utils/context/createContextProvider";

export default function EditButton({
  word,
  type,
}: {
  word: string;
  type: "edit" | "delete";
}) {

    const { create, setCreate } = useCreateContext();

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
      <h3 onClick={handleEdit} className={`text-sm font-medium cursor-pointer ${ type === 'delete' ? ' text-red-400': 'text-light_green'}`}>
        {word}
      </h3>
    </>
  );
}
