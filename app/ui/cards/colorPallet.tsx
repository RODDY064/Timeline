'use client'
import Image from "next/image";

interface Structure {
  types: string;
   color: string;
    icon: string
}
export default function ColorPallet({ type }: { type: string }) {
  const pallet: Array<Structure> = [
    {
      types: "Development",
      color: "bg-green-500/10", // Green
      icon: "/assets/Engineering.svg",
    },
    {
      types: "Design",
      color: "bg-cyan-400/10", // Cyan
      icon: "/assets/Design.svg",
    },
    {
      types: "Production",
      color: "bg-yellow-500/10", // Yellow
      icon: "/assets/Production.svg",
    },
    {
      types: "Marketing",
      color: "bg-pink-500/10", // Pink
      icon: "/assets/Marketing.svg",
    },
    {
      types: "Finance",
      color: "bg-purple-500/10", // Purple
      icon: "/assets/Finance.svg",
    },
    {
      types: "Human Resources",
      color: "bg-orange-500/10", // Orange
      icon: "/assets/Human.svg",
    },
    {
      types: "Sales",
      color: "bg-red-500/10", // Red
      icon: "/assets/Sales.svg",
    },
    {
      types: "Customer Service",
      color: "bg-blue-200/10", // Light Blue
      icon: "/assets/Customer.svg",
    },
    {
      types: "Research",
      color: "bg-green-900/10", // Dark Green
      icon: "/assets/Research.svg",
    },
    {
      types: "Quality Assurance",
      color: "bg-green-300/10", // Light Green
      icon: "/assets/Quality.svg",
    },
    {
      types: "Operations",
      color: "bg-blue-900/10", // Dark Blue
      icon: "/assets/Operations.svg",
    },
    {
      types: "Management",
      color: "bg-yellow-300/10", // Gold
      icon: "/assets/Management.svg",
    },
    {
      types: "Technology",
      color: "bg-gray-500/10", // Gray
      icon: "/assets/Technology.svg",
    },
    {
      types: "Education",
      color: "bg-blue-500/10", // Blue
      icon: "/assets/Education.svg",
    },
    {
      types: "Engineering",
      color: "bg-red-700/10", // Dark Red
      icon: "/assets/Engineering.svg",
    },
    {
      types: "Administration",
      color: "bg-brown-500/10", // Brown
      icon: "/assets/Administration.svg",
    },
  ];
  

  const Icons: Array<Structure> =  pallet.filter((item) => item.types.toLocaleLowerCase() === type.toLocaleLowerCase());


  return (
    <div className={`w-[3rem] h-[3rem] rounded-[15px] ${Icons[0]?.color} flex items-center justify-center`}>
      <Image
        src={Icons[0]?.icon}
        width={22}
        height={22}
        alt={Icons[0]?.types}
        className="opacity-70"
      />
    </div>
  );
}
