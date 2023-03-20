import React from 'react'
import {AiOutlineMinus,AiOutlinePlus,AiOutlineYoutube} from "react-icons/ai"
import{SiGeeksforgeeks,SiLeetcode} from "react-icons/si"
import '../App.css';
import { Collapse } from 'react-collapse';
function SubAccordion({open,toggle,name,gfg,leetcode,article,youtube,code}) {
  return (
    <div className='pt-[10px]'>
      <div className="bg-white py-[25px] px-[50px] flex justify-between items-center cursor-pointer" onClick={toggle}>
        <p className="text-[22px] font-semibold">{name}</p>
        <div className='text-[30px] flex '>
        <a href={youtube}> <AiOutlineYoutube/></a>
        <a href={gfg}> <SiGeeksforgeeks/></a>
        <a href={leetcode}> <SiLeetcode/></a>
        
        
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

export default SubAccordion;