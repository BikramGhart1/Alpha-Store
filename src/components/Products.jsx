import React from 'react';

export const Product = () => {
    return (
        <div className='flex flex-col pb-5 px-2 w-full sm:w-[245px] rounded-2xl border-cardBorderShadow border-2 relative'>
            <p className='absolute top-2 right-2 bg-cyan-300 opacity-90 px-3 rounded-md'>-3%</p>
            <div className='flex justify-center'>
                <img src="/images/Rectangle 17.png" alt="product" className="w-full h-auto" />
            </div>
            <div className='flex flex-col overflow-hidden'>
                <p className='text-navbar text-lg sm:text-2xl'>Apple iPhone 16 Pro Max</p>
                <div className='text-button text-lg sm:text-2xl'>
                    <i className="fas fa-star productRatingStar"></i>
                    <i className="fas fa-star productRatingStar"></i>
                    <i className="fas fa-star productRatingStar"></i>
                    <i className="fas fa-star productRatingStar"></i>
                    <i className="far fa-star productRatingStar"></i>
                </div>
                <div className='flex flex-row justify-start gap-x-2'>
                    <p className='text-navbar text-lg'>NRS 2,12,499</p>
                    <p className='text-sm text-button line-through'>NRS 2,45,999</p>
                </div>
                <div className='flex flex-row justify-around mt-2'>
                    <button className='productCartbuttons text-sm'>Add to Cart</button>
                    <button className='productCartbuttons text-sm'><i className="far fa-heart"></i></button>
                </div>
            </div>
        </div>
    );
}

export default function Products() {
    return (
        <section className='section borderBottom pb-10'>
            <div className='flex flex-row justify-around my-14 text-sm sm:text-lg font-semibold'>
                <a href="#" className='productButtons text-center'>New Arrivals</a>
                <a href="#" className='productButtons text-center'>Sales</a>
                <a href="#" className='productButtons text-center'>Featured</a>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-8'>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </section>
    );
}