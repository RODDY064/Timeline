"use client";

import { useCreateContext } from "@app/utils/context/createContextProvider";


export default function Key() {

const { create} = useCreateContext();
  return (
    <div key={create.key} className="hidden"></div>
  )
}
