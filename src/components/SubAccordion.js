import React from 'react'
import { CopyBlock, dracula } from "react-code-blocks";

import {AiFillFileText,AiOutlineMinus,AiOutlinePlus} from "react-icons/ai"
import{SiYoutube,SiGeeksforgeeks,SiLeetcode} from "react-icons/si"
import '../App.css';
import { Collapse } from 'react-collapse';
function SubAccordion({open,toggle,name,gfg,leetcode,article,youtube,code}) {
  //make it glass morphism
  // and the background 
  return (
    <div className='pt-[10px]'>
      <div className="bg-cyan-400 bg-opacity-10 rounded-t-lg py-[25px] px-[50px] flex justify-between items-center cursor-pointer" onClick={toggle}>
        <p className="text-[22px] font-semibold">{name}</p>
        <div className='text-[27px] flex space-x-3 '>
        <a href={youtube}target="_blank" rel='noreferrer'> <SiYoutube/></a>
        <a href={gfg}target="_blank"rel='noreferrer'> <SiGeeksforgeeks/></a>
        <a href={leetcode}target="_blank"rel='noreferrer'> <SiLeetcode/></a>
        <a href={article}target="_blank" rel='noreferrer'> <AiFillFileText/></a>
       
          {open ? <AiOutlineMinus/> : <AiOutlinePlus/>}
        </div>
      </div>
      <Collapse isOpened={open}>

        <div className='bg-cyan-400 bg-opacity-10 rounded-b-lg px-[50px] pb-[20px] '>
        <CopyBlock
    text={code}
    language={"cpp"}
    showLineNumbers={false}
    theme={dracula}
    codeBlock
  />
           </div>
      </Collapse>
    </div>
  )
}

export default SubAccordion;