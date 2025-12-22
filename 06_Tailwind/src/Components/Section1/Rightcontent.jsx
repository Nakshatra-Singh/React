import React from 'react'
import Card from './Card'

const Rightcontent = (props) => {
    console.log(props);
    
  return (
    <div className='flex gap-2 overflow-x-auto overflow-y-hidden  w-full h-6/8 mt-9'>
        {props.users.map(function(elem,id){
            return <Card id={id+1}img={elem.img} tag={elem.tag} intro={elem.intro}/>
        })}     
    </div>
  )
}

export default Rightcontent