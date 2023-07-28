import React from 'react'

import BlogItem from '../BlogItem/index'

 const BlogsList=({blogs})=> {
  return (
    <div className='blogList-wrap'> {

      blogs.map((blog) => (
          <BlogItem blog={blog} key={blog.id} />)
      )
  }

  </div>

  )
}

export default BlogsList
