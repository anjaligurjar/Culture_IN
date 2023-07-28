import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './Searchbar'

function BlogNav() {
  return (
    <div>
    <div className='blognav'>
    <SearchBar />
    <Link to ="ALl" className='gap' >All</Link> 
   <Link to="Guestblog "className='gap'>Guestblog</Link> 
<Link to="Latest"  className='gap'>Latest</Link>

    </div>
    </div>

  )
}

export default BlogNav