import React from 'react'
import './TelaPopulares.css'
import Cabecalho from '../../components/Cabecalho/Cabecalho'
import Rodape from '../../components/rodape/rodape'

const TelaPopulares = () => {
  return (
    <div className='popularesgeral'>
      <div className='toppopulares'>
        <Cabecalho />
      </div>
      <div className='midpopulares'>
        <div></div>
        <div></div>
      </div>
      <div className='endpopulares'>
        <Rodape />
      </div>
    </div>
  )
}

export default TelaPopulares