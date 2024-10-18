import { createContext } from "react";


export let CartContext = createContext()

export default function CartContextProvider(props) {

    function addToCart(){
        console.log("Added To Cart");
        
    }


    return <CartContext.Provider value={{addToCart}}>
        {props.children}
        </CartContext.Provider>

}
    
    

