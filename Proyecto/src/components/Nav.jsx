import { Link } from 'react-router-dom';
import { IoMdHome } from "react-icons/io";
import { FaBagShopping } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import tiendaLogo from "../Images/tiendalogo.png";

import '../styles/Home.css';

function NavBar() {
    return (
        <nav className='lg:block lg:fixed lg:left-0 lg:top-0 lg:h-full lg:bg-[#616161] lg:w-28 lg:flex-col flex items-center justify-between'>
        <div className='lg:p-3 sm:p-0 sm:h-[100px] sm:w-[100px]'>
            <img
                src={tiendaLogo}
                alt='Logo'
                className='lg:w-full sm:w-auto sm:h-auto object-contain'
                style={{ maxWidth: '100px', maxHeight: '200px' }}
            />
        </div>
        <div className='Home-Products flex lg:flex-col justify-center items-center lg:mt-44'>
            <div className='lg:mb-10 sm:ml-2'><Link title='Inicio' to='/'> <IoMdHome className='text-[#edece8] lg:text-6xl sm:text-3xl font-bold' title='Home'/> </Link> </div> 
            <div className='lg:mb-10 sm:ml-2'> <Link title='Productos' to='/productos'> <FaBagShopping className='text-[#edece8] lg:text-6xl sm:text-3xl font-bold'/> </Link> </div>
            <div className='lg:mb-10 sm:ml-2'> <Link title='Contacto' to='/contacto'> <IoIosMail className='text-[#edece8] lg:text-6xl sm:text-3xl font-bold ' /> </Link> </div>
            <div className='lg:mt-72 sm:mr-4'> <Link title='Carrito' to='/cart'> <FaShoppingCart className='text-[#edece8] lg:text-5xl sm:text-3xl font-bold ' /> </Link> </div>
        </div>
    </nav>
    )
}

export default NavBar;
