import React, { useState, useEffect } from 'react';
import NavBar from './components/Nav';
import Productos from './components/Products';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NavBarsm from './components/NavBarsm';
import Contact from './components/Contact';
import Carrito from './components/Carrito';
import DetalleProducto from './components/DetalleProducto';

function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1020); 
    };

 
    window.addEventListener('resize', handleResize);

    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <main className='w-full min-h-screen bg-[#CCCCCC] flex'>
      {isSmallScreen ? <NavBarsm /> : <NavBar />}
      <Routes>
        <Route path="/productos" element={<Productos />} />
        <Route path="/productos/:id" element={<DetalleProducto />} />
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Carrito />} />
        <Route path="/contacto" element={<Contact />} /> 
      </Routes>
    </main>
  );
}

export default App;


