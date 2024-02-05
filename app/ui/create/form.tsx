"use client";

import { useCreateContext } from "@app/utils/context/createContextProvider";
import { useFormInput } from "./context/formContextProvider";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { DropTextAppear, slideUp } from "./animations";
import { useRouter, useSearchParams } from "next/navigation";
import { create } from "@node_modules/cypress/types/lodash";

export default function FormDataPage({
  type,
  setOpen,
  id
}: {
  type: "project" | "event" | "task";
  setOpen: any;
  id?: string | null;
}) {
  const {create ,setCreate } = useCreateContext();
  // data input state management
  const {
    projectData,
    setProjectData,
    eventData,
    setEventData,
    taskData,
    setTaskData,
  } = useFormInput();

    // delete the url
    const searchParams = useSearchParams();
    const param = new URLSearchParams(searchParams);
    const { replace } = useRouter();
  

  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
     let endPoint;
    let formData;

    // check if all the data is filled and valid
    if (
      projectData.name !== "" &&
      projectData.startDate &&
      projectData.endDate &&
      new Date(projectData.endDate) >= new Date(projectData.startDate) &&
      eventData.name !== "" &&
      eventData.startDate &&
      eventData.endDate &&
      new Date(eventData.endDate) >= new Date(eventData.startDate) &&
      taskData.topic !== ""
    ) {
      formData = { projectData, eventData, taskData };
      endPoint = "timeline";
    } else if (   

    projectData.name !== "" &&
    projectData.startDate &&
    projectData.endDate &&
    new Date(projectData.endDate) >= new Date(projectData.startDate) &&
    eventData.name !== "" &&
    eventData.startDate &&
    eventData.endDate &&
    new Date(eventData.endDate) >= new Date(eventData.startDate)){

      formData = { projectData, eventData };
      endPoint = "projectEvent";

    }
    
    else if (

      // check if event data and task  data is filled and valid

      eventData.name !== "" &&
      eventData.startDate &&
      eventData.endDate &&
      new Date(eventData.endDate) >= new Date(eventData.startDate) &&
      taskData.topic !== ""
    ) {
      formData = { eventData, taskData };
      endPoint = "eventTask";
    } else {
      // check  for individual data is filled and valid
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
      endPoint = `${type}/${id}`;
    }

    const response = await fetch(`/api/${endPoint}`, {
      method: "POST",
      body: JSON.stringify(formData),
    });


    if (response.status === 200) {
      setCreate(() => ({
        project: false,
        event: false,
        task: false,
        key: create.key? create.key + 1 : 1
      })),
        setOpen && setOpen(false);

        if(param.has('id')){
          // Delete the 'id' query parameter
          param.delete('id');
          replace(`?${param.toString()}`);
        }
    }
  };


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
  const [priorityDropDown, setPriorityDropDown] = useState<boolean>(false);

  const controls = useAnimation();
  useEffect(() => {
    controls.start(isDropDown ? "show" : "hide");
  }, [isDropDown]);

  useEffect(() => {
    controls.start(priorityDropDown ? "show" : "hide");
  }, [priorityDropDown]);

  const handlePriorityDropDown = (
    e:React.MouseEvent<HTMLDivElement,MouseEvent>,
    term:string) => {
      e.preventDefault();
      setTaskData((prevData) => ({ ...prevData, priority: term }));
  }

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
            required
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
            required
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
            className="w-full max-h-[72px] min-h-[72px] input"
          />
          <label className="label mt-2">Start Date</label>
          <input
            name="startDate"
            type="date"
            min={today}
            required
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
            required
            min={today}
            value={
              type === "project"
                ? projectData.endDate
                : type === "event"
                ? eventData.endDate
                : ""
            }
            onChange={handleInputChange}
            className="w-full h-10 input"
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
           border border-dark_cream bg-white absolute p-4 overflow-x-hidden overflow-y-scroll">
                {Status.map((status, index) => (
                  <motion.h3
                    key={index}
                    onClick={(e) => handleDropDown(e, status)}
                    variants={DropTextAppear}
                    className="cursor-pointer p-2 hover:bg-dark_cream w-full rounded-[12px]">
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
            flex items-center justify-center rounded-[10px] font-bold text-white">
            Submit
          </button>
        </form>
      ) : (
        <>
          {/* task form*/}
          <form
            className="flex flex-col my-4 font-light"
            onSubmit={handleSubmit}>
            <label className="label">Topic</label>
            <input
              type="text"
              required
              name="topic"
              value={taskData.topic}
              onChange={handleInputChange}
              placeholder={`Enter the topic of the task`}
              className="w-full h-10 input"
            />
            <label className="label">Content</label>
            <textarea
            typeof="text"
            required
            name="content"
            value={taskData.content}
            onChange={handleInputChange}
            placeholder={`Enter the content of the ${type}`}
            className="w-full max-h-[150px] min-h-[100px] input"
          />
            <label className="label mt-2">Due Date</label>
            <input
              type="date"
              required
              name="dueDate"
              value={taskData.dueDate}
              min={today}
              onChange={handleInputChange}
              className="w-full h-10 input"
            />
            <label className="label mt-2">Priority</label>
            <div className="w-full flex justify-center relative peer">
            {/*priority drop down menu*/}
            {priorityDropDown && (
              <motion.div
                variants={slideUp}
                animate={controls}
                initial="hide"
                onClick={() => setPriorityDropDown(false)}
                className="w-full  h-[9rem] top-[-10.5rem] shadow-dark  rounded-[15px]
                  border border-dark_cream bg-white absolute p-4 z-60 ">
                {priority.map((item, index) => (
                  <motion.h3
                    key={index}
                    onClick={(e) => handlePriorityDropDown(e, item)}
                    variants={DropTextAppear}
                    className="cursor-pointer p-2 hover:bg-dark_cream w-full rounded-[12px]">
                    {item}
                  </motion.h3>
                ))}
              </motion.div>
            )}
            <div className="w-full h-10 input flex items-center justify-between font-medium text-black/70 ">
              {taskData.priority.charAt(0).toLocaleUpperCase() + taskData.priority.slice(1)}
              <Image
                src="/icons/right-arrow.svg"
                width={20}
                height={20}
                alt="arrow"
                onClick={() => setPriorityDropDown((prev) => !prev)}
                className="rotate-90 cursor-pointer "
              />
            </div>
          </div>
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


const priority: string[] = ["low", "medium", "high"];