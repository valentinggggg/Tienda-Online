import '../styles/Home.css'
import TrendProducts from './TrendProducts';
import Carrousell from './Carrousel';
import Service from './Service';

function Home(){
    return(
        <main>
           <section className="Inicio w-screen min-h-screen">
                <article className="Ofertas/Carrousell flex justify-center items-center">
                    <div className="Carrousell bg-green-300 lg:w-[1200px] lg:h-[400px] mt-4">
                        <Carrousell />
                    </div>
                </article>
                <article className="ProductosTendencia flex flex-col justify-center items-center">
                    <h1 className="custom-h1 text-4xl text-white  font-bold mt-9 underline decoration-slate-50 decoration-2 underline-offset-4">Productos en Tendencia</h1>
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