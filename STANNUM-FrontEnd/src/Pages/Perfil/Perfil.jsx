import { useState, useEffect } from 'react';
import './perfil.css'
import EscudoPerfil from '../../assets/escudoPerfil2.png'
import EscudoPerfil2 from '../../assets/escudoPerfil3.png'
import FotoDePerfil from '../../assets/Captura.jpg'
import Hexagono from '../../assets/HexagonoPerfil.png'

function Perfil() {

    const [Dominio, setDominio] = useState(0);

    const points = 50; 

    return (
        <>
            <div className='tituloPerfil'><h1>FICHA DEL ENTRENADO</h1></div>
            <div className='parrafoPerfil'><p>Teniendo en cuenta los resultados de los diferentes Test, generamos la siguiente plantilla con tu información. A medida que completes los Test, esta se irá completando.</p></div>
            <div className='row rowDatosDelJugador'>
                <div className='col-4 divFotoJugadorPerfil'>
                    <div className='contenedorImagen'>
                        <img src={FotoDePerfil} alt="Perfil Stannum" />
                    </div>
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
                    <div className="progress progressCard">
                        <div className={`progress-bar progress-barCard ${ Dominio !== 1 ?'progress-bar1' : ' progress-barPresionada'}`} style={{ width: `${points}%` }} role="progressbar" aria-label="Basic example" aria-valuenow={points} aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className={`${ Dominio !== 1 ?'numeroCardDominioPerfil' : 'numeroCardDominioPerfilPresionada'}`}>{points}</div>
                    <div className={`${ Dominio !== 1 ? 'textoPuntosCardDominioPerfil' : 'textoPuntosCardDominioPerfilPresionada'}`}>PUNTOS</div>
                </div>
                <div className='cardDominioPerfil d-flex flex-column text-center'>
                    <div className='tituloCardDominioPerfil'>DOMINIO 2</div>
                    <div className='subtituloCardDominioPerfil'>TIEMPO</div>
                    <div className="progress progressCard">
                        <div className="progress-bar progress-barCard progress-bar2" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className='proximamenteCardDominioPerfil proximamenteCardDominioPerfil2'>PROXIMA<span>MENTE</span></div>
                    <div className='mesProximamenteCardDominioPerfil mesProximamenteCardDominioPerfil2'>MARZO</div>
                </div>
                <div className='cardDominioPerfil d-flex flex-column text-center'>
                    <div className='tituloCardDominioPerfil'>DOMINIO 3</div>
                    <div className='subtituloCardDominioPerfil'>COMUNICACION</div>
                    <div className="progress progressCard">
                        <div className="progress-bar progress-barCard progress-bar3" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className='proximamenteCardDominioPerfil proximamenteCardDominioPerfil3'>PROXIMA<span>MENTE</span></div>
                    <div className='mesProximamenteCardDominioPerfil mesProximamenteCardDominioPerfil3'>MARZO</div>
                </div>
                <div className='cardDominioPerfil d-flex flex-column text-center'>
                    <div className='tituloCardDominioPerfil'>DOMINIO 4</div>
                    <div className='subtituloCardDominioPerfil'>DELEGACION</div>
                    <div className="progress progressCard">
                        <div className="progress-bar progress-barCard progress-bar4" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className='proximamenteCardDominioPerfil proximamenteCardDominioPerfil4'>PROXIMA<span>MENTE</span></div>
                    <div className='mesProximamenteCardDominioPerfil mesProximamenteCardDominioPerfil4'>MARZO</div>
                </div>
                <div className='cardDominioPerfil d-flex flex-column text-center'>
                    <div className='tituloCardDominioPerfil'>DOMINIO 5</div>
                    <div className='subtituloCardDominioPerfil'>ORGANIZACION</div>
                    <div className="progress progressCard">
                        <div className="progress-bar progress-barCard progress-bar5" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className='proximamenteCardDominioPerfil proximamenteCardDominioPerfil5'>PROXIMA<span>MENTE</span></div>
                    <div className='mesProximamenteCardDominioPerfil mesProximamenteCardDominioPerfil5'>MARZO</div>
                </div>
                <div className='cardDominioPerfil d-flex flex-column text-center'>
                    <div className='tituloCardDominioPerfil'>DOMINIO 6</div>
                    <div className='subtituloCardDominioPerfil'>PLANIFICACION</div>
                    <div className="progress progressCard">
                        <div className="progress-bar progress-barCard progress-bar6" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className='proximamenteCardDominioPerfil proximamenteCardDominioPerfil6'>PROXIMA<span>MENTE</span></div>
                    <div className='mesProximamenteCardDominioPerfil mesProximamenteCardDominioPerfil6'>MARZO</div>
                </div>
            </div>
            <div className='row cajaGrandeEstadisticasHexagono justify-content-between'>
                <div className='col-6 p-0 pe-3'>
                    <div className='CajaEstadisticasSecciones'>
                        <div className='tituloCajaEstadisticasSecciones'><h2>Resultados del test - Dominio 1</h2></div>
                        <div className='subtituloCajaEstadisticasSecciones'><h3>HABILIDADES DIRECTIVAS</h3></div>
                        <div className='d-flex flex-column estadisticasTablaSecciones'>
                            <div className='d-flex parteSuperiorSeccionesDirectivo'>
                                <div className='titulosSeccionesPuntosTablaDirectivo'><span>N°</span></div>
                                <div className='titulosSeccionesPuntosTablaDirectivo flex-fill ms-5'><span>CATEGORIA</span></div>
                                <div className='titulosSeccionesPuntosTablaDirectivo'><span>PTS</span></div>
                            </div>
                            <div className='d-flex categoriaSeccionesDirectivo'>
                                <div className='categoriaTextoSeccionesPuntosTablaDirectivo'><span>1</span></div>
                                <div className='categoriaTextoSeccionesPuntosTablaDirectivo flex-fill ms-5'><span>EMPRENDEDOR ESTRATÉGICO</span></div>
                                <div className='categoriaTextoSeccionesPuntosTablaDirectivo'><span>70</span></div>
                            </div>
                            <div className="progress progressEstadisticas">
                                <div className="progress-bar progress-barEstadisticas" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div className='d-flex categoriaSeccionesDirectivo'>
                                <div className='categoriaTextoSeccionesPuntosTablaDirectivo'><span>2</span></div>
                                <div className='categoriaTextoSeccionesPuntosTablaDirectivo flex-fill ms-5'><span>CONCEPTOS ESTRATEGICOS</span></div>
                                <div className='categoriaTextoSeccionesPuntosTablaDirectivo'><span>56</span></div>
                            </div>
                            <div className="progress progressEstadisticas">
                                <div className="progress-bar progress-barEstadisticas" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div className='d-flex categoriaSeccionesDirectivo'>
                                <div className='categoriaTextoSeccionesPuntosTablaDirectivo'><span>3</span></div>
                                <div className='categoriaTextoSeccionesPuntosTablaDirectivo flex-fill ms-5'><span>CONOCIMIENTO DE MERCADO</span></div>
                                <div className='categoriaTextoSeccionesPuntosTablaDirectivo'><span>5</span></div>
                            </div>
                            <div className="progress progressEstadisticas">
                                <div className="progress-bar progress-barEstadisticas" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div className='d-flex categoriaSeccionesDirectivo'>
                                <div className='categoriaTextoSeccionesPuntosTablaDirectivo'><span>4</span></div>
                                <div className='categoriaTextoSeccionesPuntosTablaDirectivo flex-fill ms-5'><span>CONOCIMIENTO EMPRENDEDOR</span></div>
                                <div className='categoriaTextoSeccionesPuntosTablaDirectivo'><span>29</span></div>
                            </div>
                            <div className="progress progressEstadisticas">
                                <div className="progress-bar progress-barEstadisticas" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div className='d-flex categoriaSeccionesDirectivo'>
                                <div className='categoriaTextoSeccionesPuntosTablaDirectivo'><span>5</span></div>
                                <div className='categoriaTextoSeccionesPuntosTablaDirectivo flex-fill ms-5'><span>HABILIDADES DIRECTIVAS</span></div>
                                <div className='categoriaTextoSeccionesPuntosTablaDirectivo'><span>90</span></div>
                            </div>
                            <div className="progress progressEstadisticas">
                                <div className="progress-bar progress-barEstadisticas" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div className='d-flex categoriaSeccionesDirectivo'>
                                <div className='categoriaTextoSeccionesPuntosTablaDirectivo'><span>6</span></div>
                                <div className='categoriaTextoSeccionesPuntosTablaDirectivo flex-fill ms-5'><span>HABILIDADES DIGITALES</span></div>
                                <div className='categoriaTextoSeccionesPuntosTablaDirectivo'><span>80</span></div>
                            </div>
                            <div className="progress progressEstadisticas">
                                <div className="progress-bar progress-barEstadisticas" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div className='d-flex parteInferiorEstadisticasDirectivo'>
                                <div className='footerTextoSeccionesPuntosTablaDirectivo'><span>7</span></div>
                                <div className='footerTextoSeccionesPuntosTablaDirectivo flex-fill ms-5'><span>PUNTAJE TOTAL</span></div>
                                <div className='footerTextoSeccionesPuntosTablaDirectivo'><span>55</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-6 p-0 ps-3'>
                    <div className='CajaEstadisticasSecciones'>
                        <div className='tituloRosaDeLosVientos'><h2>ROSA DE LOS VIENTOS</h2></div>
                        <div className='parrafoRosaDeLosVientos'><p>SOBRE TU NIVEL<span>PROFESIONAL ACUMULADO</span></p></div>
                        <div className='hexagonoImagen'><img src={Hexagono} alt="Estadisticas Stannum" /></div>
                        <div className='puntoRojoHexagono'></div>
                    </div>
                </div>
            </div>
            <div className='parrafoFooter1Perfil'><p>Toda esta información fue obtenida del <b>test de dominio!</b></p></div>
            <div className='parrafoFooter2Perfil'><p>Mejora tus habilidades para<b>aumentar tus estadísticas</b></p></div>
        </>
    )
}

export default Perfil