import IMG from '../Images/ServiceTienda.jpg'

function Service(){
    return(
        <div className="sm:grid sm:grid-cols-2 grid grid-cols-1 h-[800px] w-full">
            <div className='col-span-1 items-center justify-center flex flex-col border-r-2 border-black h-full'>
                <div className="mt-32 mb-32">
                    <ul>
                        <li>
                            <h1 className="sm:text-xl text-md font-bold p-10">✔️ Los envios mas rapidos del mundo✈️🌍</h1>
                        </li> 
                        <li>
                            <h1 className="sm:text-xl text-md font-bold p-10">✔️ Los mejores precios del mercado💸💳</h1>
                        </li>
                        <li>
                            <h1 className="sm:text-xl text-md font-bold p-10">✔️ Mas de 140 sedes alrededor del mundo🏙️</h1>
                        </li>  
                    </ul>
                </div>
            </div>
            <div className='col-span-1 h-[800px] w-full'>
                <img src={IMG} className='brightness-50 object-cover h-full w-full'/>
            </div>
        </div>
    )
}

export default Service
