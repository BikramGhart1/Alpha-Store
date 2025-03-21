import React from 'react'

const Blog=()=>{
    return <div className='flex flex-col gap-y-5'>
            <img src="/blogimg/blog.png" alt="blog image" />
            <p className='text-lg'>Best Laptop to Buy in Nepal</p>
        
    </div>
}

export default function Blogs() {
  return (
    <section className='section borderBottom'>
      <h1 className='sectionHeader'>Blogs</h1>
      <div className='grid grid-cols-3 gap-x-6'>
        <Blog/>
        <Blog/>
        <Blog/>
      </div><p>just tr it.</p>
    </section>
  )
}
