import { useState, useEffect } from "react";
import { FaTrashAlt, FaCheckCircle } from "react-icons/fa";


function Carrito({ carrito, setCarrito }) {
    const [counts, setCounts] = useState({});
    const [compraFinalizada, setCompraFinalizada] = useState(false);

    useEffect(() => {
        const initialCounts = {};
        carrito.forEach(producto => {
            initialCounts[producto.id] = 1; // Inicializamos cada contador a 1
        });
        setCounts(initialCounts);
    }, [carrito]);

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

    const handleEliminarProducto = (id) => {
        const nuevoCarrito = carrito.filter(producto => producto.id !== id);
        setCarrito(nuevoCarrito);
    };

    const calcularTotal = () => {
        let total = 0;
        carrito.forEach(producto => {
            total += (producto.price * counts[producto.id]) || 0;
        });
        return total;
    };

    const handleFinalizarCompra = () => {
        setCompraFinalizada(true);
    };

    const handleCerrarModal = () => {
        setCompraFinalizada(false);
    };

    return (
        <main className="flex flex-col justify-center items-center w-full h-full">
            <div className=" mt-32">
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
                                    <h1 className="font-bold text-lg sm:text-2xl flex">{producto.title} <h1 className="ml-2 text-green-500">${producto.price} </h1></h1>
                                    <h3 className="sm:text-justify text-sm sm:text-md p-1">{producto.descriptionCart}</h3>
                                </div>
                            </div>
                            <div className="flex sm:flex-col justify-between items-end p-2">
                                <div className="flex justify-end">
                                <button onClick={() => handleEliminarProducto(producto.id)} className="font-bold text-2xl ml-6 hover:cursor-pointer hover:text-red-600"><FaTrashAlt /></button>
                            </div>
                            <div className="flex justify-end items-end">
                                <button onClick={() => handleIncrement(producto.id)} className="font-bold text-3xl border-solid border-2 border-black w-10 rounded-xl mr-3 hover:cursor-pointer hover:bg-[#adadad]">+</button>
                                <h5 className="font-bold text-3xl mr-3">{Math.max(counts[producto.id] || 1, 1)}</h5>
                                <button onClick={() => handleDecrement(producto.id)} className="font-bold text-3xl border-solid border-2 border-black w-10 rounded-xl hover:cursor-pointer hover:bg-[#adadad]">-</button>
                            </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center items-center">
                    <button className="btn btn-success mt-4 border-solid border-2 border-black" onClick={()=>document.getElementById('my_modal_5').showModal()}>Pagar Ahora!</button>
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Resumen del carrito:</h3>
                            {carrito.map((productocart) => (
                                <div key={productocart.id} className="">
                                    <div className="flex">
                                        <h1 className="flex">{productocart.title}: <h1 className="font-bold ml-2"> ${productocart.price} x {counts[productocart.id] || 1}</h1> </h1>
                                    </div> 
                                </div>
                            ) )}
                            <h1 className="border-t border-black pt-1">Total: ${calcularTotal()}</h1>
                            <div className="modal-action">
                                <form method="dialog">
                                    <button className="btn btn-outline btn-success" onClick={handleFinalizarCompra}>Finalizar Compra </button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                    {compraFinalizada && (
                        <dialog className="modal modal-bottom sm:modal-middle" open>
                            <div className="modal-box border-2 border-black border-solid flex flex-col justify-center items-center">
                                <FaCheckCircle className="mb-6 text-4xl text-green-400" />
                                <h1 className="text-xl font-bold">Compra Finalizada</h1>
                                <h3>Gracias por confiar en nosotros!</h3>
                                <button className="btn mt-4 btn-warning" onClick={handleCerrarModal}>Cerrar</button>
                            </div>
                        </dialog>
                    )}
                </div>
            </div>
        </main>
    )
}

export default Carrito;







