import ImagesArray from './Productsimages/ArrayImages';

function Productos (){
    return(
    <main className='w-screen min-h-screen ml-32'>
    <div className='flex justify-between pl-7 pr-7 pt-7'>
        <div className='flex'>
            <div className='mr-10'>
                <input type="range" id="Price" name="Price" min="0" max="500" className='w-full h-5 bg-gray-300 rounded-md outline-none opacity-70 hover:opacity-100 transition-opacity duration-200' />
                <label htmlFor="Price" className="text-sm text-gray-700"> $ Price </label>
            </div>
        <select name='Productos'>
            <option>Todos</option>
            <option>Ropa</option>
            <option>Muebles</option>
            <option>Tecnologia</option>
        </select>
        </div>
        <div>
            <button className='bg-black w-4 h-4'>

            </button>
        </div>
    </div>
        <ul className='grid lg:grid-cols-4 md:grid-cols-2 gap-4'>
        {ImagesArray.map((item) => (
            <li key={item.id}>
                <div className='w-[360px] h-[440px] bg-red-400 m-4 flex flex-col justify-center items-center'>
                    <div className="w-full h-full flex justify-center items-center overflow-hidden p-2"> {/* Contenedor adicional para centrar la imagen y establecer tamaño uniforme */}
                        <img src={item.images} alt={item.title} className='object-cover w-full h-full' />
                    </div>
                    <div className='p-4'>
                        <p>{item.title}</p>
                        <p>Precio: ${item.price}</p>
                    </div>
                </div>
            </li>
         ))}
        </ul>
    </main >
    )
}

export default Productos;