import React from 'react'
import "./Cabecalho.css"
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Cabecalho = () => {
  return (
      <div className='cabecalhogeral'>
        <nav className="cabecalhonav">
            <Link to="/">
              <img className='imgcab' src="src/imgs/LogoCab.png" alt="" />
            </Link>
            <a className='refcab' href="#lancamentos">Lançamentos</a>
            <h1 className='refcab'>|</h1>
            <a className='refcab' href="/populares">Populares</a>
            <h1 className='refcab'>|</h1>
            <a className='refcab' href="#generos">Gêneros</a>
            <h1 className='refcab'>|</h1>
            <a className='refcab' href="#promocoes">Promoções</a>
            <h1 className='refcab'>|</h1>
            <a className='refcab' href="/conta">Conta</a>
            <input className='inputcab' type="text" placeholder="&#xf002;" />
        </nav>
      </div>
  )
}

export default Cabecalho