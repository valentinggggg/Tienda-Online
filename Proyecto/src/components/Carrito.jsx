import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

function Carrito({ carrito, setCarrito }) {
    const [counts, setCounts] = useState({});

    const handleIncrement = (id) => {
        setCounts(prevCounts => ({
            ...prevCounts,
            [id]: (prevCounts[id] || 0) + 1
        }));
    };

    const handleDecrement = (id) => {
        if ((counts[id] || 0) > 1) {
            setCounts(prevCounts => ({
                ...prevCounts,
                [id]: (prevCounts[id] || 0) - 1
            }));
        }
    };

    const eliminarProducto = (id) => {
        const nuevoCarrito = carrito.filter(producto => producto.id !== id);
        setCarrito(nuevoCarrito);
    };

    return (
        <main className="flex flex-col justify-center items-center w-full h-full">
            <div className=" mt-20">
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
                        <div key={producto.id} className="bg-[#eaeaea] h-[240px] sm:h-[215px] border-solid border-2 border-black rounded-md flex flex-col sm:flex sm:justify-between sm:flex-row mt-2">
                            <div className="flex p-1">
                                <div className="sm:w-[200px] sm:h-[200px] w-[400px] h-[150px] mt-4 sm:mt-0">
                                    <img src={producto.images[0]} className=' object-cover w-full h-full rounded-md border-solid border-2 border-black'/>
                                </div>
                                <div className="flex flex-col p-1 sm:mt-0 mt-4">
                                    <h1 className="font-bold text-lg sm:text-2xl">{producto.title}</h1>
                                    <h3 className="sm:text-justify text-sm sm:text-md p-1">{producto.descriptionCart}</h3>
                                </div>
                            </div>
                            <div className="flex sm:flex-col justify-between items-end p-2">
                                <div className="flex justify-end">
                                <button onClick={() => eliminarProducto(producto.id)} className="font-bold text-2xl ml-6 hover:cursor-pointer hover:text-red-600"><FaTrashAlt /></button>
                            </div>
                            <div className="flex justify-end items-end">
                                <button onClick={() => handleIncrement(producto.id)} className="font-bold text-3xl border-solid border-2 border-black w-10 rounded-xl mr-3 hover:cursor-pointer hover:bg-[#adadad]">+</button>
                                <h5 className="font-bold text-3xl mr-3">{Math.max(counts[producto.id] || 0, 1)}</h5>
                                <button onClick={() => handleDecrement(producto.id)} className="font-bold text-3xl border-solid border-2 border-black w-10 rounded-xl hover:cursor-pointer hover:bg-[#adadad]">-</button>
                            </div>
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




