"use client";
import { useCreateContext } from "@app/utils/context/createContextProvider";
import Image from "next/image";

export default function Back({ action , name }: { action: "reset" | "back" , name?: 'project'| 'event'}) {
  const { setCreate } = useCreateContext();
  return (
    <>
      {action === "reset" ? (
        <Image
          src="/icons/reset.svg"
          width={20}
          height={20}
          alt={action}
          className="cursor-pointer"
        />
      ) : (
        <Image
          onClick={() =>
            name === 'project' ? 
            setCreate((prev) => ({ ...prev, event: false, project: true })) :
            setCreate((prev) => ({ ...prev, task: false, event: true }))
          }
          src="/icons/back-arrow.svg"
          width={25}
          height={25}
          alt={action}
          className="cursor-pointer"
        />
      )}
    </>
  );
}
