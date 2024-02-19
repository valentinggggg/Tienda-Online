import EscritorioParaPcImg from './Images/Muebles/EscritorioParaPc.jpg';
import MesaEscandinavaImg from './Images/Muebles/MesaEscandinava.jpg';
import sillon1plazaImg from './Images/Muebles/sillon1plaza.jpg';
import sillamaderaImg from './Images/Muebles/sillamadera.jpg';
import { Link } from 'react-router-dom';


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
            id: 31,
            title: 'Mesa Escandinava',
            category: 'Muebles',
            price: 250,
            images: [MesaEscandinavaImg]
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
        <div className='w-[390px] sm:w-[1200px] flex justify-center'>
          <ul className='grid grid-cols-2 gap-1 w-[380px] sm:w-[1050px] justify-center items-center place-items-center sm:flex bg-[#ebebeb] sm:pl-4 sm:pr-4 sm:pt-2 sm:pb-2 mt-3 border border-solid border-black rounded-md'>
            {TPMarray.map((ropa) =>
              <Link key={ropa.id}>
                <li key={ropa.id} className='sm:flex sm:justify-center sm:items-center m-1 hover:brightness-75 hover:cursor-pointer'>
                  <div className='lg:w-[250px] lg:h-[300px] md:w-[180px] md:h-[280px] shadow-inner border-solid border-2 border-black bg-[#f2f0f0] lg:mt-4 md:flex flex-col md:justify-center md:items-center w-[160px] h-[290px] sm:mt-9 rounded-lg '>
    
                    <div className="lg:w-full lg:h-full md:w-full md:h-full w-full h-[240px] flex justify-center items-center overflow-hidden p-2">
                      <img src={ropa.images} alt={ropa.title} className='object-cover w-full h-full rounded-lg' />
                    </div>
                    <div className='text-center pb-2'>
                      <p className="text-lg font-bold">{ropa.title}</p>
                      <p className="text-sm">Precio: ${ropa.price}</p>
                    </div>
                  </div>
                </li>
              </Link>
            )}
          </ul>
        </div>
      )

}

export default TrendMueblesSection;