"use client";
import {motion, useAnimation} from 'framer-motion';
import Cancel from "../buttons/cancel";
import { useCreateContext } from '@app/utils/context/createContextProvider';
import { slide } from './animations';
import { useEffect } from 'react';
import Back from '../buttons/back';
import ChangePage from '../buttons/changePage';
import FormDataPage from './form';
import ErrorMessage from './errorMessage';

export default function CreateProject({ setOpen ,open }:{ setOpen:any, open:boolean}) {
    const { create } = useCreateContext()
    const controls = useAnimation()

    useEffect(()=>{
     controls.start( create.project ? 'open':'closed')
    },[create.project])


  return (
    <>
      <motion.div
      variants={slide}
      animate={controls}
      initial='closed'
      id='create'
      className="md:w-[18rem] w-[95%] place-self-center md:place-self-auto md:h-[100%] h-[80%] bg-white rounded-[25px] p-4">
        <div className="flex justify-between">
          <Back action='reset' />
           <ErrorMessage/>
          <Cancel setOpen={setOpen}/>
        </div>
        <h1 className="font-[600] text-light_blue my-4">Create a project</h1>
         <FormDataPage type='project' setOpen={setOpen}/>
         <div className='w-full mt-2 flex justify-between px-4'>
          <ChangePage  setOpen={setOpen} open={open}/>
         <ChangePage page='event'/>
         </div>
      </motion.div>
    </>
  );
}


