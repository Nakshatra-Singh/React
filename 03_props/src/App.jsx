import React from 'react'
import Card from './Components/Card'

const App = () => {
  return (
    <div>
      <Card user='Rahul' age = {19} imageLink = "https://i.pinimg.com/736x/67/19/7e/67197e2f8a2135106103afa521c063df.jpg"/>
      <Card user='Naman' age = {22} imageLink = "https://aniyuki.com/wp-content/uploads/2021/08/aniyuki-roronoa-zoro-73.jpg"/>
      <Card user='Nakshatra' age = {20} imageLink = "https://www.belloflostsouls.net/wp-content/uploads/2023/09/luffy-anime.png"/>
      
    </div>    
  )
}

export default App