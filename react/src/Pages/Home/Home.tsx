import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { DestinoList } from './DestinoList';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { StyledHome } from './style';

export default function Home() {
    return (
        <StyledHome>
            <div className='texts'>
                <h1>Boas Vindas à nossa agencia de viagens!</h1>
                <p>Escolha seu destino aqui!</p>
            </div>
            <div className='carrousel'>
                <Carousel>
                    <div title={DestinoList[0].title}>
                        <img src={DestinoList[0].img} />
                        <p className="legend">{DestinoList[0].title}</p>
                    </div>
                    <div title={DestinoList[1].title}>
                        <img src={DestinoList[1].img} />
                        <p className="legend">{DestinoList[1].title}</p>
                    </div>
                    <div title={DestinoList[2].title}>
                        <img src={DestinoList[2].img} />
                        <p className="legend">{DestinoList[2].title}</p>
                    </div>
                    <div title={DestinoList[3].title}>
                        <img src={DestinoList[3].img} />
                        <p className="legend">{DestinoList[3].title}</p>
                    </div>
                </Carousel>
            </div>
        </StyledHome>
    );
}
