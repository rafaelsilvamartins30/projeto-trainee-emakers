import React from 'react'
import './TelaConta.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Cabecalho from '../../components/Cabecalho/Cabecalho'


const TelaConta = () => {
  return (
    <div className='geralconta'>
      <div className='topconta'>
        <Cabecalho />
      </div>
      <div className='midconta'>
        <div className='esquerdaconta'>
          <div className='textesquerda'>
            <h1 className='titletextcontaesquerda'>Olá, nome usuario</h1>
            <h1 className='textcontaesquerda'>Seu email é nomeusuario@email.com</h1>
            <h1 className='textcontaesquerda'>Seu CPF é 123.456.789-00</h1>
            <button className='buttoncontaesquerda'>
              <h1 className='textbutoncontaesquerda'>Alterar Dados</h1>
              <i className='fas fa-pencil-alt'></i>
            </button>
            <button className='buttoncontaesquerda'>
              <h1 className='textbutoncontaesquerda'>Excluir Conta</h1>
              <i className='fas fa-trash'></i>
            </button>
            <button className='buttoncontaesquerdaadm'><h1 className='textbutoncontaesquerda'>Tela do admin</h1></button>
          </div>
        </div>
        <div className='direitaconta'>
          <div className='titulocontadireita'>
            <h1 className='titletextcontadireita'>Jogos adquiridos:</h1>
          </div>
          <div className='gridconta'>
            <div className='grid1conta'> <img className='contaimgdireita' src="/src/imgs/bikiniconta.png" alt="" /> <h1 className='contatextdireita' >100/100</h1> </div>
            <div className='grid2conta'> <img className='contaimgdireita' src="/src/imgs/marsconta.png" alt="" /> <h1 className='contatextdireita' >95/100</h1> </div>
            <div className='grid3conta'> <img className='contaimgdireita' src="/src/imgs/godconta.png" alt="" /> <h1 className='contatextdireita' >75/100</h1> </div>
            <div className='grid4conta'> <img className='contaimgdireita' src="/src/imgs/stranconta.png" alt="" /> <h1 className='contatextdireita'>Adicionar Avaliação</h1> </div>
          </div>
          <div className='carrinhoiconconta'>
          <button className='carrinhoconta' type="submit"> 
                <img className='imgcarrinhoconta' src="/src/imgs/carrinho.png" alt="" />
              </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TelaConta