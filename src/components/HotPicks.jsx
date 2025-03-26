import React from 'react';
import { Product } from './Products';

export default function HotPicks() {
    return (
        <section className='section'>
            <h1 className='sectionHeader text-center text-2xl sm:text-3xl mb-6'>Hot Picks</h1>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </section>
    );
}