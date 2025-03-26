import React from 'react';

const Blog = () => {
    return (
        <div className='flex flex-col gap-y-3'>
            <img src="/images/Rectangle 69.png" alt="blog image" className="w-full h-auto rounded-lg" />
            <p className='text-lg text-center'>Best Laptop to Buy in Nepal</p>
        </div>
    );
}

export default function Blogs() {
    return (
        <section className='section borderBottom'>
            <div className="flex flex-row justify-between pb-4 items-center">
        <h2 className="sectionHeader text-xl sm:text-2xl">Blogs</h2>
        <p className="flex-1 h-1 w-full bg-cardBorderShadow rounded-md mx-2"></p>
        <button 
          className="border-2 border-solid border-cardBorderShadow px-3 py-1 rounded-3xl cursor-pointer text-sm sm:text-base"
          aria-label="View All Brands"
        >
          View All
        </button>
      </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                <Blog />
                <Blog />
                <Blog />
            </div>
        </section>
    );
}