import Image from "next/image";

export default function Logo() {
  return (
    <div className="w-24 h-[4rem]  md:w-full md:h-[11%] flex items-center justify-center md:bg-white rounded-[8px] md:border border-black/10 mt-[0.1rem]">
      <div className="flex justify-center gap-1">
        <div className="w-[2.45rem] h-[2.35rem] relative flex items-center justify-center rounded-full bg-dark_cream overflow-hidden">
           <Image src='/images/logo.png' fill={true} className="object-cover" alt="logo"/>
        </div>
        <Image src='/icons/right-arrow.svg' width={25} height={25} alt="r-arrow" className="rotate-90 cursor-pointer hidden md:block"/>
      </div>
    </div>
  );
}
