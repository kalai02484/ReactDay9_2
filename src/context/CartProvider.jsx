import React, { createContext, useState } from 'react'

export const cartContext = createContext();

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
        console.log(cart);
    }

  return (
    <div>
        <cartContext.Provider value={{cart, setCart, addToCart}}>
            {children}
        </cartContext.Provider>      
    </div>
  )
}

export default CartProvider
