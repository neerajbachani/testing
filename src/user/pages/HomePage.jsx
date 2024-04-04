import React from 'react'
import { useState } from 'react'
import AboutUs from '../components/Aboutus/AboutUs'
import DeptAndSearch from '../components/DepartmentAndSearch/DeptAndSearch'
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts'
import HeroSection from '../components/HeroSection/HeroSection'
import TrendingProducts from '../components/TrendingProducts/TrendingProducts'
import { MenuProvider, useMenu } from '../components/ContextProvider/MenuContext'

import RawMaterials from '../components/RawMaterials/RawMaterials'




const HomePage = () => {
  const { isOpen } = useMenu();


  return (
    <>
    <div className=' max-w-screen-3xl mx-auto ' >
     

      
    <DeptAndSearch/>
        <HeroSection isOpen={isOpen}  />
      
      <TrendingProducts/>
      <FeaturedProducts/>
   
      <RawMaterials/>
      <AboutUs/>
       
    </div>
   
    </>
  )
}

export default HomePage