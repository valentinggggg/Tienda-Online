import ImagesArray from './Productsimages/ArrayImages';

function Productos (){
    return(
    <main className='w-screen min-h-screen ml-32'>
        <ul className='grid lg:grid-cols-4 md:grid-cols-2 gap-4'>
        {ImagesArray.map((item) => (
            <li key={item.id}>
                <div className='w-[360px] h-[440px] bg-red-400 m-4 flex flex-col justify-center items-center'>
                    <div className="w-full h-full flex justify-center items-center overflow-hidden p-2"> {/* Contenedor adicional para centrar la imagen y establecer tamaño uniforme */}
                        <img src={item.images} alt={item.title} className='object-cover w-full h-full' />
                    </div>
                    <div className='p-4'>
                        <p>{item.title}</p>
                        <p>Precio: ${item.precio}</p>
                    </div>
                </div>
            </li>
         ))}
        </ul>
    </main >
    )
}

export default Productos;