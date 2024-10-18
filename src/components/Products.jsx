import axios from 'axios'
import React, {useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ColorRing } from 'react-loader-spinner'
import { FaStar } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from '../Context/CartContext';




export default function Products() {


  let {addToCart} = useContext(CartContext)

   

    const [products,setProducts] = useState([])
    const [loading,setLoading] = useState(false)

  async function getProducts(){
    setLoading(true)
   let {data} = await axios.get("https://fakestoreapi.com/products")
  //  console.log(data);
   setLoading(false)
   setProducts(data)
   
  }

  useEffect(()=>{
    getProducts()
  },[])


  return <>
   


   {loading ? <div className='flex justify-center items-center py-5'> <ColorRing
  visible={true}
  height="80"
  width="80"
  ariaLabel="color-ring-loading"
  wrapperStyle={{}}
  wrapperClass="color-ring-wrapper"
  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
  />

   </div> :  <div className=' sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 flex gap-6 justify-center items-center mt-20 mb-40 flex-wrap text-center'>

{products.map( (item)=> <div className='p-8 bg-slate-100 border-4 border-red-900 hover:scale-105 hover:border-amber-300 duration-300' key={item.id}>
  <Link to={`/productsdetails/${item.id}`}>
  <img src={item.image} alt={item.category} className='product-image' />
  <div className=' flex space-x-4'>
  <h2 className='py-2 text-lg'>{item.title.split(" ").slice(0, 1).join(" ")}</h2>
  
   <h2 className='py-2 text-lg flex items-center justify-center'>{item.price}  <FaDollarSign className='ms-2 text-amber-400' />
   </h2>
  
   
   <h2 className='py-2 text-lg flex items-center justify-center'>{item.rating.rate} <FaStar className='text-amber-400 ms-3' /></h2>
   
 
  </div>
  

  </Link>
    <button onClick={addToCart}  className='my-custom-button flex justify-center items-center gap-4 hover:bg-emerald-700 duration-200 scale-110'>Add to Cart <FaShoppingCart /></button>
    
  

</div>)}
  </div> }
   


 
  
  </>
}
