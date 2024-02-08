"use client";
import Image from "next/image";
import { useCreateContext } from "@app/utils/context/createContextProvider";
import DeleteProject from "./deleteProject";
import EditProject from "./editProject";

export default function Edit() {
  const { create, setCreate } = useCreateContext();

  return (
    <>
      {create.edited && (
        <div className="w-full  flex justify-center items-center  h-full absolute max-sm:top-0 bg-black/20 z-50 p-2 ">
          {!create.type ? (
            <>
              <EditProject />
            </>
          ) : (
            <>
              <DeleteProject />
            </>
          )}
        </div>
      )}
    </>
  );
}
