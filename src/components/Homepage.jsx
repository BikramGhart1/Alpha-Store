import React from 'react'
import Navbar from './partials/Navbar'
import Carasoul from './partials/Carasoul'
import ShopByBrands from './ShopByBrands'
import Products from './Products'

export default function Homepage() {
  return (
    <div>
      <Navbar/>
      <Carasoul/>
      <ShopByBrands/>
      <Products/>
    </div>
  )
}
