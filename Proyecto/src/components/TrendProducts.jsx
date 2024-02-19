import TrendRopaSection from "./Productsimages/TrendRopa";
import TrendMueblesSection from './Productsimages/TrendMuebles';
import TrendTecnoSection from "./Productsimages/TrendTecno";
import '../styles/Home.css'

function TrendProducts(){
    return(
        <div className="flex">
            <ul className="flex flex-col">

                <div className="flex flex-col mt-4"><h1 className="text-xl text-black font-bold mt-2 mb-0">Ropa</h1><li><TrendRopaSection /></li> </div>
                <div className="flex flex-col mt-4"><h1 className="text-xl  text-black font-bold">Muebles</h1><li><TrendMueblesSection /></li> </div>
                <div className="flex flex-col mt-4"><h1 className="text-xl  text-black font-bold">Tecnologia</h1><li><TrendTecnoSection /></li> </div>

            </ul>
        </div>
    )
}

export default TrendProducts