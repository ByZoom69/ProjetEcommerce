/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Products from './components/products/Products';
import Navbar from './components/navbar/navbar';

const App = () => {
    return (
      <div className="app">
        <Navbar />
        <Products />
      </div>
    );
  }


export default App;