"use client";

import Image from "next/image";
import { useSearchParams,usePathname, useRouter } from "next/navigation";
import { useDebounce, useDebouncedCallback } from "use-debounce";

export default function Search() {
  const searchParams  = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()


  const handleSearch = useDebouncedCallback((term:string)=>{
    const param = new URLSearchParams(searchParams)
    if(term){
      param.set('limit',"all")
      param.set('query',term)
    }else{
      param.delete('limit')
      param.delete('query')
    }
    replace(`${pathname}?${param.toString()}`);

  },
  300)

  return (
    <div className="w-full flex md:absolute md:z-10 pt-[5rem] px-2 md:p-0">
      <div className="md:w-[7.2rem] md:flex-none md:block hidden"></div>
      <div
        className="w-[100%] md:h-[4.3rem] md:bg-white md:rounded-[8px] md:rounded-tr-[20px] border border-black/10 md:px-4 
      flex items-center mt-[0.35rem] gap-6 rounded-lg">
        {/*Back Button*/}
        <div className="w-[6rem] border-[1.5px] hover:bg-dark_cream border-dark_cream rounded-[25px] cursor-pointer p-2 md:flex items-center justify-center gap-1 hidden">
          <Image
            src="/icons/back-arrow.svg"
            width={20}
            height={20}
            alt="back"
          />
          <h2>Back</h2>
        </div>
        {/* Input Div*/}
        <div className="md:w-[75%] w-full bg-white md:bg-dark_cream flex items-center gap-2 md:rounded-[5px] overflow-hidden relative rounded-lg ">
          <input
            type="text"
            placeholder="Search for everything..."
            onChange={(e) => handleSearch(e.target.value)}
            defaultValue={searchParams.get('query')?.toString()}
            className="w-full h-full bg-transparent outline-none text-sm  px-8 pr-10 py-[0.62rem]  max-sm:rounded-lg "
          />
          <Image
            src="/icons/search.svg"
            width={23}
            height={22}
            alt="search"
            className="absolute ml-1"
          />
          <div className="w-[2.6rem] rounded-[6px] h-[82%] bg-dark_cream md:bg-white absolute right-2 flex items-center justify-center cursor-pointer">
            <Image
              src="/icons/control.svg"
              width={17}
              height={17}
              alt="control"
            />
            <h3>S</h3>
          </div>
        </div>
      </div>
      <div className="md:w-[17.5rem] md:flex-none hidden md:block"></div>
    </div>
  );
}
