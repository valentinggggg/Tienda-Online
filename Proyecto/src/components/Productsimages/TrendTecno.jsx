import auricularesSonyImg from './Images/Tecnologia/auricularessony.jpg';
import aurustecladoImg from './Images/Tecnologia/aorusteclado.jpg';
import iphoneXsImg from './Images/Tecnologia/iphonexs.jpg';
import xiaomi11Img from './Images/Tecnologia/xiaomi11.jpg';
import { Link } from 'react-router-dom';


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
      <div className='w-[390px] sm:w-full flex justify-center'>
      <ul className='grid grid-cols-2 gap-1 w-[380px] pt-2 pb-2 sm:w-full justify-center items-center place-items-center sm:flex mt-3'>
        {TPTarray.map((ropa) =>
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

export default TrendTecnoSection;