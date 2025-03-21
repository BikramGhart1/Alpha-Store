import React from 'react'
import Navbar from '../Universal/Navbar'
import Carasoul from '../Universal/Carasoul'
import ShopByBrands from '../components/ShopByBrands'
import Products from '../components/Products'
import ShopeByCategories from '../components/ShopeByCategories'
import HotPicks from '../components/HotPicks'
import PayingMethods from '../components/PayingMethods'
import Blogs from '../components/Blogs'
import SpecialOffers from '../components/SpecialOffers'
import Footer from '../Universal/Footer'

export default function Homepage() {
  return (
    <div>
      <Navbar/>
      <Carasoul/>
      <ShopByBrands/>
      <Products/>
      <ShopeByCategories/>
      <SpecialOffers/>
      <HotPicks/>
      <Blogs/>
      <PayingMethods/>
      <Footer/>
    </div>
  )
}
