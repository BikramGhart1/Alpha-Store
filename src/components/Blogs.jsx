import React from 'react';
import { useNavigate } from 'react-router-dom';

const Blog = () => {
  return (
    <div className='flex flex-col gap-y-5'>
      <img src="/blogimg/blog.png" alt="blog image" />
      <p className='text-lg'>Best Laptop to Buy in Nepal</p>
    </div>
  );
};

export default function Blogs() {
  const navigate = useNavigate();

  return (
    <section className='section borderBottom'>
      <h1 className='sectionHeader'>Blogs</h1>
      <div className="flex justify-end mb-4">
        <button 
          className="border-4 border-solid border-cardBorderShadow px-4 py-1 rounded-3xl cursor-pointer"
          aria-label="View All"
          onClick={() => navigate('/blogs')}
        >
          View All 
        </button>
      </div>
      <div className='grid grid-cols-3 gap-x-6'>
        <Blog />
        <Blog />
        <Blog />
      </div>
    </section>
  );
}