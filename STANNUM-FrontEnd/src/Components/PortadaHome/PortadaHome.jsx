import React from 'react'
import './portadaHome.css'
import mirarVideosIcon from '../../assets/mirarVideosIcon.png'

function PortadaHome() {
  return (
    <>
        <div className='contenedorPortadaHome'>
          <div className='contenidoPortadaHome'>
            <h2 className='bienvenidoPortadaHome'>Bienvenido a <span>STANNUM GAME</span></h2>
            <p className='parrafoPortadaHome'>Mira los videos introductorios y aprende a navegar en nuestra plataforma.</p>
            <div className='contenedorBotonesPortada'>
              <button type='button' className='botonMirarVideosPortada'><img src={mirarVideosIcon} alt="Mirar videos STANNUM GAME" /> Mirar videos</button>
              <button type='button' className='botonQuieroEntrenarPortada'>¡Quiero entrenar!</button>
            </div>
          </div>
        </div>
    </>
  )
}

export default PortadaHome