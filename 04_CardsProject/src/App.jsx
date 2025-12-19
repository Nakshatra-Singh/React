import React from 'react'
import Card from './Components/Card'

const App = () => {
  const jobListings = [
  {
    brandLogo: "https://logos-world.net/wp-content/uploads/2020/09/Google-Symbol.png",
    company: "Google",
    daysPosted: "5 days ago",
    jobOpening: "Senior UI/UX Developer",
    tag1: "Full-time",
    tag2: "Senior-level",
    pay: "$120/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://th.bing.com/th/id/OIP.c6A6tBEqXDbqvzm6AikuDQHaEK?w=288&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
    company: "Apple Inc.",
    daysPosted: "2 weeks ago",
    jobOpening: "iOS Software Developer",
    tag1: "Full-time",
    tag2: "Mid-level",
    pay: "$95/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://brandemia.org/contenido/subidas/2022/11/tipografia-y-paleta-de-color.png",
    company: "Amazon",
    daysPosted: "1 week ago",
    jobOpening: "Frontend Developer",
    tag1: "Part-time",
    tag2: "Junior-level",
    pay: "$60/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://th.bing.com/th/id/OIP.lQ9JvL9Rxhx_s-VKQNEidgHaEK?w=266&h=150&c=6&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
    company: "Meta Platforms",
    daysPosted: "3 days ago",
    jobOpening: "React Developer",
    tag1: "Full-time",
    tag2: "Mid-level",
    pay: "$110/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://th.bing.com/th/id/OIP.Of2MrfKXGN1chuR1adiytQHaHa?w=152&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
    company: "Netflix",
    daysPosted: "4 weeks ago",
    jobOpening: "Backend Software Engineer",
    tag1: "Full-time",
    tag2: "Senior-level",
    pay: "$130/hr",
    location: "Los Angeles, USA"
  },
  {
    brandLogo: "https://th.bing.com/th/id/OIP.-5Yg4TSKfCTJ4oPHsqjxaQHaHZ?w=180&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
    company: "Microsoft",
    daysPosted: "6 days ago",
    jobOpening: "Cloud Engineer",
    tag1: "Full-time",
    tag2: "Mid-level",
    pay: "$105/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://th.bing.com/th/id/OIP.QZRUtEA8SeOZrUtbE7XCegHaHa?w=166&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
    company: "Tesla",
    daysPosted: "2 days ago",
    jobOpening: "Software Developer",
    tag1: "Full-time",
    tag2: "Junior-level",
    pay: "$70/hr",
    location: "Austin, USA"
  },
  {
    brandLogo: "https://th.bing.com/th/id/OIP.XIZDhSibILo3WFUdQjLM-wHaE8?w=215&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
    company: "IBM",
    daysPosted: "10 days ago",
    jobOpening: "Data Analyst",
    tag1: "Part-time",
    tag2: "Mid-level",
    pay: "$65/hr",
    location: "Delhi, India"
  },
  {
    brandLogo: "https://static.cdnlogo.com/logos/a/90/adobe.png",
    company: "Adobe",
    daysPosted: "1 week ago",
    jobOpening: "Product Designer",
    tag1: "Full-time",
    tag2: "Senior-level",
    pay: "$115/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://th.bing.com/th/id/OIP.nTwU6BzLFgHRXSB1P98L5wHaDt?w=327&h=175&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
    company: "Uber",
    daysPosted: "3 weeks ago",
    jobOpening: "Mobile App Developer",
    tag1: "Part-time",
    tag2: "Mid-level",
    pay: "$90/hr",
    location: "San Francisco, USA"
  }
];

  return (
    <div className='parent'>
      {jobListings.map(function(x,id){
        return <div key={id}>
          <Card key={id} companyName={x.company} logo={x.brandLogo} days={x.daysPosted} loc={x.location} t1={x.tag1} t2={x.tag2} paid={x.pay} job={x.jobOpening}/>
        </div>
      })}
    </div>
  )
}

export default App