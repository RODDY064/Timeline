"use client";
import {motion, useAnimation} from 'framer-motion';
import Cancel from "../buttons/cancel";
import { useCreateContext } from '@app/utils/context/createContextProvider';
import { slide } from './animations';
import { useEffect } from 'react';
import Back from '../buttons/back';
import ChangePage from '../buttons/changePage';
import FormDataPage from './form';

export default function CreateEvent({ setOpen ,open }:{ setOpen:any, open:boolean}) {
    const { create } = useCreateContext()
    const controls = useAnimation()

    useEffect(()=>{
     controls.start( create.event ? 'open':'closed')
    },[create.event])


  return (
    <>
      <motion.div
      variants={slide}
      animate={controls}
      initial='closed'
      id='create'
      className="md:w-[18rem] w-[95%] h-[80%] md:h-[100%] bg-white rounded-[25px] p-4">
        <div className="flex justify-between">
          <Back action='back' name='project'/>
          <Cancel setOpen={setOpen}/>
        </div>
        <h1 className="font-[600] text-light_blue mt-4 mb-2 ">Create event</h1>
        <FormDataPage type='event' setOpen={setOpen} />
        <div className='w-full mt-2 flex justify-between px-4'>
          <ChangePage  setOpen={setOpen} open={open}/>
         <ChangePage page='task'/>
         </div>
      </motion.div>
    </>
  );
}


