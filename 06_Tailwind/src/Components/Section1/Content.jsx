import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'

const Content = () => {
    const users = [
        {
            img: 'https://th.bing.com/th/id/OIP.9sM4ijoo064bdJVZeQdaNAAAAA?w=204&h=306&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1',
            intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            tag: 'Satisfied',
        },
        {   
            img: 'https://th.bing.com/th/id/OIP.UycGAkzwFzK5jKqnv-QQFQHaL3?w=197&h=316&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1',
            intro: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            tag: 'Underserved',
        },
        {
            img:'https://tse1.mm.bing.net/th/id/OIP.WAIJM768U2ffIer5rIqcKAAAAA?cb=ucfimg2&pid=ImgDet&ucfimg=1&w=187&h=249&c=7&dpr=1.3&o=7&rm=3',
            intro:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            tag:'Underbanked',
        },
        {
            img:'https://th.bing.com/th/id/OIP.JKwY_NtRXVKFeDPermgvKQHaHa?w=208&h=208&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1',
            intro:" Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            tag:'Undertrack',
        },
    ]
  return (
    <div className='grid grid-cols-2 pl-18 pr-3'>
        <Leftcontent />
        <Rightcontent users={users}/>
    </div>
  )
}

export default Content