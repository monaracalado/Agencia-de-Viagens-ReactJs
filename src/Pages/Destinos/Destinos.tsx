import React, { useState } from 'react';
import InputMask from 'react-input-mask';

import { DestinoList } from './DestinoList';
import { All } from './style';

export default function Destino() {
    const [idHover, setIdHover] = useState<number | null>(null);
    return (
        <All id_hover={idHover}>
            <h1 className='title'>Escolha seu destino</h1>
            <form>
                <div className='infos_row'>
                <div>
                    <label>Nome Completo:</label>
                    <input
                        id="nome" 
                        name="nome"
                        placeholder="   Digite seu nome"
                        type="text"
                    />
                </div>
                <div>
                    <label>CPF:</label>
                    <InputMask 
                    id="cpf" 
                    name="cpf"
                    placeholder="   Digite seu CPF"
                    mask={'999.999.999-99'}/>
                </div>
                <div>
                    <label>Nascimento:</label>
                    <input 
                    id="nascimento" 
                    name="nascimento"
                    type={'date'}/>
                </div>
                </div>
                <div className='select_row'>
                <main>
                    <label>Origem:</label>
                    <select>
                    {DestinoList.map((destino) => {
                        return (
                        <option key={destino.id} value={destino.id}>
                            {destino.title}
                        </option>
                        );
                    })}
                    </select>
                </main>
                <main>
                    <label>Destino:</label>
                    <select>
                    {DestinoList.map((destino) => {
                        return (
                        <option key={destino.id} value={destino.id}>
                            {destino.title}
                        </option>
                        );
                    })}
                    </select>
                </main>
                </div>
                {/* <div className='time_row'>
                <div>
                    <label>Data de ida:</label>
                    <input className='' type={'date'}/>
                </div>
                <div>
                    <label>Data de volta:</label>
                    <input className='' type={'date'}/>
                </div>
                </div> */}
                <input type='submit'/>
            </form>
            <div className='image_row'>
              {DestinoList.map((destino) => {
                return (
                  <div  
                    onMouseEnter={() => setIdHover(destino.id)}
                    onMouseLeave={() => setIdHover(null)}
                    key={destino.id} 
                    className='image_container'
                  >
                    <img src={destino.image} alt={destino.title} />
                    <h1 className='destino'>{destino.title}</h1>
                  </div>
                );
              })}
            </div>
        </All>
    );
}