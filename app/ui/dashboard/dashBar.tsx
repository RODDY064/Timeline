"use client"
import { motion} from 'framer-motion';
import Image from "next/image";



export default function DashBar( {sliderRef }:{ sliderRef:any}) {

  const handleUpClick = () => {
    if (sliderRef.current) {
      const containerHeight = sliderRef.current.clientHeight;
      sliderRef.current.scrollTop -= containerHeight; // Scroll up by subtracting container height from scrollTop
    }
  };
  
  const handleDownClick = () => {
    if (sliderRef.current) {
      const containerHeight = sliderRef.current.clientHeight;
      sliderRef.current.scrollTop += containerHeight; // Scroll down by adding container height to scrollTop
    }
  };
  
  return (
    <div className="w-full h-12 max-sm:my-4 mb-2 p-1  flex items-center justify-between border-b border-black/10  text-sm font-light">
      <div className="flex gap-2 ">
        <div className="py-[0.45rem] md:flex hidden  items-center justify-center px-[1.6rem] rounded-[25px] border border-black/10 ">
          Projects
        </div>
        <div className="py-[0.45rem] flex hover:bg-white items-center justify-center px-[1.6rem] rounded-[25px] border border-black/10 cursor-pointer">
          Sort by
        </div>
      </div>
      <div className="flex gap-2">
        {/* filter by date*/}
        <div className="flex gap-[5px]">
        <div 
        onClick={handleUpClick}
        className="w-[2.7rem] h-[2.6rem] rounded-full border flex items-center justify-center bg-cream_green/50 border-light_green mb-2 cursor-pointer ">
            <motion.div
             whileHover={{
                y:-2,
                scale:1.2
             }}
            ><Image src="/icons/right-arrow.svg" width={20} height={20} alt="arrow" className="rotate-[-90deg]"/>
            </motion.div>
          </div>
          <div 
          onClick={handleDownClick}
          className="w-[2.7rem] h-[2.6rem] rounded-full border flex items-center justify-center bg-cream_green/50 border-light_green mb-2 cursor-pointer">
            <motion.div
             whileHover={{
                y:2,
                scale:1.2
             }}
            ><Image src="/icons/right-arrow.svg" width={20} height={20} alt="arrow" className="rotate-90"/></motion.div>
          </div>
        </div>
        <div className="h-[2.7rem] hidden mb-2 md:flex gap-2  items-center justify-center px-[3px] rounded-[25px] border border-black/10 cursor-pointer py-[3px]">
          {["Day", "Week", "Month"].map((item) => (
            <h3
              key={item}
              className={`px-4 h-full ${ item === 'Month' ? 'bg-white': ''} rounded-[25px] text-black/70 flex items-center justify-center`}>
              {item}
            </h3>
          ))}
        </div>
      </div>
    </div>
  );
}
