import { Link } from 'react-router-dom';
import { IoMdHome } from "react-icons/io";
import { FaBagShopping } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import tiendaLogo from "../Images/tiendalogo.png";
import '../styles/Home.css';
import { useState } from 'react';

function NavBar() {
    const [active, setActive] = useState(null);

    const handleClick = (page) => {
        setActive(page);
    }

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
            <div className='Home-Products lg:flex lg:flex-col justify-center items-center lg:mt-44'>
                <div className={`lg:mb-10 sm:ml-2 ${active === 'home' ? 'clickedHome' : ''}`} onClick={() => handleClick('home')}>
                    <Link title='Inicio' to='/' className='flex flex-col justify-center items-center'>
                        <IoMdHome style={{ color: active === 'home' ? 'black' : '#edece8' }} className='lg:text-6xl sm:text-3xl font-bold' title='Home'/>
                        <h3 style={{ color: active === 'home' ? 'black' : '#edece8' }} className='text-center underline font-bold p-1'> Inicio </h3>
                    </Link>
                </div>
                <div className={`lg:mb-10 sm:ml-2 ${active === 'products' ? 'clicked' : ''}`} onClick={() => handleClick('products')}>
                    <Link title='Productos' to='/productos' className='flex flex-col justify-center items-center'>
                        <FaBagShopping style={{ color: active === 'products' ? 'black' : '#edece8' }} className='lg:text-6xl sm:text-3xl font-bold'/>
                        <h3 style={{ color: active === 'products' ? 'black' : '#edece8' }} className='text-center underline font-bold p-1'> Productos </h3>
                    </Link>
                </div>
                <div className={`lg:mb-10 sm:ml-2 ${active === 'contact' ? 'clicked' : ''}`} onClick={() => handleClick('contact')}>
                    <Link title='Contacto' to='/contacto' className='flex flex-col justify-center items-center'>
                        <IoIosMail style={{ color: active === 'contact' ? 'black' : '#edece8' }} className='lg:text-6xl sm:text-3xl font-bold ' />
                        <h3 style={{ color: active === 'contact' ? 'black' : '#edece8' }} className='text-center underline font-bold p-1'> Contacto </h3>
                    </Link>
                </div>
                <div className={`lg:mt-48 sm:mr-4 lg:ml-4 ${active === 'cart' ? '' : ''}`} onClick={() => handleClick('cart')}>
                    <Link title='Carrito' to='/cart' className='flex flex-col justify-center items-center'>
                        <FaShoppingCart style={{ color: active === 'cart' ? 'yellow' : '#edece8' }} className='lg:text-5xl sm:text-3xl font-bold ' />
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;


