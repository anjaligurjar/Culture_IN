import React from 'react'
import BlogNav from "./BlogNav"
import BlogsList  from './BlogList/BlogsList';
import {blogList}  from '../config/data';
export const Blogs = () => {
  return (
<div className="blog-ground">
    <div>
      <BlogNav />
      <BlogsList  blogs={blogList} />
      </div>
  
    
      
</div>
  )
}
