import {Link} from 'react-router-dom';
import { IoMdHome } from "react-icons/io";
import { FaBagShopping } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

import tiendaLogo from "../Images/tiendalogo.png"

import '../styles/Home.css'

import ImagesArray from './Productsimages/ArrayImages';


function NavBar() {
    return (
       <nav className='navbar flex'>
            <aside className='bg-[#616161] h-screen w-28 flex flex-col items-center'>
                <div className='p-3'>
                    <img src={tiendaLogo} alt='Logo'/>
                </div>
                <div className='Home-Products mt-44 flex flex-col space-y-10'>
                    <div className=''><Link title='Inicio' to='/'> <IoMdHome className='text-[#edece8] text-6xl font-bold' title='Home'/> </Link> </div> 
                    <div className=''> <Link title='Productos' to=''> <FaBagShopping className='text-[#edece8] text-6xl font-bold'/> </Link> </div>
                    <div className=''> <Link title='Contacto' to=''> <IoIosMail className='text-[#edece8] text-6xl font-bold ' /> </Link> </div>
                </div>

            </aside>
            <div className='w-80 h-80 bg-red-400 m-24'>
            {ImagesArray.map((item) => (
                    <div key={item.id}>
                        <img src={item.imagen} alt={item.title} />
                        <p>{item.title}</p>
                        <p>Categoría: {item.categoria}</p>
                        <p>Precio: ${item.precio}</p>
                    </div>
                 ))}
            </div>
       </nav>
    )
}

export default NavBar;