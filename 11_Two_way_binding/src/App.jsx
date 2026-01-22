import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')


  const SubmitHandler=(e)=>{
    e.preventDefault()
    console.log('Form Submitted by',title);
    setTitle('')
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        SubmitHandler(e)
      }}>
        <input 
        type="text" 
        className='rounded-2xl outline-none' 
        placeholder='Enter your name'
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value)
        }}
        />

        <button className='rounded-2xl'>Submit</button>
      </form>
    </div>
  )
}

export default App