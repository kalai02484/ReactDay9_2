import React, { useContext } from 'react'
import { cartContext } from '../context/cartProvider'

const Cart = () => {

    const {cart} = useContext(cartContext);


  return (
    <div>
        <h2 style={{textAlign:"center"}}>Cart Component</h2>
        <div style={{display:"flex", justifyContent:"center", gap:"20px", flexWrap:"wrap"}}>
            {cart.map((item, index)=>(
                <div key={index} style={{border:"1px solid gray", padding:"10px", borderRadius:"5px"}}>
                    <h3>{item.name}</h3>
                    <p>Price: ${item.price}</p>
                </div>
            ))}
        </div>
      
    </div>
  )
}

export default Cart
