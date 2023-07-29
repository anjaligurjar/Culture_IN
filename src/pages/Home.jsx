
import React from 'react'
import Navbar from "./Homenav/Nav"

export default function Home() {
  const handleClickFunction = (e) => {
    const body = document.querySelector('body')
    body.style.background = getRandomColor()
  }
  function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color


  }


  return (
<>
    <div>
      <div className='cont2'>
        <Navbar />

        <h3> Welcome our Home</h3>
        <button className='btn' onClick={handleClickFunction}>Click me</button>
        
        
      </div>
    </div>

    </>
  )
}
