import React from 'react'

const Card = (props) => {
    console.log(props);
    
  return (
    <div className=' h-full w-[0.8] p-8 flex flex-col flex-nowrap justify-between rounded-2xl bg-cover bg-center' style={{backgroundImage: `url(${props.img})`}}>
        <h2 className='bg-white text-xl font-semibold rounded-full h-12 w-12 flex justify-center items-center'>{props.id}</h2>
        <div>
            <p className='text-shadow-2xs text-xl leading-relaxed text-white font-semibold
             mb-14'>{props.intro}</p>
            <div className='flex '>
                <button className='text-white px-8 py-2 rounded-full bg-cyan-500'>{props.tag}</button>
                <button className='text-white font-medium px-3 py-2 bg-cyan-500 rounded-full'><i class="ri-arrow-right-line"></i></button>
            </div>
        </div>
    </div>
  )
}

export default Card