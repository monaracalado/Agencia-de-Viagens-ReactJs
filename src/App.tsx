import { useState } from 'react'

import { Routes, Route } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Contato from './Pages/Contato/Contato'
import Destinos from './Pages/Destinos/Destinos'

import Home from './Pages/Home/Home'
import Promocoes from './Pages/Promocoes/Promocoes'
import { GlobalStyle } from './Styles/GlobalStyles'

function App() {
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
