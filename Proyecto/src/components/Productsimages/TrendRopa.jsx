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
        {
            id: 28,
            title: 'Zapatilla Jaguar',
            category: 'Ropa',
            price: 70,
            images: [ZapatillaJaguarImg]
        },
    ];

    return (
        <div className='w-[390px] sm:w-[1200px] flex justify-center'>
          <ul className='grid grid-cols-2 gap-1 w-[380px] pt-2 pb-2 sm:w-[1050px] justify-center items-center place-items-center sm:flex bg-[#ebebeb] sm:pl-4 sm:pr-4 sm:pt-2 sm:pb-2 mt-3 border border-solid border-black rounded-md'>
            {TPRarray.map((ropa) =>
              <Link key={ropa.id}>
                <li key={ropa.id} className='sm:flex hover:brightness-75 hover:cursor-pointer'>
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

export default TrendRopaSection;