import React from 'react';
import InputMask from 'react-input-mask';
import { All } from './style';

export default function Contato() {
    return (
        <All>
            <h1>Fale conosco!</h1>
            <main>
                <form onSubmit={(e) => console.log(e)}>
                    <span>Envie seua menssagem</span>

                    <div className='name'>
                        <input
                            id="nome" name="nome"
                            placeholder="   Digite seu nome"
                            type="text"
                        />
                    </div>
                    <div className="email_telefone">
                        <input
                            id="email"
                            name="email"
                            placeholder="Digite seu email"
                            type="text"
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                        />

                        <InputMask
                            id="telefone"
                            name="telefone"
                            placeholder="Digite seu telefone"
                            mask="(99) 99999-9999"
                        />
                    </div>

                    <textarea
                        name="mensagem"
                        id="mensagem"
                        placeholder=" Informe o motivo do seu contato"
                    ></textarea>

                    <div className="bnt_enviar">
                        <button
                            id="enviar"
                            name="enviar"
                            type="submit"
                        >Enviar</button>
                    </div>
                </form>
                <img src="https://github.com/monaracalado/Agencia_de_Viagens_Recode/blob/master/img/contato.jpg?raw=true" alt="" />
            </main>
        </All>
    );
}
