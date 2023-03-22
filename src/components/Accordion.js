import React from 'react'
import { useState } from 'react';

import {AiOutlineMinus,AiOutlinePlus} from "react-icons/ai"
import '../App.css';
import { problems } from '../data';
import { Collapse } from 'react-collapse';
import SubAccordion from './SubAccordion';
function Accordion({open,toggle,title,desc,id}) {
  const[subopen,setOpen]=useState(false);
  const subtoggle=(index)=>{
    if(subopen===index){
      return setOpen(null)
    }
    setOpen(index);
  }
 
  return (
    <div className='pt-[10px]  '>
      <div className="bg-cyan-400 bg-opacity-10 rounded-lg py-[25px] px-[50px] flex justify-between items-center cursor-pointer" onClick={toggle}>
        <p className="text-[22px] font-semibold">{title}</p>
        <div className='text-[30px]'>
          {open ? <AiOutlineMinus/> : <AiOutlinePlus/>}
        </div>
      </div>
      <Collapse isOpened={open}>
        <div className='bg-cyan-400 bg-opacity-10 rounded-b-lg px-[50px] pb-[20px] '>
        {problems.map((data,index)=>{
            if(id===data.topicRefid){return <SubAccordion key={index} open={index===subopen} name={data.name} gfg={data.gfg} leetcode={data.leetcode} article={data.article} youtube={data.youtube }code={data.code}  toggle={()=>subtoggle(index)}/>
 }
  return <></>
 })}

           </div>
      </Collapse>
    </div>
  )
}

export default Accordion;