import React from 'react'
import Home from './components/Home'
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom'
import Products from './components/Products'
import ProductsDetails from './components/ProductsDetails'
import Cart from './components/Cart'
import Layout from './components/Layout'
import CartContextProvider from './Context/CartContext'
import About from './components/About'



let router = createHashRouter([

 { path: "/",element: <Layout/>  , children: [
   { index: true, element: <Home/> },
   { path: "/products", element: <Products/> },
   { path: "/about", element: <About/> },
   { path: "/productsdetails/:id", element: <ProductsDetails/> },
   { path: "/cart", element: <Cart/> },

 ]}])
 
export default function App() {



  return <> 
  <CartContextProvider>

     <RouterProvider router={router}></RouterProvider>
  </CartContextProvider>


  </>
}
