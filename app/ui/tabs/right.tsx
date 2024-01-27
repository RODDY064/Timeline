import Calender from './calender'
import UpComing from './upcoming'

export default function RightTab() {
  return (
    <div className='w-[17rem] hidden md:flex gap-[0.2rem] flex-col items-center h-[98%]  absolute my-2 top-0 right-2 z-20'>
        {/* home tabs*/ }
        <Calender/>
        <UpComing/>

        {/* roadmap tabs*/}
        


    </div>
  )
}
 