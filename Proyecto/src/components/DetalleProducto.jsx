import React, { useState, useEffect } from "react"; 
import { Link, useParams } from 'react-router-dom';
import ImagesArray from './Productsimages/ArrayImages'; 

function DetalleProducto({ onAddToCart }) {
    const { id } = useParams(); 
    const productId = parseInt(id); 

    const producto = ImagesArray.find(item => item.id === productId); 

    if (!producto) {
        return <div>Producto no encontrado</div>;
    }

    const addToCart = () => {
        if (onAddToCart) {
            onAddToCart(producto);
            alert("Producto agregado al carrito")
        }
    };

    return (
        <main className='w-full h-full justify-center items-center flex flex-col'>
            <div className='mt-32 flex flex-col sm:flex-row h-[540px] w-[380px] sm:w-[900px] bg-[#e5e3e3] sm:p-4 p-5 justify-center items-center rounded-xl border-solid border-2 border-black'>
                <div className='w-full sm:w-[500px] h-[300px] sm:h-full sm:mr-5 mr-0 mb-5 sm:mb-0'>
                    <img src={producto.images} alt={producto.title} className='object-cover w-full h-full brightness-25' />
                </div>
                <div className='w-full sm:w-[300px] flex justify-center items-center flex-col'>
                    <h1 className='font-bold text-2xl'>{producto.title}</h1>
                    <p className='text-center text-sm mt-2 sm:hidden'>{producto.descriptionCart}</p>
                    <p className='text-justify text-sm mt-2 hidden sm:block'>{producto.description}</p>
                    <div className='flex justify-center items-center mt-8 gap-4'>
                        <h3 className='font-bold text-xl'>${producto.price}</h3>
                        <button onClick={addToCart} className='bg-green-200 p-3 font-bold border-solid border-2 border-black rounded-lg'>Agregar al Carrito</button>
                    </div>
                </div>
            </div>
            <Link to={'/productos'}>
            <button className="btn bg-grey-500 rounded-md mt-3 border-b-2 border-b-black border-l-2 border-l-black border-r-gray-600 border-t-gray-600">
                ⭠ Volver a los Productos
            </button>
            </Link>
        </main>
    );
}

export default DetalleProducto;





