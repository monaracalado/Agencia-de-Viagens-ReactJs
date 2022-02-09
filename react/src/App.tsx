import { useState } from 'react'

// importação dos pacotes necessários
import { useEffect } from "react";
import axios from "axios";

import { Routes, Route } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Contato from './Pages/Contato/Contato'
import Destinos from './Pages/Destinos/Destinos'

import Home from './Pages/Home/Home'
import Promocoes from './Pages/Promocoes/Promocoes'
import { GlobalStyle } from './Styles/GlobalStyles'

// configuração da url de comunicação com o backend (aqui você irá usar aquela url copiada)
const api = axios.create({
  baseURL: `http://localhost:8080/java-crud/`,
  headers: {
    "Content-type": "application/json",
  },
});


function App() {

  // aqui usamos um Effect que tem a função de executar o seu conteúdo na inicialização do App
  useEffect(() => {
    // aqui definimos a função que irá chamar a requisição na url que configuramos,
    // adicionando o trecho '/MeuServlet' na url
    // com isso, nossa requisição cairá no nosso Servlet
    const chamarRequisicao = async () => {
      const resposta = await api.get(`/MeuServlet`);
      console.log(resposta.data);
    };

    // aqui chamamos a função que acabamos de definir
    chamarRequisicao();
  }, []);

  return (
    <div className="App" style={{ minHeight: '100vh' }}>
      <Header />
      <div
        style={{
          display: 'grid',
          placeItems: 'center',
          paddingTop: '60px'
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/promocoes" element={<Promocoes />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/destino" element={<Destinos />} />
        </Routes>
      </div>
      <Footer />
      <GlobalStyle />
    </div>
  )
}

export default App
