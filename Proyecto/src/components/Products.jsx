import ImagesArray from './Productsimages/ArrayImages';

function Productos (){
    return(
    <main className='w-screen min-h-screen ml-12'>
        <ul className='grid grid-cols-4'>
        {ImagesArray.map((item) => (
            <li key={item.id}>
                <div className='w-80 h-80 bg-red-400 m-24 flex flex-col justify-center items-center'>
                    <div className="w-full h-full flex justify-center items-center overflow-hidden p-2"> {/* Contenedor adicional para centrar la imagen y establecer tamaño uniforme */}
                        <img src={item.images} alt={item.title} className='object-cover w-full h-full' />
                    </div>
                    <div>
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