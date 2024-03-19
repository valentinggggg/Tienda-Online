import remeraCruzImg from './Images/Ropa/remeracruz.jpg';
import remeraDeportivaImg from './Images/Ropa/remeradeportiva.jpg';
import topMujerImg from './Images/Ropa/topmujer.jpg';
import ZapatillaJaguarImg from './Images/Ropa/ZapatillaJaguar.jpg';
import { Link } from 'react-router-dom';


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
        <div className='w-[390px] sm:w-full flex'>
          <ul className='grid grid-cols-2 gap-1 w-[380px] pt-2 pb-2 sm:w-full justify-center items-center place-items-center sm:flex mt-3'>
            {TPRarray.map((ropa) =>
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

export default TrendRopaSection;