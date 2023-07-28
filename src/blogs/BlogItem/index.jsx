import React from 'react'
import { Link } from 'react-router-dom'


const BlogItem = ({ blog}) => {



 return (
        <div>
        <div className='blogitem-wrap'>
        <h1>{blog.title}</h1>
        <img src={blog.cover} alt="cover" className='blogitem-cover' /> <p className='blogItem-desc'>{blog.description}</p>
        <h2> {blog.category}</h2>

           
          
        </div>
        
        
        <div></div>
         <footer>
         <Link className='blogItem-link' to={`/blog/${blog.id}`}>
          ➝
        </Link>
         </footer>
         </div>

    )

}

export default BlogItem
