import React, { useEffect, useState } from 'react';
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

  const settingsMobile = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrowCarrossel />,
    prevArrow: <SamplePrevArrowCarrossel />,
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrowCarrossel />,
    prevArrow: <SamplePrevArrowCarrossel />,
  };

  const settingsLancamentos = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrowCarrosselLancamento />,
    prevArrow: <SamplePrevArrowCarrosselLancamento />,
    responsive: [
      {
        breakpoint: 1760,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1041,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 751,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className='homegeral'>

      <div className='homecabecalho'>
        <Cabecalho />
      </div>

      <div id='promocoes' className='midhome'>
        <div className='escondermobile'>
          <div className='carroselmobile'>
            <Slider {...settingsMobile}>
              <div className='slidemobile'>
                <img className='imgcarroselmobile' src="src/imgs/horipop.png" alt="" />
                <div className='posicaoslidemobile'>
                <div className="info"><h1 className='textinfo'>-25%</h1></div>
                <div className="info2"><h1 className='precolancamento'>R$ 299,00</h1></div>
                </div>
              </div>
              <div className='slidemobile'>
                <img className='imgcarroselmobile' src="src/imgs/dayspop.png" alt="" />
                <div className='posicaoslidemobile'>
                <div className="info"><h1 className='textinfo'>-15%</h1></div>
                <div className="info2"><h1 className='textinfo2'>R$ 149,99</h1></div>
                </div>
              </div>
              <div className='slidemobile'>
                <img className='imgcarroselmobile' src="src/imgs/godpop.png" alt="" />
                <div className='posicaoslidemobile'>
                <div className="info"><h1 className='textinfo'>-40%</h1></div>
                <div className="info2"><h1 className='textinfo2'>R$ 119,95</h1></div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
        <div className='escondergrande'>
          <div className='carroselgrande'>
            <Slider  {...settings}>
              <div className="grid-container">
                <div className="small-item">
                  <img className='imgcarroselgrande' src="src/imgs/horizoncarroselgrande.png" alt="" />
                  <div className="info">
                    <h1 className='textinfo'>-25%</h1>
                  </div>
                  <div className="info2">
                    <h1 className='textinfo2'>R$ 149,99</h1>
                  </div>
                </div>
                <div className="small-item">
                  <img className='imgcarroselgrande' src="src/imgs/dayscarroselgrande.png" alt="" />
                  <div className="info">
                    <h1 className='textinfo'>-15%</h1>
                  </div>
                  <div className="info2">
                    <h1 className='textinfo2'>R$ 169,99</h1>
                  </div>
                </div>
                <div className="big-item">
                  <img className='imgcarroselgrande' src="src/imgs/godcarroselgrande.png" alt="" />
                  <div className="infobig">
                    <h1 className='textinfo'>-40%</h1>
                  </div>
                  <div className="info2big">
                    <h1 className='textinfo2'>R$ 119,95</h1>
                  </div>
                </div>
              </div>
              <div className="grid-container">
                <div className="small-item">
                  <img className='imgcarroselgrande' src="src/imgs/horizoncarroselgrande.png" alt="" />
                  <div className="info">
                    <h1 className='textinfo'>-25%</h1>
                  </div>
                  <div className="info2">
                    <h1 className='textinfo2'>R$ 149,99</h1>
                  </div>
                </div>
                <div className="small-item">
                  <img className='imgcarroselgrande' src="src/imgs/dayscarroselgrande.png" alt="" />
                  <div className="info">
                    <h1 className='textinfo'>-15%</h1>
                  </div>
                  <div className="info2">
                    <h1 className='textinfo2'>R$ 169,99</h1>
                  </div>
                </div>
                <div className="big-item">
                  <img className='imgcarroselgrande' src="src/imgs/godcarroselgrande.png" alt="" />
                  <div className="infobig">
                    <h1 className='textinfo'>-40%</h1>
                  </div>
                  <div className="info2big">
                    <h1 className='textinfo2'>R$ 119,95</h1>
                  </div>
                </div>
              </div>
              <div className="grid-container">
                <div className="small-item">
                  <img className='imgcarroselgrande' src="src/imgs/horizoncarroselgrande.png" alt="" />
                  <div className="info">
                    <h1 className='textinfo'>-25%</h1>
                  </div>
                  <div className="info2">
                    <h1 className='textinfo2'>R$ 149,99</h1>
                  </div>
                </div>
                <div className="small-item">
                  <img className='imgcarroselgrande' src="src/imgs/dayscarroselgrande.png" alt="" />
                  <div className="info">
                    <h1 className='textinfo'>-15%</h1>
                  </div>
                  <div className="info2">
                    <h1 className='textinfo2'>R$ 169,99</h1>
                  </div>
                </div>
                <div className="big-item">
                  <img className='imgcarroselgrande' src="src/imgs/godcarroselgrande.png" alt="" />
                  <div className="infobig">
                    <h1 className='textinfo'>-40%</h1>
                  </div>
                  <div className="info2big">
                    <h1 className='textinfo2'>R$ 119,95</h1>
                  </div>
                </div>
              </div>
              <div className="grid-container">
                <div className="small-item">
                  <img className='imgcarroselgrande' src="src/imgs/horizoncarroselgrande.png" alt="" />
                  <div className="info">
                    <h1 className='textinfo'>-25%</h1>
                  </div>
                  <div className="info2">
                    <h1 className='textinfo2'>R$ 149,99</h1>
                  </div>
                </div>
                <div className="small-item">
                  <img className='imgcarroselgrande' src="src/imgs/dayscarroselgrande.png" alt="" />
                  <div className="info">
                    <h1 className='textinfo'>-15%</h1>
                  </div>
                  <div className="info2">
                    <h1 className='textinfo2'>R$ 169,99</h1>
                  </div>
                </div>
                <div className="big-item">
                  <img className='imgcarroselgrande' src="src/imgs/godcarroselgrande.png" alt="" />
                  <div className="infobig">
                    <h1 className='textinfo'>-40%</h1>
                  </div>
                  <div className="info2big">
                    <h1 className='textinfo2'>R$ 119,95</h1>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
        <div id='lancamentos' className='carroselbaixo'>
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
        <Rodape />
      </div>

    </div>
  )
}

export default Telaprincipal