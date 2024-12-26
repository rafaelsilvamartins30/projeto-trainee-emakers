import React from 'react'
import "./TelaLogin.css"
import ImagemEntrada from '../../components/ImagemEntrada/ImagemEntrada'

const TelaLogin = () => {
  return (
    <div className='gerallogin'>
      <div className='esquerdalogin'>
        <div className='login'>
        <h1 className='titulologin'>Login</h1>
          <form className='logar'>
          <input className='inputlogin' type="email" placeholder="E-mail" required />
          <input className='inputlogin' type="password" placeholder="Senha" required />
          <button className='botaologin' type="submit"> </button>
          </form>
        </div>
        <div className="loginlinks">
          <a className='reflogin' href="/registrar">Criar Conta</a>
          <a className='reflogin' href="/recuperar">Esqueceu a Senha?</a>
        </div>
      </div>
      <div>
        <ImagemEntrada />
      </div>
    </div>
  )
}

export default TelaLogin
