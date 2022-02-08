import React from 'react';
import { list } from './PromocoesList';
import { All } from './style';

export default function Promocoes() {
    return(
        <All>
            <h1 className='title'>Veja nossas promoções</h1>
            <div>
                {list.map((item, index) => {
                    return (
                        <div className='card' key={index}>
                            <div className='img_box'>
                                <img src={item.img}/>
                            </div>
                            <div className='texts'>
                                <h1 className='text'>Promoção {item.title}</h1>
                                <h1 className='text'>Hotel {item.hotel}</h1>
                                <h1 className='text'>Pacote {item.pacote}</h1>
                                <h1 className='text'>Preço {item.preco}</h1>
                            </div> 
                            <button>Comprar</button>
                        </div>
                    )
                })}
            </div>
        </All>    
    );
}