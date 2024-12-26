import React from 'react'
import "./TelaRecup.css"
import ImagemEntrada from '../../components/ImagemEntrada/ImagemEntrada'

const TelaRecup = () => {
  return (
    <div className='geralrecup'>
      <div className='esquerdarecup'>
        <div className='recup'>
          <h1 className='titulorecup'>Recuperar</h1>
          <h1 className='titulorecup2'>Conta</h1>
          <form className='recuperar'>
            <input className='inputrecup' type="email" placeholder="E-mail" required />
            <button className='botaorecup' type="submit"> </button>
          </form>
        </div>
        <div className='recuplinks'>
          <a className='refrecup' href="/registrar">Criar Conta</a>
          <a className='refrecup' href="/">Fazer Login</a>
        </div>
      </div>
      <div>
        <ImagemEntrada />
      </div>
    </div>
  )
}

export default TelaRecup