import React from 'react'
import './listoParaComenzarHome.css'
import mirarVideosIcon from '../../assets/mirarVideosIcon.png'

function ListoParaComenzarHome() {
  return (
    <>
        <div className='contenedorListoParaComenzarHome'>        
            <h2>¿Estas listo para comenzar a entrenar?</h2>
            <p>Únete a un gran grupo de emprendedores que entrenan diariamente para alcanzar el alto rendimiento.</p>
            <div className='contenedorBotonesListoParaComenzar'>
              <button type='button' className='botonMirarVideosListoParaComenzar'><img src={mirarVideosIcon} alt="Mirar videos STANNUM GAME" /> Mirar videos</button>
              <button type='button' className='botonQuieroEntrenarListoParaComenzar'>¡Quiero entrenar!</button>
            </div>
        </div>
    </>
  )
}

export default ListoParaComenzarHome