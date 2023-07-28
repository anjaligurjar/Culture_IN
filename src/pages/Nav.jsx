import React from 'react'
import {Link} from  "react-router-dom"

function Nav() {
  return (
    <div className='home-nav'> 
    <div></div>
  
    <Link to ="Nature"><i className="fa fa-fw fa-Nature"></i>Nature</Link>

    <Link to ="WildLife"><i className="fa fa-fw fa-tree"></i>WildLife</Link>
    
     <Link to ="Spirituality"><i className="fa fa-fw fa-bell"></i>Spirituality</Link>
     
     <Link to ="Heritages"><i className="fa fa-fw fa-phone"></i>Heritages</Link>
     <Link to ="Enviroment"><i className="fa fa-fw fa-user"></i>Enviroment</Link>
   
   
     </div>
  )
}

export default Nav