import React from 'react'
import './rodape.css'

const rodape = () => {
  return (
    <div className = 'geralrodape'>
      <div className='rodapecima'>
        <div className = 'rodapeescrito'>
          <div className='imgebordao'>
            <img className = 'imgrodape' src="src/imgs/LogoCab.png" alt="" />
            <div className = 'startrodape'>
              <h1 className='titlestartrodape'>Game Dame</h1>
              <h1 className='textstartrodape'>Seu próximo jogo <br /> começa aqui</h1>
            </div>
          </div>
          <div className = 'midrodape'>
            <h1 className='textmidrodape'>Explorar</h1>
            <a className='refrodape' href="/home">Início</a>
            <a className='refrodape' href="/populares">Populares</a>
            <a className='refrodape' href="/conta">Conta</a>
          </div>
          <div className = 'endrodape'>
            <h1 className='titleendrodape'>Contato</h1>
            <div className='iconrodape'>
              <img className='iconsrod' src="src/imgs/Mail.png" alt="" />
              <h1 className='textendrodape'>gamegamedame@teste.com</h1>
            </div>
            <div className='iconrodape'>
              <img className='iconsrod' src="src/imgs/Phone.png" alt="" />
              <h1 className='textendrodape'> (99) 9 9999-9999</h1>
            </div>
            <div className='iconrodape'>
              <img className='iconsrod' src="src/imgs/Location.png" alt="" />
            <h1 className='textendrodape'> Shopping X, Lavras - MG </h1>
            </div>
          </div>
        </div>
      </div>
      <div className='infrodape'>
        <h1 className='textinfrodape'>2024 Game Dame | By Emakers Júnior</h1>
      </div>
    </div>
  )
}

export default rodape