import React, { createContext, useState } from 'react'

export const cartContext = createContext();

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

  return (
    <div>
        <cartContext.Provider value={{cart, setCart}}>
            {children}
        </cartContext.Provider>      
    </div>
  )
}

export default CartProvider
