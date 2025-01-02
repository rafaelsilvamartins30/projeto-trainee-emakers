import React from 'react' 
import "./Telaprincipal.css"
import Cabecalho from '../../components/Cabecalho/Cabecalho'
import Rodape from '../../components/rodape/rodape'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Telaprincipal = () => {
  
  const settingsLancamentos = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
    } 

  return (
    <div className='homegeral'>

      <div className='homecabecalho'>
        <Cabecalho/>
      </div>

      <div className='midhome'>
        <div className='carroselcima'>

        </div>

        <div className='carroselbaixo'>
        <h1 className='titlelancamentos'>Lançamentos</h1>
          <Slider className='carrossellancamentos' {...settingsLancamentos}>
              <div className="itemlancamento1">
                <img className='imglancamento' src="src/imgs/bikini.png" alt="" />
                <div className='infolancamento'>
                  <p className='precolancamento'>R$ 299,00</p>
                </div>
              </div>
              <div className="itemlancamento2">
                <img className='imglancamento' src="src/imgs/deliver.png" alt="" />
                <div className='infolancamento'>
                  <p className='precolancamento'>R$ 299,00</p>
                </div>
              </div>
              <div className="itemlancamento3">
                <img className='imglancamento' src="src/imgs/onepiece.png" alt="" />
                <div className='infolancamento'>
                  <p className='precolancamento'>R$ 299,00</p>
                </div>
              </div>
              <div className="itemlancamento4">
                <img className='imglancamento' src="src/imgs/deathstranding.png" alt="" />
                <div className='infolancamento'>
                  <p className='precolancamento'>R$ 299,00</p>
                </div>
              </div>
              <div className="itemlancamento5">
                <img className='imglancamento' src="src/imgs/parish.png" alt="" />
                <div className='infolancamento'>
                  <p className='precolancamento'>R$ 299,00</p>
                </div>
              </div>
          </Slider>
        </div>
      </div>

      <div className='homerodape'>
        <Rodape/>
      </div>

    </div>
  )
}

export default Telaprincipal