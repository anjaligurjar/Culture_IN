import React from 'react'
import {Link} from "react-router-dom"

export default function Navbar() {
  return (
    <div className='nav'> 
    <div>
    <Link to ="Home"><i className="fa fa-fw fa-home"></i>Home</Link>
    </div>
     <Link to ="About"><i className="fa fa-fw fa-tree"></i>About</Link>
     <div></div>
     <Link to ="Blogs"><i className="fa fa-fw fa-bell"></i>Blogs</Link>
     <div></div>
     <Link to ="Contact"><i className="fa fa-fw fa-phone"></i>Contact</Link>
     <Link to ="Login"><i className="fa fa-fw fa-user"></i>Login</Link>
     <Link to ="Sign_up"><i className="fa fa-fw fa-book"></i>Sign_up</Link>
   
     

    
    
    </div>
  )
}
