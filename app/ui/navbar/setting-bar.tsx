import LinkPath from "./links";

export default function SettingBar() {
  return (
    <div className="w-full md:h-[28%] flex flex-col items-center py-4 md:bg-white rounded-[8px] border border-black/10">
     <LinkPath title="GENERAL" start={3} end={5}/>
    </div>
  );
}
