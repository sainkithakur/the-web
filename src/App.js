// import React, { useState } from 'react';

// function Product({ product, addToCart }) {
//   return (
//     <div>
//       <h3>{product.name}</h3>
//       <p>Price: ${product.price}</p>
//       <button onClick={() => addToCart(product)}>Add to Cart</button>
//     </div>
//   );
// }

// function ShoppingCart({ cart, updateQuantity }) {
//   // Calculate the total price of items in the cart
//   const total = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);

//   return (
//     <div>
//       <h2>Shopping Cart</h2>
//       {cart.map((item) => (
//         <div key={item.id}>
//           <p>{item.name}</p>
//           <p>Price: ${item.price}</p>
//           <p>Quantity: {item.quantity}</p>
//           <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
//           <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
//         </div>
//       ))}
//       <p>Grand Total: ${total}</p>
//     </div>
//   );
// }

// function App() {
//   const [cart, setCart] = useState([]);
//   const products = [
//     { id: 1, name: 'Product 1', price: 10 },
//     { id: 2, name: 'Product 2', price: 15 },
//     // Add more products here
//   ];

//   const addToCart = (product) => {
//     const existingItem = cart.find((item) => item.id === product.id);
//     if (existingItem) {
//       const updatedCart = cart.map((item) =>
//         item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//       );
//       setCart(updatedCart);
//     } else {
//       setCart([...cart, { ...product, quantity: 1 }]);
//     }
//   };

//   const updateQuantity = (productId, newQuantity) => {
//     const updatedCart = cart.map((item) =>
//       item.id === productId ? { ...item, quantity: newQuantity } : item
//     );
//     setCart(updatedCart);
//   };

//   return (
//     <div>
//       {products.map((product) => (
//         <Product key={product.id} product={product} addToCart={addToCart} />
//       ))}
//       <ShoppingCart cart={cart} updateQuantity={updateQuantity} />
//     </div>
//   );
// }

// export default App;


import React from 'react'

const App = () => {
  return (
    <div>
      
    </div>
  )
}

export default App
