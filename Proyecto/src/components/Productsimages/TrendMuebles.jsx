import React from 'react';
import { Link } from 'react-router-dom';
import EscritorioParaPcImg from './Images/Muebles/EscritorioParaPc.jpg';
import sillon1plazaImg from './Images/Muebles/sillon1plaza.jpg';
import sillamaderaImg from './Images/Muebles/sillamadera.jpg';
import ShowM from './Images/Muebles/ShowMuebles.jpg'

function TrendMueblesSection(){
    const TPMarray = [
        {
            id: 6,
            title: 'Silla Madera',
            category: 'Muebles',
            price: 120,
            images: [sillamaderaImg]
        },
        {
            id: 30,
            title: 'Escritorio Para PC',
            category: 'Muebles',
            price: 180,
            images: [EscritorioParaPcImg]
        },
        {
            id: 32,
            title: 'Sillón 1 Plaza',
            category: 'Muebles',
            price: 150,
            images: [sillon1plazaImg]
        },
    ];

    return (
        <div className='w-full flex justify-center'>
            <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1 mt-3 ml-1'>
              <li>
              <Link to={'./productos'}><img src={ShowM} className='rounded-md brightness-75 hover:cursor-pointer'/></Link>
              </li>
                {TPMarray.map((mueble) => (
                    <Link key={mueble.id} to={`/productos/${mueble.id}`}>
                        <li className='hover:brightness-75 hover:cursor-pointer'>
                            <div className='bg-gray-200 p-4 rounded-lg'>
                                <img src={mueble.images[0]} alt={mueble.title} className='object-cover w-full h-48 sm:h-64 md:h-[390px]' />
                                <div className='text-center mt-2'>
                                    <p className="text-lg font-bold">{mueble.title}</p>
                                    <p className="text-sm">Precio: ${mueble.price}</p>
                                </div>
                            </div>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    )
}

export default TrendMueblesSection;
