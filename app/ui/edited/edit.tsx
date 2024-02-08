"use client";

import { useCreateContext } from "@app/utils/context/createContextProvider";

export default function Edit() {
  const { create } = useCreateContext();

  return (
    <>
      {create.edited && (
        <div className="w-full  flex justify-center md:justify-end max-sm:items-center  h-full absolute max-sm:top-0 bg-black/20 z-50 p-2 ">
          hello
        </div>
      )}
    </>
  );
}
