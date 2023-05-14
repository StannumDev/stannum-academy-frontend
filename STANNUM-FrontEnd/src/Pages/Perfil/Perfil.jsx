import React from 'react'
import './perfil.css'
import EscudoPerfil from '../../assets/escudoPerfil2.png'

function Perfil() {
  return (
    <>
        <div className='tituloPerfil'><h1>FICHA DEL ENTRENADO</h1></div>
        <div className='parrafoPerfil'><p>Teniendo en cuenta los resultados de los diferentes Test, generamos la siguiente plantilla con tu información. A medida que completes los Test, esta se irá completando.</p></div>
        <div className='row rowDatosDelJugador'>
            <div className='col-4 divFotoJugadorPerfil'>
                <img src={EscudoPerfil} alt="Perfil Stannum" />
                <div className='puntosCardFIFA d-flex flex-column align-items-center'>
                    <div className='puntosNumeroCardFIFA'>55</div>
                    <div className='puntosTextoCardFIFA'>TOTAL</div>
                </div>
                <div className='nombreCardFIFA'>Simón Poliche</div>
                <div className='row puntajesDominiosPerfilFIFA'>
                    <div className='col-6 d-flex flex-column'>
                        <div className='d-flex align-items-end'>
                            <div className='numeroPtsCardFIFA'>55</div>
                            <div className='dominioPtsCardFIFA'>DM1</div>
                        </div>
                        <div className='d-flex align-items-end'>
                            <div className='numeroPtsCardFIFA'>55</div>
                            <div className='dominioPtsCardFIFA'>DM2</div>
                        </div>
                        <div className='d-flex align-items-end'>
                            <div className='numeroPtsCardFIFA'>55</div>
                            <div className='dominioPtsCardFIFA'>DM3</div>
                        </div>
                    </div>
                    <div className='col-6 d-flex flex-column segundaColumnaEstadisticas'>
                        <div className='d-flex align-items-end'>
                            <div className='numeroPtsCardFIFA'>55</div>
                            <div className='dominioPtsCardFIFA'>DM4</div>
                        </div>
                        <div className='d-flex align-items-end'>
                            <div className='numeroPtsCardFIFA'>55</div>
                            <div className='dominioPtsCardFIFA'>DM5</div>
                        </div>
                        <div className='d-flex align-items-end'>
                            <div className='numeroPtsCardFIFA'>55</div>
                            <div className='dominioPtsCardFIFA'>DM6</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-8 divDatosDelJugadorInfo d-flex flex-column'>
                <div className='datosDelJugador'><h2>DATOS DEL JUGADOR</h2></div>
                <div className='mt-auto datosDelJugadorInformacion d-flex flex-wrap'>
                    <div className='datosJugadorSeccion datosJugadorSeccion1'>
                        <div className='NombreSeccionDatosJugador'>Nombre completo</div>
                        <div className='InfoSeccionDatosJugador'>Simón Poliche</div>
                    </div>
                    <div className='datosJugadorSeccion datosJugadorSeccion2'>
                        <div className='NombreSeccionDatosJugador'>Emprendimiento</div>
                        <div className='InfoSeccionDatosJugador'>Finca San Ramón</div>
                    </div>
                    <div className='datosJugadorSeccion datosJugadorSeccion3'>
                        <div className='NombreSeccionDatosJugador'>Territorio</div>
                        <div className='InfoSeccionDatosJugador'>Argetina - Tucumán</div>
                    </div>
                    <div className='datosJugadorSeccion datosJugadorSeccion4'>
                        <div className='NombreSeccionDatosJugador'>Edad</div>
                        <div className='InfoSeccionDatosJugador'>28 años</div>
                    </div>
                </div>
            </div>
        </div>
        <div className='cajaSeleccionarCardDominio d-flex'>
            <div className='cardDominioPerfil d-flex flex-column text-center'>
                <div className='tituloCardDominioPerfil'>DOMINIO 1</div>
                <div className='subtituloCardDominioPerfil'>DIRECTIVO</div>
                <div class="progress">
                    <div class="progress-bar" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className='numeroCardDominioPerfil'>55</div>
                <div className='textoPuntosCardDominioPerfil'>PUNTOS</div>
            </div>
        </div>
    </>
  )
}

export default Perfil