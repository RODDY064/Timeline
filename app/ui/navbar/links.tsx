import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { NavLinks } from "@app/utils/nav-links";

export default function LinkPath({ title, start, end}:{title:string ,start:number,end:number}) {
    const pathname = usePathname();
    const navLink = NavLinks.slice(start,end)

  return (
    <>
     <h2 className="font-medium text-xs text-dark_black  text-opacity-50">
        {title}
      </h2>
      <div className="w-full flex flex-col  py-2">
        {navLink.map((item) => (
         <div key={item.name} className="w-full relative">
           <Link
            href={item.link}
            key={item.name}
            className={clsx(
              "w-full h-[3.2rem]  flex items-center gap-2 justify-center peer",
              {
                " bg-white md:bg-dark_cream border-l-2 md:border-l-[1.5px] border-light_blue ": pathname.includes(item.link),
              }
            )}>
            <Image
              src={pathname.includes(item.link) ? item.icon_focus : item.icon}
              width={20}
              height={20}
              alt={item.name}
              className="cursor-pointer opacity-65"
            />
            <h2 className="text-sm text-black/40 md:hidden">{item.name}</h2>
          </Link>
           <div className="absolute  hidden md:peer-has-[:hover]:flex  top-2  py-2 px-4 rounded-[15px]  items-center justify-center bg-white border border-black/10 left-[7.2rem] ">
              <p className="text-xs font-medium text-dark_black text-opacity-40">{item.name}</p>
           </div>
         </div>
        ))}
      </div>
    </>
  )
}

