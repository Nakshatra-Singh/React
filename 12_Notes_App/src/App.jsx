import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const submitHandler=(e)=>{
    e.preventDefault()    

    const copyTask = [...task];
    copyTask.push({title,details})
    setTask(copyTask)
    console.log(task);
    

    setTitle('')
    setDetails('')
  }

  const deleteNotes = (idx)=>{
    const copyTask = [...task]
    copyTask.splice(idx,1)
    setTask(copyTask)    
  }

  return (
    <div className='h-screen lg:flex bg-black text-white '>
      <form onSubmit={(e)=>{submitHandler(e)}} className='flex flex-col lg:w-1/2 items-start  gap-4 p-10'>        
          <h1 className='text-3xl font-bold'>Add Notes</h1>

          {/* Input for Notes Heading       */}
          <input 
            type="text"
            placeholder='Enter Notes Heading' 
            className='px-5 py-2 font-medium w-full border-2 rounded outline-none'
            value={title}
            onChange={(e)=>{
              setTitle(e.target.value)
            }}
            />

          {/* Input for Notes Description  */}
          <textarea 
            type="text"
            placeholder='Write Details'
            className='px-5 py-2 h-20 font-medium w-full border-2 rounded outline-none'
            value={details}
            onChange={(e)=>{
              setDetails(e.target.value)
            }}
          />

          <button 
            className='bg-white text-black active:scale-95 font-medium w-full px-5 py-2 rounded'
          >Add Notes</button>        
      </form>
      <div className='lg:w-1/2 lg:border-l-2 p-10 bg-black '>

        <h1 className='text-3xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 h-[90%] mt-5 overflow-auto'>
          {task.map(function(elem, idx){

            return <div key={idx} className='flex justify-between flex-col bg-cover bg-[url(https://static.vecteezy.com/system/resources/previews/037/152/677/large_2x/sticky-note-paper-background-free-png.png)]  text-black h-52 w-40 rounded-2xl py-9 px-4 '>
              <div>
                <h3 className='leading-tight font-bold text-lg'>{elem.title}</h3>
                <p className='leading-tight font-medium text-lg text-gray-700'>{elem.details}</p>
              </div>
              <button 
                className='bg-red-400 active:scale-95 rounded w-full text-lg font-bold text-white py-1'
                onClick={()=>{
                  deleteNotes(idx)
                }}
              >Delete</button>
            </div>
          })}
          
        </div>
      </div>
    </div>
  )
}

export default App