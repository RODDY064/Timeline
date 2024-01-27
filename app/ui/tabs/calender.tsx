"use client";
import Image from "next/image";
import { useState } from "react";

export default function Calender() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  const renderCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = getFirstDayOfMonth(year, month);
    const today = new Date();

    const days = [];
    const startDay = firstDayOfMonth === 0 ? 7 : firstDayOfMonth;

    for (let i = 1; i < startDay; i++) {
      days.push(<div key={`empty-${i}`} className="empty-day"></div>);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const isToday =
        currentDate.getFullYear() === today.getFullYear() &&
        currentDate.getMonth() === today.getMonth() &&
        i === today.getDate();

  

        const dayClassName = ` text-sm font-bold flex items-center justify-center ${isToday ? 'w-[100%] h-[85%] bg-dark_blue text-white rounded-[10px]' : ''}`;
  



      days.push(
        <div key={i} className={dayClassName}>
          {i}
        </div>
      );
    }

    return days;
  };

  const handleMonthChange = (event: any) => {
    const selectedMonth = event.target.value;
    setCurrentDate(new Date(currentDate.getFullYear(), selectedMonth, 1));
  };

  const handleYearChange = (event: any) => {
    const selectedYear = event.target.value;
    setCurrentDate(new Date(selectedYear, currentDate.getMonth(), 1));
  };

  return (
    <div className="w-full h-[20rem] flex-none rounded-[25px] bg-white border border-black/10 p-2 py-1">
      <div className="w-full flex gap-2">
        <div className="w-[50%] h-11 flex items-center justify-center p-3 rounded-[17px] bg-dark_cream mt-1 px-1 cursor-pointer relative">
          <select
            id="month-select"
            className="appearance-none p-2 w-full text-center focus:outline-none bg-transparent text-sm font-[650] cursor-pointe z-20 cursor-pointer simple"
            onChange={handleMonthChange}
            value={currentDate.getMonth()}
          >
            {Array.from({ length: 12 }, (_, i) => (
              <option key={i} value={i}>
                {new Date(currentDate.getFullYear(), i, 1).toLocaleString(
                  "default",
                  { month: "long" }
                )}
              </option>
            ))}
          </select>
          <Image
            src="/icons/right-arrow.svg"
            width={15}
            height={15}
            alt="arrow-down"
            className="cursor-pointer rotate-90 absolute right-[0.4rem] z-10"
          />
        </div>
        <div className="w-[50%] h-11 p-3 flex items-center justify-center rounded-[17px] bg-dark_cream mt-1 relative">
          <select
            id="year-select"
            className="appearance-none w-full text-center  p-2 focus:outline-none bg-transparent text-sm font-[650] cursor-pointer z-20 simple"
            onChange={handleYearChange}
            value={currentDate.getFullYear()}
          >
            {Array.from({ length: 10 }, (_, i) => (
              <option key={i} value={currentDate.getFullYear() - 5 + i}>
                {currentDate.getFullYear() - 5 + i}
              </option>
            ))}
          </select>
          <Image
            src="/icons/right-arrow.svg"
            width={15}
            height={15}
            alt="arrow-down"
            className="cursor-pointer rotate-90 absolute right-5 z-10"
          />
        </div>
      </div>
      <div className="w-full flex p-[1.4rem] gap-[1.35rem] items-center justify-center h-10">
        {["M", "T", "W", "T", "F", "S", "S"].map((day) => (
          <div key={day} className="font-[500] text-sm text-black/40">{day}</div>
        ))}
      </div>
      <div className="w-full h-[13.5rem] rounded-[32px] bg-dark_cream p-[1.4rem]">
        <div className="w-full h-full grid   grid-cols-7   justify-center ">
          {renderCalendar()}
        </div>
      </div>
    </div>
  );
}
