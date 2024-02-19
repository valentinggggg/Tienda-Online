import React, { useState } from 'react';
import { FaBars, FaTimes, FaShoppingBag, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { IoMdHome } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import tiendaLogo from "../Images/tiendalogo.png";


function NavBarsm() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className='lg:hidden fixed top-0 left-0 w-full bg-[#616161]'>
            <div className='flex justify-between items-center px-4 py-2'>
                <div className='p-0 h-[100px] w-[100px]'>
                    <img
                        src={tiendaLogo}
                        alt='Logo'
                        className='w-auto h-auto object-contain'
                        style={{ maxWidth: '100px', maxHeight: '200px' }}
                    />
                </div>
                <div className='flex mr-4'>
                    <div className='text-white cursor-pointer p-2' onClick={toggleMenu}>
                        {isOpen ? <FaTimes className='text-2xl' /> : <FaBars className='text-2xl' />}
                    </div>
                    <div className='p-2'>
                    <Link title='Carrito' to='/cart' className='text-2xl'> 
                        <FaShoppingCart className='text-[#edece8] lg:text-5xl sm:text-3xl font-bold ' />
                    </Link> 
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className='flex flex-col items-center mt-4'>
                    <Link to='/' className='flex flex-col items-center text-[#edece8] underline text-md mb-4' onClick={closeMenu}>
                        <IoMdHome className='text-xl'/> Inicio
                    </Link>
                    <Link to='/productos' className='flex flex-col items-center text-[#edece8] underline text-md mb-4' onClick={closeMenu}>
                        <FaShoppingBag className='text-xl'/> Productos
                    </Link>
                    <Link to='/contacto' className='flex flex-col items-center text-[#edece8] underline text-md mb-4' onClick={closeMenu}>
                        <IoIosMail className='text-xl'/> Contacto
                    </Link>
                </div>
            )}
        </nav>
    )
}

export default NavBarsm;
