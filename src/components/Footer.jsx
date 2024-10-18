import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";
export default function Footer() {
  return <>
   
    <footer className='bg-red-800 bottom-0 fixed w-full'>
       <div className='flex justify-between items-center '>

        <div className="footer-content">
          <h2 className='text-[#fff] 2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-md p-5 font-bold hover:text-amber-300 duration-700'>Elevate Tech</h2>
        </div>
      
        <div className="socialMediaLinks">
          <ul className='flex space-x-6 me-10 cursor-pointer'>
            <li className='text-2xl text-[#fff]'><FaFacebook className='hover:text-amber-300' /></li>
            <li className='text-2xl text-[#fff]'><FaXTwitter className='hover:text-amber-300' /></li>
            <li className='text-2xl text-[#fff]'><FaTiktok className='hover:text-amber-300' /></li>
            <li className='text-2xl text-[#fff]'><FaInstagram className='hover:text-amber-300' /></li>
            <li className='text-2xl text-[#fff]'><FaWhatsapp className='hover:text-amber-300' /></li>
            <li className='text-2xl text-[#fff]'><BiLogoGmail className='hover:text-amber-300' /></li>
            <li className='text-2xl text-[#fff]'><AiOutlineGithub className='hover:text-amber-300' /></li>
           
          </ul>
        </div>
       </div>
    </footer>
  </>
}
