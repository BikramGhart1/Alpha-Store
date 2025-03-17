import React from 'react'

const Product=()=>{
    return <div className='flex flex-col pb-5 px-2 w-[245px] rounded-2xl border-cardBorderShadow border-2 relative '>
        <p className='absolute top-2 right-2 bg-cyan-300 opacity-90 px-3 rounded-md'>-3%</p>
        <div className=''>
            <img src="/images/Rectangle 17.png" alt="product" />
        </div>
        <div className='flex flex-col overflow-hidden'>
            <p className='text-navbar text-2xl'>Apple iphone 16 Pro Max</p>
            <div className='text-button text-2xl'>
            <i className="fas fa-star productRatingStar"></i>
            <i className="fas fa-star productRatingStar"></i>
            <i className="fas fa-star productRatingStar"></i>
            <i className="fas fa-star productRatingStar"></i>
            <i className="far fa-star productRatingStar"></i>
            </div>
            <div className='flex flex-row justify-start gap-x-5'>
                <p className='text-navbar'>NRS 2,12,499</p>
                <p className='text-sm text-button line-through'>NRS 2,45,999</p>
            </div>
            <div className='flex flex-row justify-around'>
                <button className='productCartbuttons'>Add to Cart</button>
                <button className='productCartbuttons'><i className="far fa-heart"></i></button>
            </div>
        </div>
    </div>
}

export default function Products() {
  return (
    <section className='section border-b-4 border-cardBorderShadow pb-10'>
      <div className='flex flex-row justify-around my-14 text-2xl font-semibold'>
        <a href="#" className='productButtons'>New Arrivals</a>
        <a href="#" className='productButtons'>Sales</a>
        <a href="#" className='productButtons'>Featured</a>
      </div>
      <div className='grid grid-cols-4 gap-x-8 gap-y-8'>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
      </div>
    </section>
  )
}
