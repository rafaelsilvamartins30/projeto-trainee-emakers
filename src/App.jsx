import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import TelaRegistro from './pages/TelaRegistro/TelaRegistro'
import TelaLogin from './pages/TelaLogin/TelaLogin'
import TelaRecup from './pages/TelaRecup/TelaRecup'


const App = () => {

  return (
    <Router>
    <Routes>
      <Route path="/" element={<TelaLogin />} />
      <Route path="/registrar" element={<TelaRegistro />} />
      <Route path="/recuperar" element={<TelaRecup />} />
    </Routes>
    </Router>
  );
};
export default App
