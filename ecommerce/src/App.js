/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';
import { Products, Navbar } from './components';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const {data} = await commerce.products.list();
    setProducts(data);
  }

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  }

  const handleAddToCart = async (productid, quantity) => {
    const item = await commerce.cart.add(productid, quantity);
    handleAddToCart(item.cart);
  }

  useEffect(() =>{
    fetchProducts();
    fetchCart();
  }, []);

  console.log(cart);

    return (
      <div>
        <Navbar />
        <Products products={products} onAddToCart={handleAddToCart} />
      </div>
    );
  }


export default App;