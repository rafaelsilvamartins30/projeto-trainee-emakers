import React from 'react'
import "./TelaRegistro.css"
import ImagemEntrada from '../../components/ImagemEntrada/ImagemEntrada'

function TelaRegistro () {
  return (
    <div className='geralreg'>
      <div className='esquerdareg'>
        <div className='reg'>
          <h1 className='tituloreg'>Registrar</h1>
          <form className='registrar'>
            <input className='inputrereg' type="name" placeholder="Nome de Usuário" required />
            <input className='inputrereg' type="email" placeholder="E-mail" required />
            <input className='inputrereg' type="cpf" placeholder="CPF" required />
            <input className='inputrereg' type="senha" placeholder="Senha" required />
            <input className='inputrereg' type="senha" placeholder="Confirmar Senha" required />
            <button className='botaoreg' type="submit"> </button>
          </form>
        </div>
        <div className='reglinks'>
          <a className='refreg' href="/">Fazer Login</a>
        </div>
      </div>
      <div>
        <ImagemEntrada />
      </div>
    </div>
  );
}

export default TelaRegistro