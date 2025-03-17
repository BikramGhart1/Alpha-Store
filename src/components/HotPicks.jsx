import React from 'react'
import { Product } from './Products'

export default function HotPicks() {
    return (
        <section className='section'>
            <h1 className='sectionHeader'>Hot Picks</h1>
            <div className='productWrapper'>
                <Product />
                <Product />
                <Product />
                <Product />
            </div>

        </section>
    )
}
