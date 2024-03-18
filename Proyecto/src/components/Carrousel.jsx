import React, { useRef, useState, useEffect } from 'react';
import { SliderArray } from "./Productsimages/Slider";

function Carrousell(){

    const listImages = useRef();
    const [currentIndex, setCurrentIndex] = useState(1); // Empezamos con el id:1

    useEffect(() => {
        const nodeImg = listImages.current;
        const imgSliders = nodeImg.querySelector(`div[data-id="${currentIndex}"] > img`);

        if (imgSliders) {
            imgSliders.scrollIntoView({
                behavior: 'auto',
                block: 'center', 
                inline: 'center', 
            });
        }
    }, [currentIndex]);

    const scrollImage = (direction) => {
        if (direction === 'previous') { 
            setCurrentIndex(prevIndex => (prevIndex === 1 ? SliderArray.length : prevIndex - 1));
        } else {
            setCurrentIndex(prevIndex => (prevIndex === SliderArray.length ? 1 : prevIndex + 1));
        }
    };

    return (
        <div className="relative w-full h-[400px] overflow-hidden">
            <div className="absolute inset-0 flex items-center">
                <div className="w-full flex" ref={listImages}>
                    {SliderArray.map(item => (
                        <div key={item.id} data-id={item.id} className={`w-full h-full flex-shrink-0 transition-transform transform ${currentIndex === item.id ? 'translate-x-0' : 'translate-x-full'}`}>
                            <img className="w-full h-full object-cover brightness-50" src={item.img} alt={`Slider ${item.id}`} />
                            <div className="w-full mt-20 flex justify-center items-center text-white font-bold text-4xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                                <h2>{item.title}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <button className="absolute left-0 top-0 bottom-0 flex items-center justify-center w-12 h-full bg-black bg-opacity-25 text-white text-2xl" onClick={() => scrollImage('previous')}>
                &larr;
            </button>
            <button className="absolute right-0 top-0 bottom-0 flex items-center justify-center w-12 h-full bg-black bg-opacity-25 text-white text-2xl" onClick={() => scrollImage('next')}>
                &rarr;
            </button>
        </div>
    );
}

export default Carrousell;






