import React from 'react'
import Navbar from './partials/Navbar'
import Carasoul from './partials/Carasoul'
import ShopByBrands from './ShopByBrands'
import Products from './Products'
import ShopByCategories from './ShopByCategories'
import HotPicks from './HotPicks'
import PayingMethods from './PayingMethods'
import Blogs from './Blogs'
import SpecialOffers from './SpecialOffers'
import Footer from './partials/Footer'

export default function Homepage() {
  return (
    <div>
      <Navbar/>
      <Carasoul/>
      <ShopByBrands/>
      <Products/>
      <ShopByCategories/>
      <SpecialOffers/>
      <HotPicks/>
      <Blogs/>
      <PayingMethods/>
      <Footer/>
    </div>
  )
}
