import React from 'react'

const App = () => {

  const SubmitHandler = (e)=>{
    e.preventDefault()
    console.log('Form Submitted');

  }


  return (
    <div>
      <form onSubmit={(e)=>{
        SubmitHandler(e)
      }
      }>
        <input type="text" className='outline-none rounded-2xl' placeholder='Enter your name'/>
        <button className='rounded-2xl '>
          Submit
        </button>
      </form>
    </div>
  )
}

export default App