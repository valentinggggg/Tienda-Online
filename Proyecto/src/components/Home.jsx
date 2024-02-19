import '../styles/Home.css'
import TrendProducts from './TrendProducts';
import Carrousell from './Carrousel';
import Service from './Service';
import { FaStar } from "react-icons/fa";

function Home(){
    return(
        <main>
           <section className="Inicio w-screen min-h-screen">
                <article className="Ofertas/Carrousell flex justify-center items-center">
                    <div className="Carrousell bg-green-300 lg:w-[1200px] lg:h-[400px] lg:mt-4 mt-28 w-screen h-80">
                        <Carrousell />
                    </div>
                </article>
                <article className="ProductosTendencia sm:flex sm:flex-col sm:justify-center sm:items-center">
                    <TrendProducts />
                </article>
                <article className="Servicios/Ubicacion">
                    <Service /> 
                </article>
           </section>
        </main>
    )
}



export default Home;