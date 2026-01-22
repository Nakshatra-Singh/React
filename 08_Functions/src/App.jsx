import React from 'react'

const App = () => {
  function btnClicked(x){
    if(x) console.log(x);
    
    console.log("Button Clicked.");
  }

  return (
    <div className='flex flex-col justify-center items-center h-100'>



      <button onClick={btnClicked} className='bg-blue-500 rounded-full text-3xl p-3 mt-2 ml-2'>Click1</button>



      <button onClick={(elem)=>{
        console.log(elem);
      }} className='bg-blue-500 rounded-full text-3xl p-3 mt-2 ml-2'>Click2</button>


      <button onClick={function(elem){
        btnClicked(elem.movementX);
      }} className='bg-blue-500 rounded-full text-3xl p-3 mt-2 ml-2'>Click3</button>
      
    </div>
  )
}

export default App