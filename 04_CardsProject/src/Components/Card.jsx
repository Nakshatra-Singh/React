import React from 'react'
import{Bookmark} from 'lucide-react'
const Card = (props) => {
  return (
    <div className='card'> 
      <div className="top">
          <img src={props.logo} alt="" />
          <button>Save <Bookmark size={16} /></button>        
      </div>
      <div className="center">
        <h2>{props.companyName} <span>{props.days}</span></h2>
        <h1>{props.job}</h1>
        <div className='tag'>
          <h3>{props.t1}</h3>
          <h3>{props.t2}</h3>
        </div>
      </div>
      <div className="bottom">
        <div className='lt'>
          <h2>{props.paid}</h2>
          <p>{props.loc}</p>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  )
}

export default Card