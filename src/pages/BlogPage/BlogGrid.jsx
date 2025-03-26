import React from 'react';

const Blog = ({ data }) => {
  return (
    <div className='flex flex-col gap-y-5'>
      <img src={data.image} alt={data.title} />
      <p className='text-lg'>{data.title}</p>
    </div>
  );
};

const BlogGrid = ({ blogData }) => {
  const displayedBlogs = blogData.slice(0, 12); // Limit to 12 for 3 rows, 4 columns
  return (
    <div className='grid grid-cols-4 gap-x-6 gap-y-6'>
      {displayedBlogs.map((blog, index) => (
        <Blog key={index} data={blog} />
      ))}
    </div>
  );
};

export default BlogGrid;