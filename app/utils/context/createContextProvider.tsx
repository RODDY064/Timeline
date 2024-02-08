"use client"

import { createContext, useState, useContext } from "react";

// Create the context
const createContextTheme = createContext<{
  create: {
    project?: boolean;
    event?: boolean;
    task?: boolean;
    key?:number;
    errorMessages?:String;
    edited?:boolean;
  };
  setCreate: React.Dispatch<React.SetStateAction<{
    project?: boolean;
    event?: boolean;
    task?: boolean;
    key?:number;
    errorMessages?:String;
    edited?:boolean;
  }>>;
} | null>(null);

// Custom hook to use the context
export function useCreateContext() {
  const context = useContext(createContextTheme);
  if (!context) {
    throw new Error("useCreateContext must be used within a CreateContextProvider");
  }
  return context;
}

// Context provider component
export default function CreateContextProvider({ children }: { children: React.ReactNode }) {
  const [create, setCreate] = useState<{
    project?: boolean;
    event?: boolean;
    task?: boolean;
    key?:number;
    errorMessages?:String;
    edited?:boolean;
  }>({
    project: false,
    event: false,
    task: false,
    key: 0,
    errorMessages:'',
    edited:false
  });

  return (
    <createContextTheme.Provider value={{ create, setCreate }}>
      {children}
    </createContextTheme.Provider>
  );
}
