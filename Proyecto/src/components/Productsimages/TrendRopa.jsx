import remeraCruzImg from './Images/Ropa/remeracruz.jpg';
import remeraDeportivaImg from './Images/Ropa/remeradeportiva.jpg';
import topMujerImg from './Images/Ropa/topmujer.jpg';
import ZapatillaJaguarImg from './Images/Ropa/ZapatillaJaguar.jpg';

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

    return(
        <div>
            <ul className='flex bg-[#ebebeb] pl-4 pr-4 pt-2 pb-2 mt-3 border border-solid border-black rounded-md'>
                
                    {
                        TPRarray.map((ropa) =>
                        <li key={ropa.id} className='flex justify-center items-center m-1 hover:brightness-75'>
                        <div className='lg:w-[250px] lg:h-[300px] md:w-[210px] md:h-[280px]  shadow-inner border-solid border-2 border-black bg-[#f2f0f0] lg:mt-4 md:flex flex-col md:justify-center md:items-center w-[200px] h-[290px] mt-9 rounded-lg'>
                            <div className="lg:w-full lg:h-full md:w-full md:h-full w-full h-[240px] flex justify-center items-center overflow-hidden p-2">
                                <img src={ropa.images} alt={ropa.title} className='object-cover w-full h-full rounded-lg' />
                            </div>
                            <div className='text-center pb-2'> 
                                <p className="text-lg font-bold">{ropa.title}</p> 
                                <p className="text-sm">Precio: ${ropa.price}</p>
                            </div>
                        </div>
                    </li>
                        )
                    
                     }   
            </ul>
          
        </div>
    )

}

export default TrendRopaSection;