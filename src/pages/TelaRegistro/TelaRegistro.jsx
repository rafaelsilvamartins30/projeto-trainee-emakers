import React from 'react'
import "./TelaRegistro.css"
import ImagemEntrada from '../../components/ImagemEntrada/ImagemEntrada'
import { Link } from 'react-router-dom';

function TelaRegistro () {

  return (
    <div className='geralreg'>
      <div className='esquerdareg'>
        <div className='reg'>
          <h1 className='tituloreg'>Registrar</h1>
          <form className='registrar'>
            <input className='inputrereg' type="text" name="username" placeholder="Nome de Usuário" required />
            <input className='inputrereg' type="email" name="email" placeholder="E-mail" required />
            <input className='inputrereg' type="text" name="cpf" placeholder="CPF" required />
            <input className='inputrereg' type="password" name="password" placeholder="Senha" required />
            <input className='inputrereg' type="password" name="confirmPassword" placeholder="Confirmar Senha" required />
            <Link to="/">
            <button className='botaoreg' type="submit"></button>
            </Link>
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