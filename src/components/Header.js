import React from 'react'

export default function Header() {
  return (
    <div className='header'>
      <a href="#" className='cul'> Culture_M_P</a>
      <div></div>
     <input type="search" placeholder="Search.." name="search"  />
      <button type="submit"><i class="fa fa-search"></i></button>
    </div>
  )
}

