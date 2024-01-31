"use client";

import React, { createContext, useState, useContext } from "react";

export interface formInput {
  name: string;
  description: string;
  startDate: string;
  type: string;
  endDate: string;
}

export interface TaskInput {
  topic:string,
  item:string[],
  startDate: string;
  endDate: string;

}
// create form context

const formContext = createContext<{
  projectData: formInput;
  setProjectData: React.Dispatch<React.SetStateAction<formInput>>;
  eventData: formInput;
  setEventData: React.Dispatch<React.SetStateAction<formInput>>;
  taskData: TaskInput;
  setTaskData: React.Dispatch<React.SetStateAction<TaskInput>>;
} | null>(null);

export function useFormInput() {
  const context = useContext(formContext);
  if (!context) {
    throw new Error("useFormInput must be used within a FormContextProvider");
  } else {
    return context;
  }
}

export default function FormContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [projectData, setProjectData] = useState<formInput>({
    name: "",
    description: "",
    startDate: "",
    type: "development",
    endDate: "",
  });
  const [eventData, setEventData] = useState<formInput>({
    name: "",
    description: "",
    startDate: "",
    type: "design",
    endDate: "",
  });
  const [taskData, setTaskData] = useState<TaskInput>({
    topic: "",
    item: [],
    startDate: "",
    endDate: "",
  });

  return (
    <formContext.Provider
      value={{
        projectData,
        setProjectData,
        eventData,
        setEventData,
        taskData,
        setTaskData,
      }}>
      {children}
    </formContext.Provider>
  );
}
