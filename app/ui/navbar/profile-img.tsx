import Image from 'next/image'
import React from 'react'

export default function ProfileImg() {
  return (
    <div className='md:w-full md:h-[14%] flex flex-col items-center justify-center md:bg-white rounded-[8px] border border-black/10'>
      <div className='w-[3rem] h-[3rem] flex items-center justify-center border border-black/25 rounded-full'>
        <Image src='/icons/user.svg' width={25} height={25} alt='profile' />
      </div>
      <h2 className='text-xs font-medium text-dark_black text-opacity-40 mt-2'>
        John Doe
      </h2>
    </div>
  )
}
