"use client"
import {motion, useAnimation} from 'framer-motion';
import Cancel from "../buttons/cancel";
import { useCreateContext } from '@app/utils/context/createContextProvider';
import { slide } from './animations';
import { useEffect } from 'react';
import FormDataPage from './form';
import Back from '../buttons/back';
import ChangePage from '../buttons/changePage';



export default function CreateTask( { setOpen  }:{ setOpen:any}) {
    const { create } = useCreateContext()
    const controls = useAnimation()

    useEffect(()=>{
     controls.start( create.task ? 'open':'closed')
    },[create.task])

  


  return (
    <motion.div
    variants={slide}
    animate={controls}
    initial='closed'
    id='create'
    className="md:w-[18rem] w-[95%] md:h-[100%] h-[80%] bg-white rounded-[25px] p-4">
      <div className="flex justify-between">
          <Back action='back' name='event'/>
          <Cancel />
      </div>
      <h1 className="font-[600] text-light_blue my-4">Create a task</h1>
      <FormDataPage type='task' setOpen={setOpen}/>     
    </motion.div>
  )
}

/*
 */