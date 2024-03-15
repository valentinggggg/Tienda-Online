import React from 'react';
import { useParams } from 'react-router-dom';
import ImagesArray from './Productsimages/ArrayImages'; 

function DetalleProducto() {
    const { id } = useParams(); 
    const productId = parseInt(id); 

    const producto = ImagesArray.find(item => item.id === productId); 

    if (!producto) {
        return <div>Producto no encontrado</div>;
    }

    return (
        <main className='w-full h-full justify-center items-center flex'>
        <div className='mt-32 flex sm:w-[900px] sm:h-[600px] bg-[#e5e3e3] p-4 justify-center items-center rounded-xl border-solid border-2 border-black'>
            <div className='sm:w-[500px] sm:h-full mr-5'>
            <img src={producto.images} alt={producto.title} className='object-contain w-full h-full' />
            </div>
            <div className='sm:w-[300px] sm:h-[500px] mt-20'>
            <h1 className='font-bold text-2xl'>{producto.title}</h1>
            <p className='text-justify text-sm mt-2'>{producto.description}</p>
            <div className='flex justify-center items-center mt-8 gap-4'>
            <h3 className='font-bold text-xl'>${producto.price}</h3>
            <button className='bg-green-200 p-3 font-bold border-solid border-2 border-black rounded-lg'>Agregar al Carrito</button>
            </div>
            </div>
        </div>
        </main>
    );
}

export default DetalleProducto;

