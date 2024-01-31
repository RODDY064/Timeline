"use client";

import { useCreateContext } from "@app/utils/context/createContextProvider";
import { useFormInput } from "./context/formContextProvider";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { DropTextAppear, slideUp } from "./animations";

export default function FormDataPage({
  type,
  setOpen,
}: {
  type: "project" | "event" | "task";
  setOpen: any;
}) {
  const { setCreate } = useCreateContext();
  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let formData;
    switch (type) {
      case "project":
        formData = projectData;
        break;
      case "event":
        formData = eventData;
        break;
      case "task":
        formData = taskData;
        break;
      default:
        break;
    }

    const response = await fetch(`/api/${type}`, {
      method: "POST",
      body: JSON.stringify(formData),
    });

    const responseData = await response.json();

    if (responseData.status === 200) {
      setCreate(() => ({
        project: false,
        event: false,
        task: false,
      })),
        setOpen && setOpen(false);
    }
  };

  // data input state management
  const {
    projectData,
    setProjectData,
    eventData,
    setEventData,
    taskData,
    setTaskData,
  } = useFormInput();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    switch (type) {
      case "project":
        setProjectData((prevData) => ({ ...prevData, [name]: value }));
        break;
      case "event":
        setEventData((prevData) => ({ ...prevData, [name]: value }));
        break;
      case "task":
        setTaskData((prevData) => ({ ...prevData, [name]: value }));
        break;
      default:
        break;
    }
  };

  const [isDropDown, setIsDropDown] = useState<boolean>(false);

  const controls = useAnimation();
  useEffect(() => {
    controls.start(isDropDown ? "show" : "hide");
  }, [isDropDown]);

  const handleDropDown = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    term: string
  ) => {
    e.preventDefault();
    switch (type) {
      case "project":
        setProjectData((prevData) => ({ ...prevData, type: term }));
        break;
      case "event":
        setEventData((prevData) => ({ ...prevData, type: term }));
        break;
      case "task":
        setTaskData((prevData) => ({ ...prevData, type: term }));
        break;
      default:
        break;
    }
  };

  return (
    <>
      {type !== "task" ? (
        <form className="flex flex-col my-4 font-light" onSubmit={handleSubmit}>
          <label className="label">Name</label>
          <input
            type="text"
            name="name"
            value={
              type === "project"
                ? projectData.name
                : type === "event"
                ? eventData.name
                : ""
            }
            onChange={handleInputChange}
            placeholder={`Enter the name of the ${type}`}
            className="w-full h-10 input"
          />
          <label className="label mt-2">Description</label>
          <textarea
            typeof="text"
            name="description"
            value={
              type === "project"
                ? projectData.description
                : type === "event"
                ? eventData.description
                : ""
            }
            onChange={handleInputChange}
            placeholder={`Enter the description of the ${type}`}
            className="w-full max-h-[150px] min-h-[70px] input"
          />
          <label className="label mt-2">Start Date</label>
          <input
            name="startDate"
            type="date"
            min={today}
            value={
              type === "project"
                ? projectData.startDate
                : type === "event"
                ? eventData.startDate
                : ""
            }
            onChange={handleInputChange}
            className="w-full h-10 input"
          />
          <label className="label mt-2">End Date</label>
          <input
            name="endDate"
            type="date"
            min={today}
            value={
              type === "project"
                ? projectData.endDate
                : type === "event"
                ? eventData.endDate
                : ""
            }
            onChange={handleInputChange}
            className="w-full h-10 input invalid:border-dark_red/70 invalid:border"
          />
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
           border border-dark_cream bg-white absolute p-4 overflow-x-hidden overflow-y-scroll" >
                {Status.map((status, index) => (
                  <motion.h3
                    key={index}
                    onClick={(e) => handleDropDown(e, status)}
                    variants={DropTextAppear}
                    className="cursor-pointer p-2 hover:bg-dark_cream w-full rounded-[12px]"
                  >
                    {status}
                  </motion.h3>
                ))}
              </motion.div>
            )}
            <div className="w-full h-10 input flex items-center justify-between font-medium text-black/70 ">
              {type === "project"
                ? projectData.type.charAt(0).toLocaleUpperCase() +
                  projectData.type.slice(1)
                : type === "event"
                ? eventData.type.charAt(0).toLocaleUpperCase() +
                  eventData.type.slice(1)
                : ""}
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
          <button
            type="submit"
            className="w-full my-4 h-10 p-2 cursor-pointer bg-dark_blue 
            flex items-center justify-center rounded-[10px] font-bold text-white"
          >
            Submit
          </button>
        </form>
      ) : (
        <>
          {/* task form*/}
          <form
            className="flex flex-col my-4 font-light"
            onSubmit={handleSubmit} >
            <label className="label">Topic</label>
            <input
              type="text"
              name="topic"
              value={taskData.topic}
              onChange={handleInputChange}
              placeholder={`Enter the topic of the task`}
              className="w-full h-10 input"
            />
            <label className="label">Add Item</label>
            <input
              type="text"
              placeholder={`Enter the list of items of the task`}
              className="w-full h-10 input"
            />
            <label className="label mt-2">Start Date</label>
            <input
              type="date"
              name="startDate"
              min={today}
              onChange={handleInputChange}
              className="w-full h-10 input invalid:border-dark_red/70 invalid:border"
            />
            <label className="label mt-2">End Date</label>
            <input
              type="date"
              name="endDate"
              min={today}
              onChange={handleInputChange}
              className="w-full h-10 input invalid:border-dark_red/70 invalid:border"
            />
            <button
              type="submit"
              className="w-full my-4 h-10 p-2 cursor-pointer bg-dark_blue 
              flex items-center justify-center rounded-[10px] font-bold text-white">
              Submit
            </button>
          </form>
        </>
      )}
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
