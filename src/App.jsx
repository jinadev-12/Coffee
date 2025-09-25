import React from 'react'
import './index.css'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Popular from './Components/Popular';
import About from "./Components/About";
import Products from "./Components/Products";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";








function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Popular/>
      <About/>
      <Products/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App
