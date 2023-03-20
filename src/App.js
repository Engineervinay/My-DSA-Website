import { useState } from 'react';
import './App.css';
import {topics,getLength} from './data';
import Accordion from './components/Accordion';
function App() {
  const[open,setOpen]=useState(false);
  const toggle=(index)=>{
    if(open===index){
      return setOpen(null)
    }
    setOpen(index);
  }
  const numberOfProblems=getLength()
  
  return (
    <div className="App bg-gradient-to-r from-sky-400 to-blue-500 ">
      
  <div className='heading '>    <h1 className="text-3xl font-bold ">
        A2Z DSA Sheet  Problems 
    </h1>
    <p className='text-2xl'>{numberOfProblems} / 470</p>
    </div>
    <div className='Main bg-opacity-0 bg-gray-100 flex  flex-col w-full md:w-4/5 px-2 m-auto '>

        {topics.map((data,index)=>{
            return <Accordion key={index} open={index===open} title={data.name} desc={"demo desc"+data.id} id={data.id} toggle={()=>toggle(index)}/>
        })}

      </div> 
    </div>
  );
}

export default App;
