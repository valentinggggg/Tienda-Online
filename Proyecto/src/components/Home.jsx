import {Link} from 'react-router-dom';

import { IoMdHome } from "react-icons/io";
import { FaBagShopping } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

import tiendaLogo from "../Images/tiendalogo.png"

import '../styles/Home.css'


function NavBar() {
    return (
       <nav className='navbar'>
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
       </nav>
    )
}

export default NavBar;