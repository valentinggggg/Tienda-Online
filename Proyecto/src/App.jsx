import React, { useState, useEffect } from 'react';
import NavBar from './components/Nav';
import Productos from './components/Products';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NavBarsm from './components/NavBarsm';
import Contact from './components/Contact';
import Carrito from './components/Carrito';
import DetalleProducto from './components/DetalleProducto';
import ImagesArray from './components/Productsimages/ArrayImages';


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

  const [filters, setFilters] = useState({
    category: 'Todos',
    minPrice: 0
  });

  const handleCategoryChange = (event) => {
    setFilters({ ...filters, category: event.target.value });
  };

  const [priceValue, setPriceValue] = useState(0);

  const handlePriceChange = (event) => {
    setFilters({ ...filters, minPrice: parseInt(event.target.value) });
    setPriceValue(parseInt(event.target.value));
  };

  const filteredProducts = ImagesArray.filter((product) => {
    return (
      (filters.category === 'Todos' || product.category === filters.category) &&
      product.price >= filters.minPrice
    );
  });

  const [carrito, setCarrito] = useState(() => {
    const storedCarrito = localStorage.getItem('carrito');
    return storedCarrito ? JSON.parse(storedCarrito) : [];
  });

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }, [carrito]);

  const addToCart = (producto) => {
    const index = carrito.findIndex(item => item.id === producto.id);
    if (index !== -1) {
      const newCarrito = [...carrito];
      newCarrito[index].cantidad++;
      setCarrito(newCarrito);
    } else {
      setCarrito([...carrito, {...producto, cantidad: 1}]);
    }
  };

  const eliminarProducto = (id) => {
    const nuevoCarrito = carrito.filter(producto => producto.id !== id);
    setCarrito(nuevoCarrito);
  };

  return (
    <main className='w-full min-h-screen bg-[#CCCCCC] flex'>
      {isSmallScreen ? <NavBarsm /> : <NavBar />}
      <Routes>
        <Route path="/productos" element={<Productos products={filteredProducts} onCategoryChange={handleCategoryChange} onPriceChange={handlePriceChange} priceValue={priceValue}/>} />
        <Route path="/productos/:id" element={<DetalleProducto onAddToCart={addToCart} />} />
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Carrito carrito={carrito} eliminarProducto={eliminarProducto} setCarrito={setCarrito}/>}/>
        <Route path="/contacto" element={<Contact />} /> 
      </Routes>
    </main>
  );
}

export default App;



