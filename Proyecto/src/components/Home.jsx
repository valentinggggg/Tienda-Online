import React from 'react';
import '../styles/Home.css';
import TrendProducts from './TrendProducts';
import Carrousell from './Carrousel';
import Service from './Service';

function Home(){
    return(
        <main>
            <section className="Inicio w-screen min-h-screen">
                <article className="Ofertas/Carrousell flex justify-center items-center">
                    <div className="Carrousell lg:w-full lg:ml-28 lg:h-[700px] lg:mt-0 mt-28 w-screen h-80">
                        <Carrousell />
                    </div>
                </article>
                <article className="ProductosTendencia sm:w-full sm:ml-28 sm:flex sm:flex-col sm:justify-center sm:items-center">
                    <TrendProducts />
                </article>
                <article className="Servicios/Ubicacion sm:ml-32 bg-[#e2e2e2] w-full h-[800px] mt-8">
                    <Service /> 
                </article>
            </section>
        </main>
    )
}

export default Home;
