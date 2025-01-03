import React from 'react'
import './TelaPopulares.css'
import Cabecalho from '../../components/Cabecalho/Cabecalho'
import Rodape from '../../components/rodape/rodape'
import '@fortawesome/fontawesome-free/css/all.min.css';


const TelaPopulares = () => {
  return (
    <div className='popularesgeral'>
      <div className='toppopulares'>
        <Cabecalho />
      </div>
      <div className='titulogeralpop'>
        <h1 className='titlepopulares'>Populares</h1>
      </div>
      <div className='midpopulares'>
        <div className='firstmidpop'>
          <div className='imagempopulares'>
            <div className='iconimgpop'>
              <h1 className='icontextpop'>1º</h1>
            </div>
            <img className='imgpopulares' src="/src/imgs/godpop.png" alt="" />
          </div>
          <div className='textpopulares'>
            <h1 className='titletextpopulares'>God of War</h1>
            <p className='ppopulares'>Kratos é pai novamente. Como mentor e protetor de Atreus, um filho determinado a ganhar seu respeito, ele é forçado a encarar e controlar a fúria que há muito tempo o define enquanto viaja por um mundo ameaçador com o seu filho. Com a vingança contra os deuses do Olimpo no passado, Kratos agora vive no reino das divindades e monstros nórdicos. É nesse mundo duro e impiedoso que ele deve lutar para sobreviver enquanto ensina seu filho a fazer o mesmo e tenta impedi-lo de repetir os erros cruéis do Fantasma de Esparta.</p>
          </div>    
        </div>
        <div className='secondmidpop'>
          <div className='imagempopulares'>
            <div className='iconimgpop'>
              <h1 className='icontextpop'>2º</h1>
            </div>
            <img className='imgpopulares' src="/src/imgs/horipop.png" alt="" />
          </div>
          <div className='textpopulares'>
            <h1 className='titletextpopulares'>Horizon Zero Dawn</h1>
            <p className='ppopulares' >Em um futuro distante, dominado por máquinas colossais que vagam pela Terra, a natureza retomou as ruínas da nossa civilização esquecida e pequenos grupos de sobreviventes se dividem em diferentes tribos. Empunhe o arco e a lança de Aloy, uma jovem caçadora de máquinas exilada da sua tribo, que parte em busca da verdade sobre suas origens e o misterioso mundo que ela precisa salvar.  </p>
          </div>
        </div>
        <div className='thirdmidpop'>
          <div className='imagempopulares'>
            <div className='iconimgpop'>
              <h1 className='icontextpop'>3º</h1>
            </div>
            <img className='imgpopulares' src="/src/imgs/dayspop.png" alt="" />
          </div>
          <div className='textpopulares'>
            <h1 className='titletextpopulares'>Days Gone</h1>
            <p className='ppopulares'>Days Gone é um jogo de ação e aventura em mundo aberto que se passa em um ambiente adverso dois anos após uma pandemia mundial devastadora. Entre na pele do antigo motociclista fora da lei Deacon St. John, um caçador de recompensas que tenta achar uma razão para viver numa terra cercada pela morte. Vasculhe assentamentos abandonados em busca de equipamentos para produzir itens e armas valiosos ou arrisque-se com outros sobreviventes que tentam ganhar a vida honestamente... ou de formas mais violentas.</p>
          </div>
        </div>
        <div className='ajustarcarrinho'>
            <div className='carrinhoiconpop'>
              <button className='carrinhopop' type="submit"> 
                <img className='imgcarrinhopop' src="/src/imgs/carrinho.png" alt="" />
              </button>
            </div>
          </div>
      </div>  
      <div className='endpopulares'>
        <Rodape />
      </div>
    </div>
  )
}

export default TelaPopulares
