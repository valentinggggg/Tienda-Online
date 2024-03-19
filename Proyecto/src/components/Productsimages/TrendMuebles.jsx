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
            id: 32,
            title: 'Sillón 1 Plaza',
            category: 'Muebles',
            price: 150,
            images: [sillon1plazaImg]
        },
    ];

    return (
      <div className='w-[390px] sm:w-full flex justify-center'>
      <ul className='grid grid-cols-2 gap-1 w-[380px] pt-2 pb-2 sm:w-full justify-center items-center place-items-center sm:flex mt-3'>
        {TPMarray.map((ropa) =>
          <Link key={ropa.id} to={`/productos/${ropa.id}`}>
            <li key={ropa.id} className='sm:flex hover:brightness-75 hover:cursor-pointer'>
              <div className='lg:w-full lg:h-[500px] md:w-[180px] md:h-[280px] shadow-inner bg-[#f2f0f0] lg:mt-4 md:flex flex-col md:justify-center md:items-center w-[160px] h-[290px] sm:mt-9 rounded-lg'>

                <div className="lg:w-full lg:h-full md:w-full md:h-full w-full h-[240px] flex justify-center items-center overflow-hidden p-2">
                  <img src={ropa.images} alt={ropa.title} className='object-cover w-full h-full rounded-lg' />
                </div>
                <div className='text-center pb-2 hover:bg-black hover:text-white w-full'>
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