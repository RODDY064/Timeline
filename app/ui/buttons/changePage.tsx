"use client";
import { useCreateContext } from "@app/utils/context/createContextProvider";

export default function ChangePage({
  page,
  open,
  setOpen,
}: {
  page?: "project" | "event" | "task";
  open?: boolean;
  setOpen?: any;
}) {
  const { setCreate } = useCreateContext();

  const handleActions = (action?: boolean | string) => {
    if (typeof action === "boolean") {
      setOpen(!open);
    } else {
      switch (action) {
        case "project":
          setCreate((prev) => ({ ...prev, event: false,task:false, project: true }));
          break;
        case "event":
          setCreate((prev) => ({ ...prev, project: false, task:false, event: true }));
          break;
          case "task":
            setCreate((prev) => ({ ...prev, project: false, event:false, task: true }));
          break;
        default:;
          break;
      }
    }
  };

  return (
    <div
       id="action"
      onClick={() => (page ? handleActions(page) : handleActions(open))}
      className={`px-3 h-[40px] py-2 rounded-[9px] text-sm  cursor-pointer 
    font-[500] flex items-center justify-center 
    ${
      page
        ? "bg-dark_blue text-white"
        : "bg-cream_green/50 border border-light_green text-light_green"
    } `}>
      Add {page ? page : "a team"}
    </div>
  );
}
