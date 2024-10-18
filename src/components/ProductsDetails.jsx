import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ColorRing } from 'react-loader-spinner'
import { FaStarHalfAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from '../Context/CartContext';
export default function ProductsDetails() {

 let {addToCart} = useContext(CartContext)

    const [product,setProduct] = useState([])
    const [loading,setLoading] = useState(false)
   let params = useParams()
//    console.log(params.id);


 async  function getProductDetails(params){

    setLoading(true)
   let {data} = await axios.get(`https://fakestoreapi.com/products/${params.id}`)
  //  console.log(data);
   setProduct(data)
   setLoading(false)
   

   }

   useEffect( ()=> {
    getProductDetails(params)
   } , []  )
   

  return <>

  {loading ? <div className='flex justify-center items-center p-5 mt-10'> <ColorRing
  visible={true}
  height="80"
  width="80"
  ariaLabel="color-ring-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
/></div> :<div className='container mx-auto  p-5 my-10 bg-slate-100'>

<div className='flex items-center bg-slate-100 border-2 p-5 '>

<img src={product.image} alt={product.title} width={250} />

<div className='flex flex-col'>

<h2 className='mx-5 text-2xl'>{product.title}</h2>

<div className='flex justify-between items-center '>

<h1 className='mx-5 text-2xl my-5 '>{product.price} <span className='text-amber-300 font-bold'>$</span></h1>
<h1 className='mx-5 text-2xl flex '>{product?.rating?.rate} <FaStarHalfAlt className='mx-2 text-amber-300' /></h1>
<button  className='my-custom-button flex justify-center items-center gap-4 hover:bg-emerald-700 duration-200 scale-110' onClick={addToCart}>Add to Cart <FaShoppingCart /></button>
</div>

</div>
</div>
</div>}


  </>
}
