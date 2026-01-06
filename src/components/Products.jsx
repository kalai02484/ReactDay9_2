import React, { useContext } from "react";
import { cartContext } from "../context/cartProvider";
import { Link } from "react-router-dom";


const Products = () => {

  const {addToCart} = useContext(cartContext);
    
  const products = [
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 200 },
    { id: 3, name: "Product 3", price: 300 },
    { id: 4, name: "Product 4", price: 400 },
    { id: 5, name: "Product 5", price: 500 },
    { id: 6, name: "Product 6", price: 600 },
  ];

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Products Component</h2>
      <Link to="/cart" style={{ display: "block", textAlign: "center", marginBottom: "20px" }}>
        Go to Cart
      </Link>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid gray",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <button onClick={()=>addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
