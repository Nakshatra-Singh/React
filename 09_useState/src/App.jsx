import React, { useState } from 'react'

const App = () => {

  const [num, setnum] = useState(0)

  function increaseNum(){
    setnum(num+1)
  }
  function decreaseNum(){
    setnum(num-1)
  }
  function jump5(){
    setnum(num+5)
  }

  return (
    <div className='bg-black p-2'>
      <h1 className='w-fit rounded-full bg-fuchsia-600 m-4 px-17 py-7 text-8xl'>{num}</h1>
      <button onClick={increaseNum} className='rounded-full bg-blue-500 p-2 m-4'>Increase</button>
      <button onClick={decreaseNum} className='rounded-full bg-blue-500 p-2 m-4'>Decrease</button>
      <button onClick={jump5} className='rounded-full bg-blue-500 p-2 m-4'>Jump by 5</button>
      
    </div>
  )
}

export default App