"use client";

import { useCreateContext } from "@app/utils/context/createContextProvider";

export default function Button({
  word,
  bg_color,
  color,
  border,
  trigger
}: {
  word: string;
  bg_color?: string;
  color?: string;
  border?: string;
  trigger?: 'project' | 'event' | 'task'
}) {
 
  const { setCreate } = useCreateContext()
  const handleTrigger = (action?:string)=>{
    switch(action){
      case 'project' :  setCreate((prev) => ({ ...prev, project: true }));
      break;
      case 'event' :  setCreate((prev) => ({ ...prev, event: true }));
      default : console.log('no action');
      break;
    }

  }


  return (
    <div
       id="button"
      onClick={()=>handleTrigger(trigger)}
      className={`px-3 h-[40px] py-2 rounded-[9px] text-sm   cursor-pointer font-[500] flex items-center justify-center ${
        bg_color ? bg_color : "bg-dark_blue"
      }  ${color ? color : "text-white"}  ${border ? `border ${border}` : ""}`}>
      {word}
    </div>
  );
}
