import React, { useState } from 'react';
import "./Cabecalho.css";
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Cabecalho = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='cabecalhogeral'>
      <nav className="cabecalhonav">
        <Link to="/home">
          <img className='imgcab' src="src/imgs/LogoCab.png" alt="" />
        </Link>
        <button className={`menu-toggle ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          {menuOpen ? '✖' : '☰'}
        </button>
        <div className={`menu ${menuOpen ? 'active' : ''}`}>
          <a className='refcab' href="/home#lancamentos">Lançamentos</a>
          <span className="refcab-traco">|</span>
          <div className="refcab-reta"></div>
          <a className='refcab' href="/populares">Populares</a>
          <span className="refcab-traco">|</span>
          <div className="refcab-reta"></div>
          <a className='refcab' href="#generos">Gêneros</a>
          <span className="refcab-traco">|</span>
          <div className="refcab-reta"></div>
          <a className='refcab' href="/home#promocoes">Promoções</a>
          <span className="refcab-traco">|</span>
          <div className="refcab-reta"></div>
          <a className='refcab' href="/conta">Conta</a>
          <input className='inputcab' type="text" placeholder="&#xf002;" />
        </div>
      </nav>
    </div>
  );
};

export default Cabecalho;

