import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";

import tiendaLogo from "../Images/tiendalogo.png";

function NavBarsm() {
    return (
        <nav className='lg:hidden fixed top-0 left-0 w-full h-[100px] bg-[#616161] flex items-center justify-between'>
            <div className='p-0 h-[100px] w-[100px]'>
                <img
                    src={tiendaLogo}
                    alt='Logo'
                    className='w-auto h-auto object-contain'
                    style={{ maxWidth: '100px', maxHeight: '200px' }}
                />
            </div>
            <div className='Home-Products flex justify-center items-center'>
                <div className='ml-2'><Link title='Inicio' to='/'>Inicio</Link></div>
                <div className='ml-2'><Link title='Productos' to='/productos'>Productos</Link></div>
                <div className='ml-2'><Link title='Contacto' to='/contacto'>Contacto</Link></div>
                <div className='mr-4'><Link title='Carrito' to='/cart'><FaShoppingCart /></Link></div>
            </div>
        </nav>
    )
}

export default NavBarsm;
