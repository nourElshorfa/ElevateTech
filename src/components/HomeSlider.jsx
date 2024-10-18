import React from 'react'
import saleImage from "../assets/full-shot-woman-holding-sale-tag.jpg"
import Slider from "react-slick";
import { Link } from 'react-router-dom';

export default function HomeSlider() {
    
 return <>

  <Link to={"/products"}>
  <section className='bg-sale bg-contain bg-no-repeat h-screen mt-10 mb-40  duration-500'>

<h2 className=' text-[#fff]  text-3xl p-5'>Welcome...</h2>
<h1 className=' text-[#fff]  text-3xl p-5 hover:text-amber-400'>Black Friday Sale</h1>
</section>
  </Link>

  
   


 
 </>

}
