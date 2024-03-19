import React from 'react';
import { Link } from 'react-router-dom';
import auricularesSonyImg from './Images/Tecnologia/auricularessony.jpg';
import aurustecladoImg from './Images/Tecnologia/aorusteclado.jpg';
import iphoneXsImg from './Images/Tecnologia/iphonexs.jpg';
import ShowT from './Images/Tecnologia/ShowTec.jpg'

function TrendTecnoSection(){
    const TPTarray = [
        {
            id: 19,
            title: 'Auriculares Sony',
            category: 'Tecnologia',
            price: 120,
            images: [auricularesSonyImg]
        },
        {
            id: 20,
            title: 'Aurust Teclado',
            category: 'Tecnologia',
            price: 80,
            images: [aurustecladoImg]
        },
        {
            id: 21,
            title: 'iPhone Xs',
            category: 'Tecnologia',
            price: 900,
            images: [iphoneXsImg]
        },
    ];

    return (
        <div className='w-full flex justify-center'>
            <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1 mt-3 ml-1'>
              <li>
              <Link to={'./productos'}><img src={ShowT} className='rounded-md brightness-75 hover:cursor-pointer'/></Link>
              </li>
                {TPTarray.map((tecnologia) => (
                    <Link key={tecnologia.id} to={`/productos/${tecnologia.id}`}>
                        <li className='hover:brightness-75 hover:cursor-pointer'>
                            <div className='bg-gray-200 p-4 rounded-lg'>
                                <img src={tecnologia.images[0]} alt={tecnologia.title} className='object-cover w-full h-48 sm:h-64 md:h-[390px]' />
                                <div className='text-center mt-2'>
                                    <p className="text-lg font-bold">{tecnologia.title}</p>
                                    <p className="text-sm">Precio: ${tecnologia.price}</p>
                                </div>
                            </div>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    )
}

export default TrendTecnoSection;
