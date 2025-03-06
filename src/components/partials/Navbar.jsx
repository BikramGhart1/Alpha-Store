import React from 'react'


export default function Navbar() {
    return (
        <nav className='h-[138px] flex flex-col'>
            <div className='bg-navbar h-[69px] flex flex-row justify-around items-center'>
                <div className='h-full flex flex-row justify-center items-center'>
                    <img src="/images/logo.png" alt="logo" className='h-full mt-2 rounded-full' />
                </div>
                <div className='w-1/5 flex flex-row justify-between pl-4 p-2 pr-5 rounded-3xl bg-gray-400'>
                    <input type="text" name="search" id="" placeholder='search' className='bg-transparent opacity-80 pl-2 w-full mr-1 pr-1 outline-none border-0 placeholder:text-white' />
                    <img src="/images/Search.png" alt="search" className='navbarImages w-[28px]'/>
                </div>
                <div className='w-[211px] flex flex-row justify-between items-center cursor-pointer'>
                    <img src="/images/Users.png" alt="users" className='navbarImages' />
                    <img src="/images/Heart.png" alt="heart" className='navbarImages' />
                    <img src="/images/Shopping-cart.png" alt="shopping cart" className='navbarImages' />
                </div>
            </div>
            <div className='flex justify-around w-4/5 m-auto bg-navbar p-2 text-[#F9FCFF] font-semibold font-sans'>
                <a href='/'>Laptops</a>
                <a href='/'>Smartphones</a>
                <a href='/'>Smartwatches</a>
                <a href='/'>Earbuds</a>
                <a href='/'>Drones</a>
                <a href='/'>PCs</a>
            </div>
        </nav>
    )
}
