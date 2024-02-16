import {Link} from 'react-router-dom';
import { IoMdHome } from "react-icons/io";
import { FaBagShopping } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

import tiendaLogo from "../Images/tiendalogo.png"

import '../styles/Home.css'



function NavBar() {
    return (
        <nav className='navbar flex fixed top-0 bottom-0 bg-[#616161] w-28 flex-col items-center'>
            <div className='p-3'>
                <img src={tiendaLogo} alt='Logo'/>
            </div>
            <div className='Home-Products flex flex-col justify-center mt-44'>
                <div className='mb-10'><Link title='Inicio' to='/'> <IoMdHome className='text-[#edece8] text-6xl font-bold' title='Home'/> </Link> </div> 
                <div className='mb-10'> <Link title='Productos' to='/productos'> <FaBagShopping className='text-[#edece8] text-6xl font-bold'/> </Link> </div>
                <div> <Link title='Contacto' to=''> <IoIosMail className='text-[#edece8] text-6xl font-bold ' /> </Link> </div>
            </div>
        </nav>

    )
}

export default NavBar;