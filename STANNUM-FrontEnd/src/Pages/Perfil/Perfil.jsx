import { useState, useEffect } from 'react';
import './perfil.css'
import EscudoPerfil from '../../assets/escudoPerfil2.png'

function Perfil() {

    const [Dominio, setDominio] = useState(0);

    const points = 30; 

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
                    <div className='nombreCardFIFA'>SIMÓN POLICHE</div>
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
                            <div className='NombreSeccionDatosJugador'>Nombre</div>
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
            <div className='cajaSeleccionarCardDominio d-flex justify-content-evenly'>



                <div className={` ${ Dominio !== 1 ? 'cardDominioPerfil' : 'cardDominioPerfilPresionada'} d-flex flex-column text-center`} onClick={() => setDominio(1)}>
                    <div className={` ${ Dominio !== 1 ? 'tituloCardDominioPerfil' : 'tituloCardDominioPerfilPresionada' }`}>DOMINIO 1</div>
                    <div className={` ${ Dominio !== 1 ?'subtituloCardDominioPerfil' : 'subtituloCardDominioPerfilPresionada' }`}>DIRECTIVO</div>
                    <div className="progress">
                        <div className={`progress-bar ${ Dominio !== 1 ?'progress-bar1' : ' progress-barPresionada'}`} style={{ width: `${points}%` }} role="progressbar" aria-label="Basic example" aria-valuenow={points} aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className={`${ Dominio !== 1 ?'numeroCardDominioPerfil' : 'numeroCardDominioPerfilPresionada'}`}>{points}</div>
                    <div className={`${ Dominio !== 1 ? 'textoPuntosCardDominioPerfil' : 'textoPuntosCardDominioPerfilPresionada'}`}>PUNTOS</div>
                </div>


                <div className='cardDominioPerfil d-flex flex-column text-center'>
                    <div className='tituloCardDominioPerfil'>DOMINIO 2</div>
                    <div className='subtituloCardDominioPerfil'>TIEMPO</div>
                    <div className="progress">
                        <div className="progress-bar progress-bar2" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className='proximamenteCardDominioPerfil proximamenteCardDominioPerfil2'>PROXIMA<span>MENTE</span></div>
                    <div className='mesProximamenteCardDominioPerfil mesProximamenteCardDominioPerfil2'>MARZO</div>
                </div>
                <div className='cardDominioPerfil d-flex flex-column text-center'>
                    <div className='tituloCardDominioPerfil'>DOMINIO 3</div>
                    <div className='subtituloCardDominioPerfil'>COMUNICACION</div>
                    <div className="progress">
                        <div className="progress-bar progress-bar3" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className='proximamenteCardDominioPerfil proximamenteCardDominioPerfil3'>PROXIMA<span>MENTE</span></div>
                    <div className='mesProximamenteCardDominioPerfil mesProximamenteCardDominioPerfil3'>MARZO</div>
                </div>
                <div className='cardDominioPerfil d-flex flex-column text-center'>
                    <div className='tituloCardDominioPerfil'>DOMINIO 4</div>
                    <div className='subtituloCardDominioPerfil'>DELEGACION</div>
                    <div className="progress">
                        <div className="progress-bar progress-bar4" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className='proximamenteCardDominioPerfil proximamenteCardDominioPerfil4'>PROXIMA<span>MENTE</span></div>
                    <div className='mesProximamenteCardDominioPerfil mesProximamenteCardDominioPerfil4'>MARZO</div>
                </div>
                <div className='cardDominioPerfil d-flex flex-column text-center'>
                    <div className='tituloCardDominioPerfil'>DOMINIO 5</div>
                    <div className='subtituloCardDominioPerfil'>ORGANIZACION</div>
                    <div className="progress">
                        <div className="progress-bar progress-bar5" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className='proximamenteCardDominioPerfil proximamenteCardDominioPerfil5'>PROXIMA<span>MENTE</span></div>
                    <div className='mesProximamenteCardDominioPerfil mesProximamenteCardDominioPerfil5'>MARZO</div>
                </div>
                <div className='cardDominioPerfil d-flex flex-column text-center'>
                    <div className='tituloCardDominioPerfil'>DOMINIO 6</div>
                    <div className='subtituloCardDominioPerfil'>PLANIFICACION</div>
                    <div className="progress">
                        <div className="progress-bar progress-bar6" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className='proximamenteCardDominioPerfil proximamenteCardDominioPerfil6'>PROXIMA<span>MENTE</span></div>
                    <div className='mesProximamenteCardDominioPerfil mesProximamenteCardDominioPerfil6'>MARZO</div>
                </div>



            </div>
        </>
    )
}

export default Perfil