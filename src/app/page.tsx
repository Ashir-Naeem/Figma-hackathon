import Hero from '@/components/Hero'
import React from 'react'
import  Product  from "@/app/product/page";
import  Arrival  from "@/app/arrival/page";
import  Mainblog  from "@/app/mainblog/page";
import  Shortinsta  from "@/app/shortinsta/page";

const page = () => {
  return (
    <div>

      <Hero/>
    <Product/>
    <Arrival/>
    <Mainblog/>
    <Shortinsta/>
    
    </div>
  )
}

export default page