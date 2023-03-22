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
    <div className="App bg-white pt-4">
      
  <div className='heading pb-4 flex bg-white justify-center space-x-4 '>    <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 ">
        A2Z DSA Sheet  Problems 
    </h1>
    <p className='text-xl self-center text-white cursor-pointer bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-3 py-1 text-center '>{numberOfProblems}/470</p>
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
