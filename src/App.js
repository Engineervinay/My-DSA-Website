import { useState } from 'react';
import './App.css';
import topics from './data';
import Accordion from './components/Accordion';
function App() {
  const[open,setOpen]=useState(false);
  const toggle=(index)=>{
    if(open===index){
      return setOpen(null)
    }
    setOpen(index);
  }
  return (
    <div className="App bg-slate-400">
      
      <h1 className="text-3xl font-bold ">
        A2Z DSA Sheet  Problems
    </h1>
    <div className='Main '>

        {topics.map((data,index)=>{
            return <Accordion key={index} open={index===open} title={data.name} desc={"demo desc"+data.id} toggle={()=>toggle(index)}/>
        })}

      </div> 
    </div>
  );
}

export default App;
