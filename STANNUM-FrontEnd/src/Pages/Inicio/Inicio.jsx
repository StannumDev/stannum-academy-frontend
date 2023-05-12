import React from 'react'
import './Inicio.css'

function Inicio() {

  return (
    <>
      <div className='d-flex flex-column align-items-center'>
        <div className='text-center mt-5'><h1 className='tituloBienvenido'>¡Bienvenido a</h1></div>
        <div className='text-center'><h1 className='tituloBienvenidoVerde'>Stannum Academy!</h1></div>
        <div className='parrafoBienvenidaCentro text-center'><p>Este es el <b>centro de alto rendimiento</b> en donde podrás adquirir los conocimientos y las habilidades necesarias para llevar a tu emprendimiento al siguiente nivel.</p></div>
        <div className='text-center mt-4'><h2 className='tusPrimerosPasos'>Tus primeros pasos</h2></div>
        <div className='parrafoPrimerosPasos text-center'><p>Para poder comenzar tu camino dentro de Stannum Academy es necesario que completes los siguientes Tests de Dominio, ¡la información obtenida de ellos nos permitirá construir tu plantilla de jugador!.</p></div>
      </div>
      <div className='contenedorCardsTest'>
        <div className='text-center seleccioneTestTitulo'>Seleccione el Test que<br/>desea responder</div>
        <div className='d-flex flex-column align-items-center flex-wrap cajaCardsTest'>
          <div className='d-flex justify-content-evenly flexCardsTests'>
            <div className='cardTest'>
              <div className='tituloDominio tituloDominio1 text-center'>DOMINIO 1</div>
              <div className='subtituloDominio tituloDominio1 text-center'>DIRECTIVO</div>
              <hr className='hrDominio'/>
              <a href='/Test/Dominio/Directivo'>
                <button className='botonDominio botonDominio1'>Hacer el test</button>
              </a>
            </div>
            <div className='cardTest'>
              <div className='tituloDominio tituloDominio2 text-center'>DOMINIO 2</div>
              <div className='subtituloDominio tituloDominio2 text-center'>TIEMPO</div>
              <hr className='hrDominio'/>
              <button className='botonDominio botonDominio2' disabled={true}>Próximamente</button>
            </div>
            <div className='cardTest'>
              <div className='tituloDominio tituloDominio3 text-center'>DOMINIO 3</div>
              <div className='subtituloDominio tituloDominio3 text-center'>COMUNICACION</div>
              <hr className='hrDominio'/>
              <button className='botonDominio botonDominio3' disabled={true}>Próximamente</button>
            </div>
          </div>
          <div className='d-flex justify-content-evenly flexCardsTests'>
            <div className='cardTest'>
              <div className='tituloDominio tituloDominio4 text-center'>DOMINIO 4</div>
              <div className='subtituloDominio tituloDominio4 text-center'>DELEGACION</div>
              <hr className='hrDominio'/>
              <button className='botonDominio botonDominio4' disabled={true}>Próximamente</button>
            </div>
            <div className='cardTest'>
              <div className='tituloDominio tituloDominio5 text-center'>DOMINIO 5</div>
              <div className='subtituloDominio tituloDominio5 text-center'>ORGANIZACION</div>
              <hr className='hrDominio'/>
              <button className='botonDominio botonDominio5' disabled={true}>Próximamente</button>
            </div>
            <div className='cardTest'>
              <div className='tituloDominio tituloDominio6 text-center'>DOMINIO 6</div>
              <div className='subtituloDominio tituloDominio6 text-center'>PLANIFICACION</div>
              <hr className='hrDominio'/>
              <button className='botonDominio botonDominio6' disabled={true}>Próximamente</button>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Inicio