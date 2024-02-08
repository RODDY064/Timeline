"use client";

import { useCreateContext } from "@app/utils/context/createContextProvider";
import CreateProject from "./createProject";
import { AnimatePresence } from "framer-motion";
import CreateEvent from "./createEvent";
import AddTeam from "./addTeam";
import { useState } from "react";
import CreateTask from "./createTask";
import FormContextProvider from "./context/formContextProvider";

export default function Create() {
  const { create } = useCreateContext();
  const [open , setOpen ] = useState<boolean>(false)
  return (
    <>
      {(create.project || create.event || create.task) && (
        <div className="w-full  flex justify-center md:justify-end max-sm:items-center  h-full absolute max-sm:top-0 bg-black/20 z-50 p-2 ">
          <AnimatePresence >
            <AddTeam open={open} key={1}/>
            <FormContextProvider>
            {create.project && <CreateProject  setOpen={setOpen} open={open} key={2}/>}
            {create.event && <CreateEvent setOpen={setOpen} open={open} key={3}/>}
            {create.task && <CreateTask  key={4} setOpen={setOpen} />}
            </FormContextProvider>
          </AnimatePresence>
        </div>
      )}
    </>
  );
}
