"use client";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { DropTextAppear, slideUp } from "../create/animations";


export default function EditForm() {


    const [isDropDown, setIsDropDown] = useState<boolean>(false);
    const controls = useAnimation();
    useEffect(() => {
      controls.start(isDropDown ? "show" : "hide");
    }, [isDropDown]);
  

  return (
    <>
      <form className="font-medium">
        <label className="ml-1">Name</label>
        <input
          type="text"
          name="name"
          placeholder={`Edit the name of the project`}
          className="w-full h-10 input text-sm"
        />
        <label className="ml-1 mt-1">Description</label>
        <textarea
          typeof="text"
          required
          name="description"
          placeholder={`Edit the description of the project`}
          className="w-full max-h-[72px] min-h-[72px] input"
        />
        <div className="flex justify-between gap-2">
            <div className="w-[100%]">
                <label className="ml-1">Start Date</label>
                <input
                type="date"
                name="start"
                className="w-full h-10 input text-sm"
                />
            </div>
            <div className="w-[100%]">
            <label className="ml-1">End Date</label>
                <input
                type="date"
                name="start"
                className="w-full h-10 input text-sm"
                />
            </div>
        </div>
        <label className="label mt-2">Select the type</label>
          <div className="w-full flex justify-center relative peer">
            {/* drop down menu*/}
            {isDropDown && (
              <motion.div
                variants={slideUp}
                animate={controls}
                initial="hide"
                id="Dropdown"
                onClick={() => setIsDropDown(false)}
                className="w-full  h-[24rem] top-[-24.5rem] shadow-dark  rounded-[15px]
           border border-dark_cream bg-white absolute p-4 overflow-x-hidden overflow-y-scroll"
              >
                {Status.map((status, index) => (
                  <motion.h3
                    key={index}
                   
                    variants={DropTextAppear}
                    className="cursor-pointer p-2 hover:bg-dark_cream w-full rounded-[12px]">
                    {status}
                  </motion.h3>
                ))}
              </motion.div>
            )}
            <div className="w-full h-10 input flex items-center justify-between font-medium text-black/70 ">
                  Development
              <Image
                src="/icons/right-arrow.svg"
                width={20}
                height={20}
                alt="arrow"
                onClick={() => setIsDropDown((prev) => !prev)}
                className="rotate-90 cursor-pointer "
              />
            </div>
          </div>
      </form>
    </>
  );
}


const Status: string[] = [
    "Development",
    "Design",
    "Production",
    "Marketing",
    "Finance",
    "Human Resources",
    "Sales",
    "Customer Service",
    "Research",
    "Quality Assurance",
    "Operations",
    "Management",
    "Information ",
    "Education",
    "Technology",
    "Engineering",
    "Administration",
  ];