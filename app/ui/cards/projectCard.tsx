import Image from "next/image";
import ColorPallet from "./colorPallet";
import { formatDateFromISOString } from "@app/utils/functions/formatData";
import TruncatedText from "./trucatedText";
import Add from "./add";


export default function ProjectCard({ data }: { data: any }) {
  return (
    <>
      <div className="md:w-[16.4rem] hover:border-light_green hover:bg-cream_green/10  max-ms:place-self-center  flex-none w-[90%] h-[14rem] md:h-[12rem]  bg-white  rounded-[35px]  border border-black/10 p-4 px-5 cursor-pointer">
        <div className="w-full h-[4rem] flex items-center gap-3">
          <ColorPallet type={data.type} />
          <div className="flex flex-col items-center justify-start h-[95%]">
            <h2 className="text-[1.2rem] font-[650]">
             <TruncatedText text={data.name} />
            </h2>
            <h4 className="text-[0.7rem] text-black/30 my-[2px]">
              {`${formatDateFromISOString(
                data.startDate
              )} - ${formatDateFromISOString(data.endDate)}`}
            </h4>
          </div>
        </div>
        <div className="py-1">
          <div className="flex justify-between">
            <h4 className="text-[0.6rem] font-bold text-black mb-[2px]">
              Events
            </h4>
            <div className="flex items-center text-center  gap-2">
              <Add type="event" projectId={data.id} />
              <div
                className="flex text-[0.6rem] w-[1.3rem] h-[1.3rem] rounded-full
           items-center justify-center border border-black/10 mb-[1px]"
              >
                <h4>
                  +
                  {data.event && data.event.length > 2
                    ? data.event.length - 2
                    : 0}
                </h4>
              </div>
            </div>
          </div>
          {data.event[0] ? (
            <>
              <ul className="text-sm font-bold min-h-10 mt-[1px]">
                {data.event.slice(0, 2).map((item: any) => (
                  <li key={item.id} className="flex justify-between">
                   <TruncatedText text={item.name} />
                    <span className="text-black/50">3/4</span>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <>
              <ul className="text-sm font-bold min-h-10">
                <li className="flex justify-between">
                  <span>No Event Available</span>
                </li>
              </ul>
            </>
          )}
        </div>
        <div className="flex items-center justify-between">
          <div
            className="w-[2rem] h-[2rem] border border-black/20 rounded-full 
       flex items-center justify-center text-xs p-1 text-dark_blue" >
            75%
          </div>
          <div className="flex gap-3 items-center px-2">
            <h3 className="text-sm text-red-400 font-medium cursor-pointer">
              Delete
            </h3>
            <h3 className="text-sm text-light_green font-medium cursor-pointer">
              Edit
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
