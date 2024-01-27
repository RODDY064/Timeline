"use client"

export default function Button({ word , bg_color, color ,border }:{word:string , bg_color?:string, color?:string, border?:string}) {
  return (
   <div className={`px-3 h-[40px] py-2 rounded-[9px] text-sm  cursor-pointer font-[500] flex items-center justify-center ${bg_color ? bg_color : 'bg-dark_blue'}  ${color ? color : 'text-white'}  ${border ? `border ${border}`: ""}`}>
     {word}
   </div>
  )
}
