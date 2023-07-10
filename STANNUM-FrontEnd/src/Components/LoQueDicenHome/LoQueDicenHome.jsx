import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './loQueDicenHome.css'
import logoPrueba from '../../assets/logoPrueba.png'
import fotoPrueba from '../../assets/fotoPrueba.jpg'
import { faHomeLgAlt } from '@fortawesome/free-solid-svg-icons';

function LoQueDicenHome() {

  const responsiveCarousel = {
    superLargeDesktop: {
      breakpoint: { max: 10000, min: 1200 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 1200, min: 992 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 992, min: 576 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 576, min: 0 },
      items: 1
    }
  };

  return (
    <>
        <div className='contenedorLoQueDicenHome'>        
            <h2>Lo que dicen nuestros entrenados</h2>
            <p className='parrafoLoQueDicenHome'>Nuestros entrenados son nuestra prioridad.<span>Esto es lo que ellos dicen:</span></p>
            <Carousel infinite autoPlay pauseOnHover centerMode showDots={true} focusOnSelect arrows={false} containerClass='carouselLoQueDicenHome' responsive={responsiveCarousel}>
              <div className='cardLoQueDicen'>
                <img src={logoPrueba} alt="Lo que dicen de STANNUM Game" className='iconoLoQueDicenHome' />
                <img src={fotoPrueba} alt="Lo que dicen de STANNUM Game" className='fotoLoQueDicenHome' />
                <p className='textoLoQueDicenHome'>"La verdad que sin STANNUM y Martin yo no podría haber ganado el mundial, es mi mayor logro. Gracias STANNUM, y <b>que viva el fulbo</b>"</p>
                <div className='nombreLoQueDicenHome'>
                  <div className='guionCardLoQueDicenHome'></div><span>Lionel Messi, GOAT</span>
                </div>
              </div>
              <div className='cardLoQueDicen cardLoQueDicenAbajo'>
                <img src={logoPrueba} alt="Lo que dicen de STANNUM Game" className='iconoLoQueDicenHome' />
                <img src={fotoPrueba} alt="Lo que dicen de STANNUM Game" className='fotoLoQueDicenHome' />
                <p className='textoLoQueDicenHome'>"La verdad que sin STANNUM y Martin yo no podría haber ganado el mundial, es mi mayor logro. Gracias STANNUM, y <b>que viva el fulbo</b>"</p>
                <div className='nombreLoQueDicenHome'>
                  <div className='guionCardLoQueDicenHome'></div><span>Lionel Messi, GOAT</span>
                </div>
              </div>
              <div className='cardLoQueDicen'>
                <img src={logoPrueba} alt="Lo que dicen de STANNUM Game" className='iconoLoQueDicenHome' />
                <img src={fotoPrueba} alt="Lo que dicen de STANNUM Game" className='fotoLoQueDicenHome' />
                <p className='textoLoQueDicenHome'>"La verdad que sin STANNUM y Martin yo no podría haber ganado el mundial, es mi mayor logro. Gracias STANNUM, y <b>que viva el fulbo</b>"</p>
                <div className='nombreLoQueDicenHome'>
                  <div className='guionCardLoQueDicenHome'></div><span>Lionel Messi, GOAT</span>
                </div>
              </div>
              <div className='cardLoQueDicen cardLoQueDicenAbajo'>
                <img src={logoPrueba} alt="Lo que dicen de STANNUM Game" className='iconoLoQueDicenHome' />
                <img src={fotoPrueba} alt="Lo que dicen de STANNUM Game" className='fotoLoQueDicenHome' />
                <p className='textoLoQueDicenHome'>"La verdad que sin STANNUM y Martin yo no podría haber ganado el mundial, es mi mayor logro. Gracias STANNUM, y <b>que viva el fulbo</b>"</p>
                <div className='nombreLoQueDicenHome'>
                  <div className='guionCardLoQueDicenHome'></div><span>Lionel Messi, GOAT</span>
                </div>
              </div>
              <div className='cardLoQueDicen'>
                <img src={logoPrueba} alt="Lo que dicen de STANNUM Game" className='iconoLoQueDicenHome' />
                <img src={fotoPrueba} alt="Lo que dicen de STANNUM Game" className='fotoLoQueDicenHome' />
                <p className='textoLoQueDicenHome'>"La verdad que sin STANNUM y Martin yo no podría haber ganado el mundial, es mi mayor logro. Gracias STANNUM, y <b>que viva el fulbo</b>"</p>
                <div className='nombreLoQueDicenHome'>
                  <div className='guionCardLoQueDicenHome'></div><span>Lionel Messi, GOAT</span>
                </div>
              </div>
              <div className='cardLoQueDicen cardLoQueDicenAbajo'>
                <img src={logoPrueba} alt="Lo que dicen de STANNUM Game" className='iconoLoQueDicenHome' />
                <img src={fotoPrueba} alt="Lo que dicen de STANNUM Game" className='fotoLoQueDicenHome' />
                <p className='textoLoQueDicenHome'>"La verdad que sin STANNUM y Martin yo no podría haber ganado el mundial, es mi mayor logro. Gracias STANNUM, y <b>que viva el fulbo</b>"</p>
                <div className='nombreLoQueDicenHome'>
                  <div className='guionCardLoQueDicenHome'></div><span>Lionel Messi, GOAT</span>
                </div>
              </div>
              <div className='cardLoQueDicen'>
                <img src={logoPrueba} alt="Lo que dicen de STANNUM Game" className='iconoLoQueDicenHome' />
                <img src={fotoPrueba} alt="Lo que dicen de STANNUM Game" className='fotoLoQueDicenHome' />
                <p className='textoLoQueDicenHome'>"La verdad que sin STANNUM y Martin yo no podría haber ganado el mundial, es mi mayor logro. Gracias STANNUM, y <b>que viva el fulbo</b>"</p>
                <div className='nombreLoQueDicenHome'>
                  <div className='guionCardLoQueDicenHome'></div><span>Lionel Messi, GOAT</span>
                </div>
              </div>
              <div className='cardLoQueDicen cardLoQueDicenAbajo'>
                <img src={logoPrueba} alt="Lo que dicen de STANNUM Game" className='iconoLoQueDicenHome' />
                <img src={fotoPrueba} alt="Lo que dicen de STANNUM Game" className='fotoLoQueDicenHome' />
                <p className='textoLoQueDicenHome'>"La verdad que sin STANNUM y Martin yo no podría haber ganado el mundial, es mi mayor logro. Gracias STANNUM, y <b>que viva el fulbo</b>"</p>
                <div className='nombreLoQueDicenHome'>
                  <div className='guionCardLoQueDicenHome'></div><span>Lionel Messi, GOAT</span>
                </div>
              </div>
              <div className='cardLoQueDicen'>
                <img src={logoPrueba} alt="Lo que dicen de STANNUM Game" className='iconoLoQueDicenHome' />
                <img src={fotoPrueba} alt="Lo que dicen de STANNUM Game" className='fotoLoQueDicenHome' />
                <p className='textoLoQueDicenHome'>"La verdad que sin STANNUM y Martin yo no podría haber ganado el mundial, es mi mayor logro. Gracias STANNUM, y <b>que viva el fulbo</b>"</p>
                <div className='nombreLoQueDicenHome'>
                  <div className='guionCardLoQueDicenHome'></div><span>Lionel Messi, GOAT</span>
                </div>
              </div>
              <div className='cardLoQueDicen cardLoQueDicenAbajo'>
                <img src={logoPrueba} alt="Lo que dicen de STANNUM Game" className='iconoLoQueDicenHome' />
                <img src={fotoPrueba} alt="Lo que dicen de STANNUM Game" className='fotoLoQueDicenHome' />
                <p className='textoLoQueDicenHome'>"La verdad que sin STANNUM y Martin yo no podría haber ganado el mundial, es mi mayor logro. Gracias STANNUM, y <b>que viva el fulbo</b>"</p>
                <div className='nombreLoQueDicenHome'>
                  <div className='guionCardLoQueDicenHome'></div><span>Lionel Messi, GOAT</span>
                </div>
              </div>
            </Carousel>
        </div>
    </>
  )
}

export default LoQueDicenHome