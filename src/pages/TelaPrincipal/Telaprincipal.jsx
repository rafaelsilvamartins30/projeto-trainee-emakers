import React from 'react' 
import "./Telaprincipal.css"
import Cabecalho from '../../components/Cabecalho/Cabecalho'
import Rodape from '../../components/rodape/rodape' 
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";

const SampleNextArrowCarrossel = ({ onClick }) => (
  <button onClick={onClick} className='iconeAvancarSlideCarrossel'>
    <SlArrowRight />
  </button>
);

const SamplePrevArrowCarrossel = ({ onClick }) => (
  <button onClick={onClick} className='iconeVoltarSlideCarrossel'>
    < SlArrowLeft />
  </button>
);

const SampleNextArrowCarrosselLancamento = ({ onClick }) => (
  <button onClick={onClick} className='iconeAvancarSlideCarrosselLancamento'>
    <SlArrowRight />
  </button>
);

const SamplePrevArrowCarrosselLancamento = ({ onClick }) => (
  <button onClick={onClick} className='iconeVoltarSlideCarrosselLancamento'>
    < SlArrowLeft />
  </button>
);

const Telaprincipal = () => {
  
  const settingsLancamentos = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: true,
      nextArrow: <SampleNextArrowCarrosselLancamento/>,
      prevArrow: <SamplePrevArrowCarrosselLancamento/>,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
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
          <div className='carrossellancamentos'>
            <Slider className='sliderlancamentos' {...settingsLancamentos}>
                <div className="itemlancamento">
                  <div className='infolancamento'>
                    <h1 className='precolancamento'>R$ 299,00</h1>
                  </div>
                  <img className='imglancamento' src="src/imgs/bikini.png" alt="" />
                </div>
                <div className="itemlancamento">
                  <div className='infolancamento'>
                    <h1 className='precolancamento'>R$ 299,00</h1>
                  </div>
                  <img className='imglancamento' src="src/imgs/deliver.png" alt="" />
                </div>
                <div className="itemlancamento">
                  <div className='infolancamento'>
                    <h1 className='precolancamento'>R$ 299,00</h1>
                  </div>
                  <img className='imglancamento' src="src/imgs/onepiece.png" alt="" />
                </div>
                <div className="itemlancamento">
                  <div className='infolancamento'>
                    <h1 className='precolancamento'>R$ 299,00</h1>
                  </div>
                  <img className='imglancamento' src="src/imgs/deathstranding.png" alt="" />
                </div>
                <div className="itemlancamento">
                  <div className='infolancamento'>
                    <h1 className='precolancamento'>R$ 299,00</h1>
                  </div>
                  <img className='imglancamento' src="src/imgs/parish.png" alt="" />
                </div>
            </Slider>
          </div>
        </div>
      </div>

      <div className='homerodape'>
        <Rodape/>
      </div>

    </div>
  )
}

export default Telaprincipal