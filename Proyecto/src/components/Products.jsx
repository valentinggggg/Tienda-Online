
import ImagesArray from './Productsimages/ArrayImages';
import { Link } from 'react-router-dom';

function Productos() {
    return (
        <main className='w-screen min-h-screen lg:ml-32 md:mt-24 lg:mt-0 mt-24'>
            <div className='flex justify-between pl-7 pr-7 pt-7'>
                <div className='flex '>
                    <div className='mr-14 flex'>
                        <div className='sm:w-[240px] sm:h-[30px] w-[180px] bg-white flex items-center justify-center border-solid border-2 border-black rounded-xl mr-2'><input type="range" id="Price" name="Price" min="0" max="500" className='sm:w-[220px] sm:h-5 w-[160px] h-3 bg-gray-300 rounded-md outline-none opacity-70 hover:opacity-100 transition-opacity duration-200' /> </div>
                        <label htmlFor="Price" className=" text-gray-700 flex justify-center items-center text-lg font-bold"> $Price </label>
                    </div>
                    <select name='Productos' className='w-32 h-8 font-bold rounded-lg border-black border-2 border-solid'>
                        <option>Todos</option>
                        <option>Ropa</option>
                        <option>Muebles</option>
                        <option>Tecnologia</option>
                    </select>
                </div>
    
            </div>
            <ul className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 lg:gap-4 md:gap-2 md:mt-4 '>
                {ImagesArray.map((item) => (
                <Link key={item.id} to={`/productos/${item.id}`}>
                    <li key={item.id} className='flex justify-center items-center hover:brightness-75 hover:cursor-pointer'>
                        <div className='lg:w-[360px] lg:h-[440px] md:w-[300px] md:h-[380px]  shadow-inner border-solid border-2 border-black bg-[#f2f0f0] lg:mt-4 md:flex flex-col md:justify-center md:items-center w-[300px] h-[350px] mt-9 rounded-lg'>
                            <div className="lg:w-full lg:h-full md:w-full md:h-full w-full h-[290px] flex justify-center items-center overflow-hidden p-2">
                                <img src={item.images} alt={item.title} className='object-cover w-full h-full rounded-lg' />
                            </div>
                            <div className='text-center pb-2'> 
                                <p className="text-lg font-bold">{item.title}</p> 
                                <p className="text-sm">Precio: ${item.price}</p>
                            </div>
                        </div>
                    </li>
                </Link>
                ))}
            </ul>
        </main>
    );
}

export default Productos;
