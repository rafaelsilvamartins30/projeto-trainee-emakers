import React from 'react' 
import "./Telaprincipal.css"
import Cabecalho from '../../components/Cabecalho/Cabecalho'
import Rodape from '../../components/rodape/rodape'

const Telaprincipal = () => {
  return (
    <div className='homegeral'>

      <div className='homecabecalho'>
        <Cabecalho/>
      </div>

      <div className='midhome'>
        <div className='carroselcima'>

        </div>

        <div className='carroselbaixo'>
         
        </div>

      </div>

      <div className='homerodape'>
        <Rodape/>
      </div>

    </div>
  )
}

export default Telaprincipal