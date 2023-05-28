import { useState, useEffect } from 'react';
import axios from "axios";
import './perfil.css'
import FotoDePerfil from '../../assets/UserDefecto.png'
import SVGEscudo from '../../assets/escudoPerfilSVG.svg'
import Hexagono from '../../assets/HexagonoPerfil.png'

function Perfil() {

    
    const [user, setUser] = useState({});
    const [age, setAge] = useState("");
    const [foto, setFoto] = useState("");
    const [scoreDominio1, setScoreDominio1] = useState(0);
    const [Dominio, setDominio] = useState(0);
    const usuarioPuntaje = 45 

    const token = localStorage.getItem('token');

    const calculateAge = (birthdate) =>{
        const today = new Date();
        const parts = birthdate.split('/');
        const birthDate = new Date(parts[2], parts[1] - 1, parts[0]);
      
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
      
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
          age--;
        }

        setAge(age)
      }

    useEffect(() => {
        const getUser = async () =>{
        if (token) {
            const respuesta = await axios.post(`http://localhost:8000/get-user/${token}`);
            setUser(respuesta.data)
            console.log(respuesta.data);
            if(respuesta.data.birthdate !== "Undefined"){
                calculateAge(respuesta.data.birthdate)
            } else{
                setAge('-')
            }
            if(respuesta.data.dominioDirectivoTestInicial.totalScore !== "Undefined"){
                setScoreDominio1(respuesta.data.dominioDirectivoTestInicial.totalScore)
            }
        }}
        getUser()

        const getPhoto = async () => {
            try {
              const response = await axios.get(`http://localhost:8000/get-photo/${token}`, {
                responseType: 'blob',
              });
              if (response.status === 200) {              
                const url = window.URL.createObjectURL(new Blob([response.data]));
                setFoto(url)
              }
            } catch (error) {
              console.error(error);
            }
        };

        getPhoto();

    }, [token])
    
    const ballPosition = 47.3 + (scoreDominio1 / 100 ) * (11.5 - 47.3)
    // position = topMin + (points / maxPoints) * (topMax - topMin)
    // Explanation of the formula:
    // position is the calculated top position of the ball.
    // topMin is the desired top position when points are at the minimum (47.3%).
    // topMax is the desired top position when points are at the maximum (10%).
    // points is the actual points value.
    // maxPoints is the maximum points value (100).

    return (
        <>
            <div className="bg"></div>
            <div className='tituloPerfil'><h1>FICHA DEL ENTRENADO</h1></div>
            <div className='parrafoPerfil'><p>Teniendo en cuenta los resultados de los diferentes Test, generamos la siguiente plantilla con tu información. A medida que completes los Test, esta se irá completando.</p></div>
            <div className='row rowDatosDelJugador'>
                <a href='/Editar-perfil' className='text-decoration-none botonAFotoPerfilResponsive'><button className='botonFotoPerfilResponsive'><i className="bi bi-pencil-square"></i></button> </a>
                <div className='divFotoJugadorPerfil'>
                        <div className='contenedorImagen'>
                        {
                            foto ? <img src={foto} alt="Perfil Stannum" /> : <img src={FotoDePerfil} alt="Perfil Stannum" />
                        } 
                        {
                            scoreDominio1 !== 0 &&
                            <>
                                <div className='puntosCardFIFA d-flex flex-column align-items-center'>
                                    <div className='puntosNumeroCardFIFA'>55</div>
                                    <div className='puntosTextoCardFIFA'>TOTAL</div>
                                </div>
                            </>
                        }                       
                    </div>                   
                    <div className='descripcionCardPerfil d-flex flex-column align-items-center justify-content-center'>
                        <div className='nombreCardFIFA'>
                            {user.name !== "Undefined" && user.surname !== "Undefined" ? (
                                <>
                                {user.name} {user.surname}
                                </>
                            ) : user.name !== "Undefined" ? (
                                <>{user.name}</>
                            ) : user.surname !== "Undefined" ? (
                                <>{user.surname}</>
                            ) : (
                                <>Perfil</>
                            )}
                        </div>
                        <div className='row puntajesDominiosPerfilFIFA'>
                            <div className='col-6 d-flex flex-column m-0 primeraColumnaEstadisticas'>
                                <div className='d-flex align-items-end justify-content-end'>
                                    <div className='numeroPtsCardFIFA text-end'>{scoreDominio1}</div>
                                    <div className='dominioPtsCardFIFA text-start'>DM1</div>
                                </div>
                                <div className='d-flex align-items-end justify-content-end'>
                                    <div className='numeroPtsCardFIFA text-end'>-</div>
                                    <div className='dominioPtsCardFIFA text-start'>DM2</div>
                                </div>
                                <div className='d-flex align-items-end justify-content-end'>
                                    <div className='numeroPtsCardFIFA text-end'>-</div>
                                    <div className='dominioPtsCardFIFA text-start'>DM3</div>
                                </div>
                            </div>
                            <div className='col-6 d-flex flex-column m-0 segundaColumnaEstadisticas'>
                                <div className='d-flex align-items-end justify-content-start'>
                                    <div className='numeroPtsCardFIFA text-end'>-</div>
                                    <div className='dominioPtsCardFIFA text-start'>DM4</div>
                                </div>
                                <div className='d-flex align-items-end justify-content-start'>
                                    <div className='numeroPtsCardFIFA text-end'>-</div>
                                    <div className='dominioPtsCardFIFA text-start'>DM5</div>
                                </div>
                                <div className='d-flex align-items-end justify-content-start'>
                                    <div className='numeroPtsCardFIFA text-end'>-</div>
                                    <div className='dominioPtsCardFIFA text-start'>DM6</div>
                                </div>
                            </div>
                        </div>
                    </div>                         
                </div>
                <div className='divDatosDelJugadorInfo d-flex flex-column'>
                    <div className='datosDelJugador'>
                        <a href='/Editar-perfil'><button className='botonFotoPerfil'><i className="bi bi-pencil-square"></i></button></a>
                        <h2>DATOS DEL JUGADOR</h2>
                    </div>
                    <div className='datosDelJugadorInformacion d-flex flex-wrap'>
                        <div className='datosJugadorSeccion datosJugadorSeccion1'>
                            <div className='NombreSeccionDatosJugador'>Nombre</div>
                            <div className='InfoSeccionDatosJugador'>
                                {user.name !== "Undefined" && user.surname !== "Undefined" ? (
                                    <>
                                    {user.name} {user.surname}
                                    </>
                                ) : user.name !== "Undefined" ? (
                                    <>{user.name}</>
                                ) : user.surname !== "Undefined" ? (
                                    <>{user.surname}</>
                                ) : (
                                    <>-</>
                                )}
                            </div>
                        </div>
                        <div className='datosJugadorSeccion datosJugadorSeccion2'>
                            <div className='NombreSeccionDatosJugador'>Emprendimiento</div>
                            <div className='InfoSeccionDatosJugador'>
                                {user.venture !== "Undefined" ?
                                    <>
                                    {user.venture}
                                    </>
                                : 
                                    <>-</>
                                }
                            </div>
                        </div>
                        <div className='datosJugadorSeccion datosJugadorSeccion3'>
                            <div className='NombreSeccionDatosJugador'>Territorio</div>
                            <div className='InfoSeccionDatosJugador'>
                                {user.territory !== "Undefined" ?
                                    <>
                                    {user.territory}
                                    </>
                                : 
                                    <>-</>
                                }
                            </div>
                        </div>
                        <div className='datosJugadorSeccion datosJugadorSeccion4'>
                            <div className='NombreSeccionDatosJugador'>Edad</div>
                            <div className='InfoSeccionDatosJugador'>
                                {age}
                            </div>
                        </div>
                        <div className='datosJugadorSeccion datosJugadorSeccion5'>
                            <div className='NombreSeccionDatosJugador'>Biografia</div>
                            <div className='InfoSeccionDatosJugador pe-lg-3'>
                                {user.biography !== "Undefined" ?
                                    <>
                                    {user.biography}
                                    </>
                                : 
                                    <>-</>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className='datosJugadorSeccion6'>
                    <div className='NombreSeccionDatosJugador'>Biografia</div>
                    <div className='InfoSeccionDatosJugador InfoSeccionDatosJugadorBiografia'>
                        {user.biography !== "Undefined" ?
                            <>
                            {user.biography}
                            </>
                        : 
                            <>-</>
                        }
                    </div>
                </div>
            </div>
            <div className='cajaSeleccionarCardDominio d-flex'>
                <div className={` ${ Dominio !== 1 ? 'cardDominioPerfil' : 'cardDominioPerfilPresionada'} d-flex flex-column text-center`} onClick={() => setDominio(0)}>
                    <div className={` ${ Dominio !== 1 ? 'tituloCardDominioPerfil' : 'tituloCardDominioPerfilPresionada' }`}>DOMINIO 1</div>
                    <div className={` ${ Dominio !== 1 ?'subtituloCardDominioPerfil' : 'subtituloCardDominioPerfilPresionada' }`}>DIRECTIVO</div>
                    <div className="progress progressCard">
                        <div className={`progress-bar progress-barCard ${ Dominio !== 1 ?'progress-bar1' : ' progress-barPresionada'}`} style={{ width: `${scoreDominio1}%` }} role="progressbar" aria-label="Progreso estadisticas" aria-valuenow={usuarioPuntaje} aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className={`${ Dominio !== 1 ?'numeroCardDominioPerfil' : 'numeroCardDominioPerfilPresionada'}`}>{scoreDominio1}</div>
                    <div className={`${ Dominio !== 1 ? 'textoPuntosCardDominioPerfil' : 'textoPuntosCardDominioPerfilPresionada'}`}>PUNTOS</div>
                </div>
                <div className='cardDominioPerfilDesactivado d-flex flex-column text-center'>
                    <div className='tituloCardDominioPerfil desactivado'>DOMINIO 2</div>
                    <div className='subtituloCardDominioPerfil desactivado'>TIEMPO</div>
                    <div className="progress progressCard">
                        <div className="progress-bar progress-barCard progress-bar2" role="progressbar" aria-label="Progreso estadisticas" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className='proximamenteCardDominioPerfil desactivado'>PROXIMA<span>MENTE</span></div>
                    <div className='mesProximamenteCardDominioPerfil desactivado'>MARZO</div>
                </div>
                <div className='cardDominioPerfilDesactivado d-flex flex-column text-center'>
                    <div className='tituloCardDominioPerfil desactivado'>DOMINIO 3</div>
                    <div className='subtituloCardDominioPerfil desactivado'>COMUNICACION</div>
                    <div className="progress progressCard">
                        <div className="progress-bar progress-barCard progress-bar3" role="progressbar" aria-label="Progreso estadisticas" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className='proximamenteCardDominioPerfil desactivado'>PROXIMA<span>MENTE</span></div>
                    <div className='mesProximamenteCardDominioPerfil mesProximamenteCardDominioPerfil3 desactivado'>MARZO</div>
                </div>
                <div className='cardDominioPerfilDesactivado d-flex flex-column text-center'>
                    <div className='tituloCardDominioPerfil desactivado'>DOMINIO 4</div>
                    <div className='subtituloCardDominioPerfil desactivado'>DELEGACION</div>
                    <div className="progress progressCard">
                        <div className="progress-bar progress-barCard progress-bar4" role="progressbar" aria-label="Progreso estadisticas" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className='proximamenteCardDominioPerfil desactivado'>PROXIMA<span>MENTE</span></div>
                    <div className='mesProximamenteCardDominioPerfil desactivado'>MARZO</div>
                </div>
                <div className='cardDominioPerfilDesactivado d-flex flex-column text-center'>
                    <div className='tituloCardDominioPerfil desactivado'>DOMINIO 5</div>
                    <div className='subtituloCardDominioPerfil desactivado'>ORGANIZACION</div>
                    <div className="progress progressCard">
                        <div className="progress-bar progress-barCard progress-bar5" role="progressbar" aria-label="Progreso estadisticas" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className='proximamenteCardDominioPerfil desactivado'>PROXIMA<span>MENTE</span></div>
                    <div className='mesProximamenteCardDominioPerfil desactivado'>MARZO</div>
                </div>
                <div className='cardDominioPerfilDesactivado d-flex flex-column text-center'>
                    <div className='tituloCardDominioPerfil desactivado'>DOMINIO 6</div>
                    <div className='subtituloCardDominioPerfil desactivado'>PLANIFICACION</div>
                    <div className="progress progressCard">
                        <div className="progress-bar progress-barCard progress-bar6" role="progressbar" aria-label="Progreso estadisticas" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className='proximamenteCardDominioPerfil desactivado'>PROXIMA<span>MENTE</span></div>
                    <div className='mesProximamenteCardDominioPerfil desactivado'>MARZO</div>
                </div>
            </div>            
            <div className='row cajaGrandeEstadisticasHexagono justify-content-between'>
                <div className='col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12 cajaEstadisticasIzquierda'>
                    <div className='CajaEstadisticasSecciones'>
                        <div className='tituloCajaEstadisticasSecciones'><h2>Resultados del test - Dominio 1</h2></div>
                        <div className='subtituloCajaEstadisticasSecciones'><h3>HABILIDADES DIRECTIVAS</h3></div>
                        <div className='d-flex flex-column estadisticasTablaSecciones'>
                            <div className='row parteSuperiorSeccionesDirectivo mx-auto align-items-start'>
                                <div className='titulosSeccionesPuntosTablaDirectivo col-2 text-start m-0 p-0'><span>N°</span></div>
                                <div className='titulosSeccionesPuntosTablaDirectivo col-8 text-start m-0 p-0'><span>CATEGORIA</span></div>
                                <div className='titulosSeccionesPuntosTablaDirectivo col-2 text-end m-0 p-0'><span>PTS</span></div>
                            </div>

                            <div className='row categoriaSeccionesDirectivo mx-auto align-items-start'>
                                <div className='categoriaTextoSeccionesPuntosTablaDirectivo col-2 text-start m-0 p-0'><span>1</span></div>
                                <div className='categoriaTextoSeccionesPuntosTablaDirectivo col-8 text-start m-0 p-0'><span>EMPRENDEDOR ESTRATÉGICO</span></div>
                                <div className='categoriaTextoSeccionesPuntosTablaDirectivo col-2 text-end m-0 p-0'><span>{scoreDominio1}</span></div>
                                <div className="progress progressEstadisticas col-10 align-self-end ms-auto p-0">
                                    <div className="progress-bar progress-barEstadisticas progress-barUnic'" style={{ width: `${scoreDominio1}%` }} role="progressbar" aria-label="Progreso estadisticas" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className='row categoriaSeccionesDirectivo mx-auto align-items-start'>
                                <div className='categoriaTextoSeccionesPuntosTablaDirectivo col-2 text-start m-0 p-0'><span>2</span></div>
                                <div className='categoriaTextoSeccionesPuntosTablaDirectivo col-8 text-start m-0 p-0'><span>CONCEPTOS ESTRATEGICOS</span></div>
                                <div className='categoriaTextoSeccionesPuntosTablaDirectivo col-2 text-end m-0 p-0'><span>{scoreDominio1}</span></div>
                                <div className="progress progressEstadisticas col-10 align-self-end ms-auto p-0">
                                    <div className="progress-bar progress-barEstadisticas" style={{ width: `${scoreDominio1}%` }} role="progressbar" aria-label="Progreso estadisticas" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className='row categoriaSeccionesDirectivo mx-auto align-items-start'>
                                <div className='categoriaTextoSeccionesPuntosTablaDirectivo col-2 text-start m-0 p-0'><span>3</span></div>
                                <div className='categoriaTextoSeccionesPuntosTablaDirectivo col-8 text-start m-0 p-0'><span>CONOCIMIENTO DE MERCADO</span></div>
                                <div className='categoriaTextoSeccionesPuntosTablaDirectivo col-2 text-end m-0 p-0'><span>{scoreDominio1}</span></div>
                                <div className="progress progressEstadisticas col-10 align-self-end ms-auto p-0">
                                    <div className="progress-bar progress-barEstadisticas" style={{ width: `${scoreDominio1}%` }} role="progressbar" aria-label="Progreso estadisticas" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className='row categoriaSeccionesDirectivo mx-auto align-items-start'>
                                <div className='categoriaTextoSeccionesPuntosTablaDirectivo col-2 text-start m-0 p-0'><span>4</span></div>
                                <div className='categoriaTextoSeccionesPuntosTablaDirectivo col-8 text-start m-0 p-0'><span>CONOCIMIENTO EMPRENDEDOR</span></div>
                                <div className='categoriaTextoSeccionesPuntosTablaDirectivo col-2 text-end m-0 p-0'><span>{scoreDominio1}</span></div>
                                <div className="progress progressEstadisticas col-10 align-self-end ms-auto p-0">
                                    <div className="progress-bar progress-barEstadisticas" style={{ width: `${scoreDominio1}%` }} role="progressbar" aria-label="Progreso estadisticas" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className='row categoriaSeccionesDirectivo mx-auto align-items-start'>
                                <div className='categoriaTextoSeccionesPuntosTablaDirectivo col-2 text-start m-0 p-0'><span>5</span></div>
                                <div className='categoriaTextoSeccionesPuntosTablaDirectivo col-8 text-start m-0 p-0'><span>HABILIDADES DIRECTIVAS</span></div>
                                <div className='categoriaTextoSeccionesPuntosTablaDirectivo col-2 text-end m-0 p-0'><span>{scoreDominio1}</span></div>
                                <div className="progress progressEstadisticas col-10 align-self-end ms-auto p-0">
                                    <div className="progress-bar progress-barEstadisticas" style={{ width: `${scoreDominio1}%` }} role="progressbar" aria-label="Progreso estadisticas" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className='row categoriaSeccionesDirectivo mx-auto align-items-start'>
                                <div className='categoriaTextoSeccionesPuntosTablaDirectivo col-2 text-start m-0 p-0'><span>6</span></div>
                                <div className='categoriaTextoSeccionesPuntosTablaDirectivo col-8 text-start m-0 p-0'><span>HABILIDADES DIGITALES</span></div>
                                <div className='categoriaTextoSeccionesPuntosTablaDirectivo col-2 text-end m-0 p-0'><span>{scoreDominio1}</span></div>
                                <div className="progress progressEstadisticas col-10 align-self-end ms-auto p-0">
                                    <div className="progress-bar progress-barEstadisticas" style={{ width: `${scoreDominio1}%` }} role="progressbar" aria-label="Progreso estadisticas" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className='row parteInferiorEstadisticasDirectivo mx-auto align-items-start'>
                                <div className='footerTextoSeccionesPuntosTablaDirectivo col-2 text-start m-0 p-0'><span>7</span></div>
                                <div className='footerTextoSeccionesPuntosTablaDirectivo col-8 text-start m-0 p-0'><span>PUNTAJE TOTAL</span></div>
                                <div className='footerTextoSeccionesPuntosTablaDirectivo col-2 text-end m-0 p-0'><span>{scoreDominio1}</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12 cajaEstadisticasDerecha'>
                    <div className='CajaEstadisticasSecciones cajaHexagonoGrande'>
                        <div className='tituloRosaDeLosVientos'><h2>ROSA DE LOS VIENTOS</h2></div>
                        <div className='parrafoRosaDeLosVientos'><p>SOBRE TU NIVEL<span>PROFESIONAL ACUMULADO</span></p></div>
                        <div className='hexagonoImagen'>
                            <img src={Hexagono} alt="Estadisticas Stannum" />
                            <div className='puntoRojoHexagono' style={{ top: `${ballPosition}%` }}></div>
                        </div>                        
                    </div>
                </div>
            </div>
            <div className='parrafoFooter1Perfil'><p>Toda esta información fue obtenida del <b>test de dominio!</b></p></div>
            <div className='parrafoFooter2Perfil'><p>Mejora tus habilidades para<b>aumentar tus estadísticas</b></p></div>
        </>
    )
}

export default Perfil