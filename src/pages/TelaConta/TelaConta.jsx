import React from 'react'
import './TelaConta.css'
import Cabecalho from '../../components/Cabecalho/Cabecalho'

const TelaConta = () => {
  return (
    <div className='geralconta'>
      <div className='topconta'>
        <Cabecalho />
      </div>
      <div className='midconta'>
        <div className='direitaconta'>
          <div className='textdireita'>
            <h1 className='titletextconta'>Olá, nomeusuario</h1>
            <h1 className='textcontadireita'>Seu email é nomeusuario@email.com</h1>
            <h1 className='textcontadireita'>Seu CPF é 123.456.789-00</h1>
            <button>Alterar Dados</button>
            <button>Excluir Conta</button>
            <button>Tela do admin</button>
          </div>
        </div>
        <div className='esquerdaconta'>
          <div className='tituloconta'>
            <h1 className='titletextconta'>Jogos adquiridos:</h1>
          </div>
          <div className='gridconta'>
            <div className='grid1conta'> <img className='contaimgesquerda' src="/src/imgs/bikiniconta.png" alt="" /> <h1 className='contatextesquerda' >100/100</h1> </div>
            <div className='grid2conta'> <img className='contaimgesquerda' src="/src/imgs/marsconta.png" alt="" /> <h1 className='contatextesquerda' >95/100</h1> </div>
            <div className='grid3conta'> <img className='contaimgesquerda' src="/src/imgs/godconta.png" alt="" /> <h1 className='contatextesquerda' >75/100</h1> </div>
            <div className='grid4conta'> <img className='contaimgesquerda' src="/src/imgs/stranconta.png" alt="" /> <h1 className='contatextesquerda'>Adicionar Avaliação</h1> </div>
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