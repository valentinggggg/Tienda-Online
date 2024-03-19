import TrendRopaSection from "./Productsimages/TrendRopa";
import TrendMueblesSection from './Productsimages/TrendMuebles';
import TrendTecnoSection from "./Productsimages/TrendTecno";
import { FaStar } from "react-icons/fa";
import '../styles/Home.css'
import { Link } from "react-router-dom";

function TrendProducts(){
    return(
    <article className="flex flex-col justify-center items-center w-full">
         <h1 className="text-center custom-h1 text-4xl text-white  font-bold mt-9 underline decoration-slate-50 decoration-2 underline-offset-4 flex">Productos en Tendencia<FaStar className='sm:ml-2 text-yellow-400 sm:mt-1'/></h1>
        <div className="flex justify-center items-center">
            <ul className="flex flex-col">

                <div className="sm:flex sm:flex-col mt-1"><h1 className="text-xl text-black font-bold sm:mt-2 sm:mb-0 sm:ml-20"><Link> <img/> </Link></h1><li><TrendRopaSection /></li> </div>
                <div className="flex flex-col mt-1"><h1 className="text-xl  text-black font-bold sm:mt-2 sm:mb-0 sm:ml-20"><Link><img/>  </Link></h1><li><TrendMueblesSection /></li> </div>
                <div className="flex flex-col mt-1"><h1 className="text-xl  text-black font-bold sm:mt-2 sm:mb-0 sm:ml-20"><Link> <img/> </Link></h1><li><TrendTecnoSection /></li> </div>

            </ul>
        </div>
    </article>
    )
}

export default TrendProducts