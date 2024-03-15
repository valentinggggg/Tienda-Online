import Lavadero from './Productsimages/Images/Muebles/lavadero.jpg'

function Carrito () {
    return(
        <main className="flex flex-col justify-center items-center w-full h-full">
              <div className="h-[500px] w-[1500px] mt-20">
                <div className="flex">
                    <h1 className="font-bold text-2xl underline">
                    Carrito
                    </h1>
                    <h1 className="font-bold text-2xl">
                         🛒
                    </h1>
                </div>
                <div className="bg-white w-full h-full mt-1 grid grid-cols-1">
                    <div className="bg-red-400 h-[200px] border-solid border-2 border-black rounded-md flex">
                        <img src={Lavadero}
                                className='p-1'/>
                        <div className="flex flex-col">
                        <h1>
                            Titulo
                        </h1>
                        <h3>
                            Descripcion
                        </h3>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Carrito;