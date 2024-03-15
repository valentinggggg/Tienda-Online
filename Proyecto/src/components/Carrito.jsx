
function Carrito ({ carrito }) {
    return(
        <main className="flex flex-col justify-center items-center w-full h-full">
              <div className="w-[1100px] mt-20">
                <div className="flex">
                    <h1 className="font-bold text-2xl underline">
                    Carrito
                    </h1>
                    <h1 className="font-bold text-2xl">
                         🛒
                    </h1>
                </div>
                <div className="w-full h-full mt-1 grid grid-cols-1 justify-center">
                {carrito.map((producto) => (
                        <div key={producto.id} className="bg-red-400 h-[210px] border-solid border-2 border-black rounded-md flex justify-between mt-2">
                                <div className="flex p-1">
                                    <div className="sm:w-[200px] sm:h-[200px]"> 
                                        <img src={producto.images[0]} className=' object-cover w-full h-full rounded-md border-solid border-2 border-black'/>
                                    </div>
                                <div className="flex flex-col p-1">
                                    <h1 className="font-bold text-2xl">{producto.title}</h1>
                                    <h3 className="text-justify text-md p-1">{producto.descriptionCart}</h3>
                                </div>
                            </div>
                            <div className="flex justify-end items-end p-2">
                                <button className="font-bold text-3xl border-solid border-2 border-black w-10 rounded-xl mr-3">+</button>
                                <h5 className="font-bold text-3xl mr-3">1</h5>
                                <button className="font-bold text-3xl border-solid border-2 border-black w-10 rounded-xl">-</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center items-center">
                    <button className="p-2 mt-2 font-bold w-32 border-solid border-2 border-black rounded-md bg-green-200 hover:bg-green-500">Comprar</button>
                </div>
            </div>
        </main>
    )
}

export default Carrito;