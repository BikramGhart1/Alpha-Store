import React, { useState } from 'react';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className='h-auto flex flex-col bg-navbar'>
            <div className='h-[69px] flex items-center justify-around px-4 sm:px-8'>
                <img src="/images/logo (2).png" alt="logo" className='h-12 rounded-full' />
                
                <div className='flex w-2/3 sm:w-1/3 bg-[#97CBDC] rounded-3xl p-2'>
                    <input 
                        type="text" 
                        placeholder='Search...' 
                        className='w-full bg-transparent text-white placeholder:text-white pl-2 outline-none'
                    />
                    <img src="/images/Search.png" alt="search" className='w-6' />
                </div>
                
                <div className='hidden sm:flex gap-4'>
                    <img src="/images/Users.png" alt="users" className='w-6' />
                    <img src="/images/Heart.png" alt="heart" className='w-6' />
                    <img src="/images/Shopping-cart.png" alt="cart" className='w-6' />
                </div>
                
                <button className='sm:hidden' onClick={() => setMenuOpen(!menuOpen)}>
                    <img src='/images/menu-icon.png' alt='menu' className='w-8' />
                </button>
            </div>
            
            <div className={`flex flex-col sm:flex-row justify-around text-white font-semibold transition-all ${menuOpen ? 'block' : 'hidden'} sm:flex`}>
                <a href='/'>Laptops</a>
                <a href='/'>Smartphones</a>
                <a href='/'>Smartwatches</a>
                <a href='/'>Earbuds</a>
                <a href='/'>Drones</a>
                <a href='/'>PCs</a>
            </div>
        </nav>
    );
}
