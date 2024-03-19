import React from 'react';
import { Link } from 'react-router-dom';
import remeraCruzImg from './Images/Ropa/remeracruz.jpg';
import remeraDeportivaImg from './Images/Ropa/remeradeportiva.jpg';
import Show from './Images/Ropa/ShowRopa.jpg'
import topMujerImg from './Images/Ropa/topmujer.jpg';

function TrendRopaSection(){
    const TPRarray = [
        {
            id: 16,
            title: 'Remera Cruz',
            category: 'Ropa',
            price: 30,
            images: [remeraCruzImg]
        },
        {
            id: 17,
            title: 'Remera Deportiva',
            category: 'Ropa',
            price: 40,
            images: [remeraDeportivaImg]
        },
        {
            id: 18,
            title: 'Top Mujer',
            category: 'Ropa',
            price: 25,
            images: [topMujerImg]
        },
    ];

    return (
        <div className='w-full flex justify-center'>
            <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1 mt-3 ml-1'>
              <li>
              <Link to={'./productos'}><img src={Show} className='rounded-md brightness-75 hover:cursor-pointer'/></Link>
              </li>
                {TPRarray.map((ropa) => (
                    <Link key={ropa.id} to={`/productos/${ropa.id}`}>
                        <li className='hover:brightness-75 hover:cursor-pointer '>
                            <div className='bg-gray-200 p-4 rounded-lg'>
                                <img src={ropa.images[0]} alt={ropa.title} className='object-cover w-full h-48 sm:h-64 md:h-[390px]' />
                                <div className='text-center mt-2'>
                                    <p className="text-lg font-bold">{ropa.title}</p>
                                    <p className="text-sm">Precio: ${ropa.price}</p>
                                </div>
                            </div>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    )
}

export default TrendRopaSection;
