"use client";
import Image from "next/image";
import { useCreateContext } from "@app/utils/context/createContextProvider";

export default function Edit() {
  const { create , setCreate } = useCreateContext();

  return (
    <>
      {create.edited && (
        <div className="w-full  flex justify-center items-center  h-full absolute max-sm:top-0 bg-black/20 z-50 p-2 ">
          {!create.type ? 
          <>
          <div className="md:w-[55%]  w-[95%] md:h-[80%] h-[90%] xl:h-[65%] rounded-[45px] bg-white p-6">
            <div className="flex justify-between ">
              <h2 className="font-[600] text-light_blue">Edit Project</h2>
              <div className="cursor-pointer">
                <Image
                  src="/icons/x.svg"
                  width={22}
                  height={22}
                  alt="cancel"
                  onClick={() => setCreate({ ...create, edited: false })}
                />
              </div>
            </div>
          </div>
          </> 
          : 
          <>
          <div className="md:w-[30%]  w-[50%] md:h-[43%] h-[50%] xl:h-[30%] rounded-[35px] bg-white p-4">
            <div className="flex justify-between ">
              <h2 className="font-[600] text-red-400/90">Delete Project</h2>
              <div className="cursor-pointer">
                <Image
                  src="/icons/x.svg"
                  width={22}
                  height={22}
                  alt="cancel"
                  onClick={() => setCreate({ ...create, edited: false })}
                />
              </div>
            </div>
          </div>
          </>}
        </div>
      )}
    </>
  );
}
