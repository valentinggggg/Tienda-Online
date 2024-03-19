import React from 'react';
import { FaStar } from "react-icons/fa";
import TrendRopaSection from "./Productsimages/TrendRopa";
import TrendMueblesSection from './Productsimages/TrendMuebles';
import TrendTecnoSection from "./Productsimages/TrendTecno";
import { Link } from 'react-router-dom';

function TrendProducts(){
    return(
    <article className="flex flex-col justify-center items-center w-full">
        <h1 className="text-center custom-h1 text-4xl text-white font-bold mt-9 underline decoration-slate-50 decoration-2 underline-offset-4 flex">Productos en Tendencia<FaStar className='sm:ml-2 text-yellow-400 sm:mt-1'/></h1>
        <div className="lg:flex lg:flex-col lg:items-start">
            <TrendRopaSection />
            <TrendMueblesSection />
            <TrendTecnoSection />
        </div>
    </article>
    )
}

export default TrendProducts;

