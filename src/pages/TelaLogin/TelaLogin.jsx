import React from 'react'
import "./TelaLogin.css"
import ImagemEntrada from '../../components/ImagemEntrada/ImagemEntrada'

const TelaLogin = () => {
  return (
    <div className='geral'>
      <div className='esquerda'>
        <h1>Login</h1>
        <form className='logar'>
          <input type="email" placeholder="E-mail" required />
          <input type="password" placeholder="Senha" required />
          <button type="submit">→</button>
        </form>
        <div className="login-links">
          <a href="/registrar">Criar Conta</a>
          <a href="/recuperar">Esqueceu a Senha?</a>
        </div>
      </div>
      <div>
        <ImagemEntrada />
      </div>
    </div>
  )
}

export default TelaLogin
