"use client"

import { createContext, useState, useContext } from "react";

// Create the context
const createContextTheme = createContext<{
  create: {
    project?: boolean;
    event?: boolean;
    task?: boolean;
    key?:number
  };
  setCreate: React.Dispatch<React.SetStateAction<{
    project?: boolean;
    event?: boolean;
    task?: boolean;
    key?:number
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
    key?:number
  }>({
    project: false,
    event: false,
    task: false,
    key: 0,
  });

  return (
    <createContextTheme.Provider value={{ create, setCreate }}>
      {children}
    </createContextTheme.Provider>
  );
}
