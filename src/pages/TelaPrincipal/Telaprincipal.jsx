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

  const settings = {
    dots: true, // Mostra os indicadores
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, // Setas para navegação
    nextArrow: <SampleNextArrowCarrossel/>,
    prevArrow: <SamplePrevArrowCarrossel/>,
  };
  
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
        <div  className='carrosselcima'>
          <div className="carrossel-container">
            <Slider {...settings}>
              <div className="slide">
                <div className="grid-container">
                  <div className="small-item1">
                    <img src="src/imgs/horizoncarroselgrande.png" alt="" />
                    <div className="info">
                      <span>-15%</span>
                      <span>R$ 169,90</span>
                    </div>
                  </div>
                  <div className="small-item2">
                    <img src="src/imgs/dayscarroselgrande.png" alt="" />
                    <div className="info">
                      <span>-25%</span>
                      <span>R$ 149,99</span>
                    </div>
                  </div>
                  <div className="big-item">
                    <img src="src/imgs/godcarroselgrande.png" alt="" />
                    <div className="info">
                      <span>-40%</span>
                      <span>R$ 119,95</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="grid-container">
                  <div className="small-item">
                    <img src="scr/imgs/horizoncarroselgrande.png" alt="Jogo 1" />
                    <div className="info">
                      <span>-15%</span>
                      <span>R$ 169,90</span>
                    </div>
                  </div>
                  <div className="small-item">
                    <img src="scr/imgs/dayscarroselgrande.png" alt="Jogo 2" />
                    <div className="info">
                      <span>-25%</span>
                      <span>R$ 149,99</span>
                    </div>
                  </div>
                  <div className="big-item">
                    <img src="scr/imgs/godcarroselgrande.png" alt="Jogo Grande" />
                    <div className="info">
                      <span>-40%</span>
                      <span>R$ 119,95</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="grid-container">
                  <div className="small-item">
                    <img src="scr/imgs/horizoncarroselgrande.png" alt="Jogo 1" />
                    <div className="info">
                      <span>-15%</span>
                      <span>R$ 169,90</span>
                    </div>
                  </div>
                  <div className="small-item">
                    <img src="scr/imgs/dayscarroselgrande.png" alt="Jogo 2" />
                    <div className="info">
                      <span>-25%</span>
                      <span>R$ 149,99</span>
                    </div>
                  </div>
                  <div className="big-item">
                    <img src="scr/imgs/godcarroselgrande.png" alt="Jogo Grande" />
                    <div className="info">
                      <span>-40%</span>
                      <span>R$ 119,95</span>
                    </div>
                  </div>
                </div>
              </div>
              
            </Slider>
          </div>
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
          <div className='carrinhoiconprincipal'>
          <button className='carrinhoprincipal' type="submit"> 
                <img className='imgcarrinhoprincipal' src="/src/imgs/carrinho.png" alt="" />
              </button>
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