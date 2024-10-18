import React from 'react'
import logo from "../assets/e-commerceLogo.png"
import { Link } from 'react-router-dom'

function Navbar() {
  return <>
  
 
  <nav className='flex justify-between items-center p-6 bg-red-800  uppercase'>
    <div className='ms-32'>
      <Link to={"/"}>
    <h1 className='text-[#fff] 2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-md  font-bold hover:text-amber-300 duration-700'>Elevate Tech</h1>
      </Link>
    </div>

    <div>
        <ul className='flex mx-5 space-x-6 me-32 font-bold text-[#fff] '>
            <Link to={"/"} className='hover:text-amber-400'>home</Link>
            <Link to={"/products"} className='hover:text-amber-400'>products</Link>
            <Link to={"/about"} className='hover:text-amber-400'>about</Link>
     
            <Link to={"/cart"} className='hover:text-amber-400'>cart</Link>
         
        </ul>
    </div>
  
  </nav>


  
  </>
}

export default Navbar
