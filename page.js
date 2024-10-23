"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState(" ");
  const [desc, setdesc] = useState(" ");
  const [mainTask, setmainTask] = useState([]);

  const submitHandler = (e)=>{
    e.preventDefault();
    setmainTask([...mainTask, {title, desc}]);
    settitle(" ");
    setdesc(" ");
    console.log(mainTask);

  };

  const deleteHandler =(i)=>{
    let copytask = [...mainTask]
    copytask.splice(i,1)
    setmainTask(copytask)

  }

  let renderTask=<h2>No Task available</h2>


  if(mainTask.length>0){
    renderTask = mainTask.map((t,i)=>{
      return(
        <li key={i} className='flex items-center justify-between'>

          <div className='flex items-center justify-between mb-5  w-2/3'>

            <h5 className='text-2xl font-semibold'>{t.title}</h5>
            <h6 className='text-xl font-semibold'>{t.desc}</h6>
            <button onClick={()=>{
              deleteHandler(i)
              }} 
              
              className='rounded bg-red-400 text-white font-bold py-2 px-4'>
              Delete
              
              </button>
          
          </div>
        </li>
      );
    });
  }

  return (
    <>
    
    
    <h1 className='bg-slate-500 text-white font-bold text-2xl text-center p-5'> 
      MY-TO-DO-LIST
    </h1>

    <form onSubmit={submitHandler}>
      <input type='text'  className='text-2xl font-bold text-gray-900 border-zinc border-4 m-5 py-2 px-4' placeholder='Enter Title'
      value={title}
      onChange={(e)=>{
        settitle(e.target.value)

      }} />

      <input type='text'  className='text-2xl text-gray-900 border-zinc font-bold border-4 m-5 py-2 px-4' placeholder='Describe Here'
      value={desc}
        onChange={(e)=>{
        setdesc(e.target.value)
         }} />

      <button className='bg-black text-white py-2 px-4 m-5 font-bold rounded'> 
        Add Task 
      </button>

      

    </form>

    <hr/>

    <div className='bg-slate-200   p-8' >
       <ul>
         {renderTask}
       </ul>
    </div>
    
    </>
  )
}

export default page