import React from 'react'
import './index.css'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Popular from './Components/Popular';
import About from "./Components/About";
import Products from "./Components/Products";






function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Popular/>
      <About/>
      <Products/>
    </div>
  );
}

export default App
