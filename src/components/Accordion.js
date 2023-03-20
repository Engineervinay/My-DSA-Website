import React from 'react'
import {AiOutlineMinus,AiOutlinePlus} from "react-icons/ai"
import '../App.css';
import { problems } from '../data';
import { Collapse } from 'react-collapse';
function Accordion({open,toggle,title,desc,id}) {
  return (
    <div className='pt-[10px]'>
      <div className="bg-white py-[25px] px-[50px] flex justify-between items-center cursor-pointer" onClick={toggle}>
        <p className="text-[22px] font-semibold">{title}</p>
        <div className='text-[30px]'>
          {open ? <AiOutlineMinus/> : <AiOutlinePlus/>}
        </div>
      </div>
      <Collapse isOpened={open}>
        <div className='bg-white px-[50px] pb-[20px] '>
            
           </div>
      </Collapse>
    </div>
  )
}

export default Accordion;