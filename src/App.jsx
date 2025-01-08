import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import TelaRegistro from './pages/TelaRegistro/TelaRegistro'
import TelaLogin from './pages/TelaLogin/TelaLogin'
import TelaRecup from './pages/TelaRecup/TelaRecup'
import Telaprincipal from './pages/TelaPrincipal/Telaprincipal'
import TelaPopulares from './pages/TelaPopulares/TelaPopulares'
import TelaConta from './pages/TelaConta/TelaConta'

const App = () => {

  return (
    <Router>
    <Routes>
      <Route path="/" element={<TelaLogin />} />
      <Route path="/registrar" element={<TelaRegistro />} />
      <Route path="/recuperar" element={<TelaRecup />} />
      <Route path="/home" element={<Telaprincipal />} />
      <Route path="/populares" element={<TelaPopulares />} />
      <Route path="/conta" element={<TelaConta />} />
    </Routes>
    </Router>
  );
};
export default App