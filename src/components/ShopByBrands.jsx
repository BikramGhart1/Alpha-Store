import React from 'react'

export default function ShopByBrands() {

  return (
    <section className='section flex flex-col '>
      <div className='flex flex-row justify-between pb-4 items-center'>
        <h2 className='text-[30px] font-bold'>Shop By Brands</h2>
        <p className='flex-1 h-2 w-full bg-cardBorderShadow rounded-md mx-2'></p>
        <button className='border-4 border-solid  border-cardBorderShadow px-4 py-1 rounded-3xl cursor-pointer'>View All Brands</button>
      </div>
      <div className='flex flex-row justify-between'>
       <img src="/images/Rectangle 14.png" alt="" />
       <img src="/images/Rectangle 14.png" alt="" />
       <img src="/images/Rectangle 14.png" alt="" />
       <img src="/images/Rectangle 14.png" alt="" />
       <img src="/images/Rectangle 14.png" alt="" />
       <img src="/images/Rectangle 14.png" alt="" />
      </div>
    </section>
  )
}
