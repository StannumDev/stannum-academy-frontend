import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Cookies from 'js-cookie'
import axios from "axios";
import { Helmet, HelmetProvider } from 'react-helmet-async'
import './respuestasTest1.css'

function RespuestasTest1() {

    const [user, setUser] = useState({});
    const adminToken = Cookies.get('adminToken');
    const token = Cookies.get('token');
    const { id } = useParams();

    if(adminToken === undefined){
        window.location.replace('/Cerrar-sesion');
    }

    useEffect(() => {
        const verifyToken = async () =>{
            if (adminToken) {
                const respuesta = await axios.post(`https://prueba-back-mateolohezic.up.railway.app/verify-token`,
                    {
                        adminToken
                    }
                );
                if (respuesta.status === 206) {
                    window.location.replace('/Cerrar-sesion');
                }
            } else{
                window.location.replace('/Cerrar-sesion');
            }
        }

        verifyToken()

        const getUser = async () =>{
            if (id) {
                const respuesta = await axios.post(`https://prueba-back-mateolohezic.up.railway.app/get-user-id/${id}`,
                    {
                        token
                    }
                );
                if (respuesta.status === 200) {
                setUser(respuesta.data)
                } else {
                    window.location.replace('/Cerrar-sesion');
                }
            }
        }
        getUser()

    }, [id])
    
    if(user.dominioDirectivoTestInicial){
        return (

        <>
            <HelmetProvider>
                <Helmet>
                    <meta name="description" content="Respuestas del test Dominio 1: Directivo de jugador en STANNUM Academy" />
                    <meta name="keywords" content="stannum, academia, academy, respuestas, usuario, dominio, directivo, jugador, puntos" />
                    <meta name="subject" content="Respuestas del test Dominio 1: Directivo" />
                    <meta name="theme-color" content="#3A3A3A" />
                    <title>Respuestas | STANNUM Academy</title>
                </Helmet>
            </HelmetProvider>
            <div className='tituloAdministracion'><h1>RESULTADOS</h1></div>
            <div className='parrafoBienvenidaCentro text-center'><p>Estas viendo los resultados de <b>{user.email}</b>.</p></div>
            <div className='tituloSeccionRespuestasTest'><h3>Sección 1</h3></div>
            <div className="table-responsive tableAdmin mb-0">
                <table className="table table-striped-rows align-middle mb-0 text-start">
                <thead className='align-middle'>
                    <tr>
                        <th scope="col">Pregunta</th>
                        <th scope="col">Respuesta</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope="col">¿Qué tan sumergido en la operación estás?</td>
                        <td scope="col">{user.dominioDirectivoTestInicial.estrategico.question1}</td>
                    </tr>
                </tbody>
                </table>
            </div>
            <div className='puntajeSeccionRespuestasTest'><h3>{user.dominioDirectivoTestInicial.estrategico.sectionScore} PTS</h3></div>

            <div className='tituloSeccionRespuestasTest'><h3>Sección 2</h3></div>
            <div className="table-responsive tableAdmin mb-0">
                <table className="table table-striped-rows align-middle mb-0 text-start">
                <thead className=''>
                    <tr>
                        <th scope="col">Pregunta</th>
                        <th scope="col">Respuesta</th>
                    </tr>
                </thead>
                <tbody className=''>
                    <tr>
                        <td scope="col">¿Que es la visión?</td>
                        <td scope="col">{user.dominioDirectivoTestInicial.conceptos.question1}</td>
                    </tr>
                    <tr>
                        <td scope="col">¿Que es la misión?</td>
                        <td scope="col">{user.dominioDirectivoTestInicial.conceptos.question2}</td>
                    </tr>
                    <tr>
                        <td scope="col">¿Cuáles son los elementos que se incluyen en una misión empresarial?</td>
                        <td scope="col">{user.dominioDirectivoTestInicial.conceptos.question3}</td>
                    </tr>
                    <tr>
                        <td scope="col">¿Cómo se diferencia la visión de la misión de una empresa?</td>
                        <td scope="col">{user.dominioDirectivoTestInicial.conceptos.question4}</td>
                    </tr>
                    <tr>
                        <td scope="col">¿Qué significa tener una visión estratégica?</td>
                        <td scope="col">{user.dominioDirectivoTestInicial.conceptos.question5}</td>
                    </tr>
                    <tr>
                        <td scope="col">¿Qué es el modelo de negocio?</td>
                        <td scope="col">{user.dominioDirectivoTestInicial.conceptos.question6}</td>
                    </tr>
                    <tr>
                        <td scope="col">¿Qué elementos se incluyen en el modelo de negocio?</td>
                        <td scope="col">{user.dominioDirectivoTestInicial.conceptos.question7}</td>
                    </tr>
                    <tr>
                        <td scope="col">¿Qué es una propuesta de valor?</td>
                        <td scope="col">{user.dominioDirectivoTestInicial.conceptos.question8}</td>
                    </tr>
                    <tr>
                        <td scope="col">¿Por qué es importante tener una propuesta de valor clara y concisa?</td>
                        <td scope="col">{user.dominioDirectivoTestInicial.conceptos.question9}</td>
                    </tr>
                    <tr>
                        <td scope="col">¿Qué significa el término "Ventaja competitiva"?</td>
                        <td scope="col">{user.dominioDirectivoTestInicial.conceptos.question10}</td>
                    </tr>
                    <tr>
                        <td scope="col">¿Qué es un plan estratégico?</td>
                        <td scope="col">{user.dominioDirectivoTestInicial.conceptos.question11}</td>
                    </tr>
                    <tr>
                        <td scope="col">¿Cuánto sabes sobre desarrollo de negocios?</td>
                        <td scope="col">{user.dominioDirectivoTestInicial.conceptos.question12}</td>
                    </tr>
                    <tr>
                        <td scope="col">¿Cuánto sabes sobre marketing?</td>
                        <td scope="col">{user.dominioDirectivoTestInicial.conceptos.question13}</td>
                    </tr>
                    <tr>
                        <td scope="col">¿Cuánto sabes sobre ventas?</td>
                        <td scope="col">{user.dominioDirectivoTestInicial.conceptos.question14}</td>
                    </tr>
                    <tr>
                        <td scope="col">¿Cuánto sabes sobre gestión del talento?</td>
                        <td scope="col">{user.dominioDirectivoTestInicial.conceptos.question15}</td>
                    </tr>
                    <tr>
                        <td scope="col">¿Cuánto sabes sobre finanzas?</td>
                        <td scope="col">{user.dominioDirectivoTestInicial.conceptos.question16}</td>
                    </tr>
                </tbody>
                </table>
            </div>
            <div className='puntajeSeccionRespuestasTest'><h3>{user.dominioDirectivoTestInicial.conceptos.sectionScore} PTS</h3></div>

            <div className='tituloSeccionRespuestasTest'><h3>Sección 3</h3></div>
            <div className="table-responsive tableAdmin mb-0">
                <table className="table table-striped-rows align-middle mb-0 text-start">
                <thead className='align-middle'>
                    <tr>
                        <th scope="col">Pregunta</th>
                        <th scope="col">Respuesta</th>
                        <th scope="col">Justificación</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope="col">¿Podrías identificar a los competidores directos e indirectos de tu Negocio?</td>
                        <td scope="col">{user.dominioDirectivoTestInicial.mercado.question1}</td>
                        <td scope="col">
                            {
                                user.dominioDirectivoTestInicial.mercado.question1Justification != "Undefined" ? user.dominioDirectivoTestInicial.mercado.question1Justification : <>-</>
                            }
                        </td>
                    </tr>
                    <tr>
                        <td scope="col">¿Podrías identificar a los referentes en tu mercado?</td>
                        <td scope="col">{user.dominioDirectivoTestInicial.mercado.question2}</td>
                        <td scope="col">
                            {
                                user.dominioDirectivoTestInicial.mercado.question2Justification != "Undefined" ? user.dominioDirectivoTestInicial.mercado.question2Justification : <>-</>
                            }
                        </td>
                    </tr>
                    <tr>
                        <td scope="col">¿Podrías identificar 5 tendencias en tu mercado?</td>
                        <td scope="col">{user.dominioDirectivoTestInicial.mercado.question3}</td>
                        <td scope="col">
                            {
                                user.dominioDirectivoTestInicial.mercado.question3Justification != "Undefined" ? user.dominioDirectivoTestInicial.mercado.question3Justification : <>-</>
                            }
                        </td>
                    </tr>
                    <tr>
                        <td scope="col">¿Podrías identificar 3 oportunidades del contexto de tu negocio?</td>
                        <td scope="col">{user.dominioDirectivoTestInicial.mercado.question4}</td>
                        <td scope="col">
                            {
                                user.dominioDirectivoTestInicial.mercado.question4Justification != "Undefined" ? user.dominioDirectivoTestInicial.mercado.question4Justification : <>-</>
                            }
                        </td>
                    </tr>
                    <tr>
                        <td scope="col">¿Podrías identificar 3 amenazas del contexto de tu negocio?</td>
                        <td scope="col">{user.dominioDirectivoTestInicial.mercado.question5}</td>
                        <td scope="col">
                            {
                                user.dominioDirectivoTestInicial.mercado.question5Justification != "Undefined" ? user.dominioDirectivoTestInicial.mercado.question4Justification : <>-</>
                            }
                        </td>
                    </tr>
                </tbody>
                </table>
            </div>
            <div className='puntajeSeccionRespuestasTest'><h3>{user.dominioDirectivoTestInicial.mercado.sectionScore} PTS</h3></div>

            <div className='tituloSeccionRespuestasTest'><h3>Sección 4</h3></div>
            <div className="table-responsive tableAdmin mb-0">
                <table className="table table-striped-rows align-middle mb-0 text-start">
                <thead className='align-middle'>
                    <tr>
                        <th scope="col">Pregunta</th>
                        <th scope="col">Respuesta</th>
                        <th scope="col">Justificación</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope="col">¿La visión de tu negocio está formalizada?</td>
                        <td scope="col">{user.dominioDirectivoTestInicial.emprendimiento.question1}</td>
                        <td scope="col">
                            {
                                user.dominioDirectivoTestInicial.emprendimiento.question1Justification != "Undefined" ? user.dominioDirectivoTestInicial.emprendimiento.question1Justification : <>-</>
                            }
                        </td>
                    </tr>
                    <tr>
                        <td scope="col">¿La misión de tu negocio está formalizada?</td>
                        <td scope="col">{user.dominioDirectivoTestInicial.emprendimiento.question2}</td>
                        <td scope="col">
                            {
                                user.dominioDirectivoTestInicial.emprendimiento.question2Justification != "Undefined" ? user.dominioDirectivoTestInicial.emprendimiento.question2Justification : <>-</>
                            }
                        </td>
                    </tr>
                    <tr>
                        <td scope="col">¿Los objetivos estratégicos están escritos?</td>
                        <td scope="col">{user.dominioDirectivoTestInicial.emprendimiento.question3}</td>
                        <td scope="col">
                            {
                                user.dominioDirectivoTestInicial.emprendimiento.question3Justification != "Undefined" ? user.dominioDirectivoTestInicial.emprendimiento.question3Justification : <>-</>
                            }
                        </td>
                    </tr>
                    <tr>
                        <td scope="col">¿La propuesta de valor de tu negocio está escrita?</td>
                        <td scope="col">{user.dominioDirectivoTestInicial.emprendimiento.question4}</td>
                        <td scope="col">
                            {
                                user.dominioDirectivoTestInicial.emprendimiento.question4Justification != "Undefined" ? user.dominioDirectivoTestInicial.emprendimiento.question4Justification : <>-</>
                            }
                        </td>
                    </tr>
                    <tr>
                        <td scope="col">¿Tienes un documento que describe a la perfección "Quién es tu Cliente"?</td>
                        <td scope="col">{user.dominioDirectivoTestInicial.emprendimiento.question5}</td>
                        <td scope="col">
                            {
                                user.dominioDirectivoTestInicial.emprendimiento.question5Justification != "Undefined" ? user.dominioDirectivoTestInicial.emprendimiento.question5Justification : <>-</>
                            }
                        </td>
                    </tr>
                    <tr>
                        <td scope="col">¿Las áreas funcionales de tu negocio están definidas formalmente?</td>
                        <td scope="col">{user.dominioDirectivoTestInicial.emprendimiento.question6}</td>
                        <td scope="col">
                            {
                                user.dominioDirectivoTestInicial.emprendimiento.question6Justification != "Undefined" ? user.dominioDirectivoTestInicial.emprendimiento.question6Justification : <>-</>
                            }
                        </td>
                    </tr>
                    <tr>
                        <td scope="col">¿Planificas a largo plazo? (5 años o más)</td>
                        <td scope="col">{user.dominioDirectivoTestInicial.emprendimiento.question7}</td>
                        <td scope="col">-</td>
                    </tr>
                    <tr>
                        <td scope="col">¿Tienes metas económicas concretas y escritas?</td>
                        <td scope="col">{user.dominioDirectivoTestInicial.emprendimiento.question8}</td>
                        <td scope="col">-</td>
                    </tr>
                    <tr>
                        <td scope="col">¿Evalúas formalmente la satisfacción de los clientes?</td>
                        <td scope="col">{user.dominioDirectivoTestInicial.emprendimiento.question9}</td>
                        <td scope="col">-</td>
                    </tr>
                    <tr>
                        <td scope="col">¿Tienes indicadores para medir el desempeño en tu negocio?</td>
                        <td scope="col">{user.dominioDirectivoTestInicial.emprendimiento.question10}</td>
                        <td scope="col">-</td>
                    </tr>
                    <tr>
                        <td scope="col">¿Tienes reuniones estratégicas?</td>
                        <td scope="col">{user.dominioDirectivoTestInicial.emprendimiento.question11}</td>
                        <td scope="col">-</td>
                    </tr>
                    <tr>
                        <td scope="col">¿Tienes la reunión anual para cerrar el año?</td>
                        <td scope="col">{user.dominioDirectivoTestInicial.emprendimiento.question12}</td>
                        <td scope="col">-</td>
                    </tr>
                    <tr>
                        <td scope="col">¿Planificas formalmente el año completo antes de arrancar?</td>
                        <td scope="col">{user.dominioDirectivoTestInicial.emprendimiento.question13}</td>
                        <td scope="col">-</td>
                    </tr>
                    <tr>
                        <td scope="col">¿Utilizas alguna metodología de gestión de proyectos?</td>
                        <td scope="col">{user.dominioDirectivoTestInicial.emprendimiento.question14}</td>
                        <td scope="col">
                            {
                                user.dominioDirectivoTestInicial.emprendimiento.question14Justification != "Undefined" ? user.dominioDirectivoTestInicial.emprendimiento.question14Justification : <>-</>
                            }
                        </td>
                    </tr>
                    <tr>
                        <td scope="col">¿Utilizas alguna herramienta digital de gestión del tiempo?</td>
                        <td scope="col">{user.dominioDirectivoTestInicial.emprendimiento.question15}</td>
                        <td scope="col">
                            {
                                user.dominioDirectivoTestInicial.emprendimiento.question15Justification != "Undefined" ? user.dominioDirectivoTestInicial.emprendimiento.question15Justification : <>-</>
                            }
                        </td>
                    </tr>
                </tbody>
                </table>
            </div>
            <div className='puntajeSeccionRespuestasTest'><h3>{user.dominioDirectivoTestInicial.emprendimiento.sectionScore} PTS</h3></div>

            <div className='tituloSeccionRespuestasTest'><h3>Sección 5</h3></div>
            <div className="table-responsive tableAdmin mb-0">
                <table className="table table-striped-rows align-middle mb-0 text-start">
                <thead className='align-middle'>
                    <tr>
                        <th scope="col">Pregunta</th>
                        <th scope="col">Respuesta</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope="col">¿Comprendes y desarrollas el negocio a partir de su visión y misión?</td>
                        <td scope="col">{user.dominioDirectivoTestInicial.habilidadesDirectivas.question1}</td>
                    </tr>
                    <tr>
                        <td scope="col">¿Eres capaz de desarrollar el modelo de negocio de manera efectiva para cumplir la visión?</td>
                        <td scope="col">{user.dominioDirectivoTestInicial.habilidadesDirectivas.question2}</td>
                    </tr>
                    <tr>
                        <td scope="col">¿Eres capaz de crear y ejecutar planes estratégicos para lograr los objetivos?</td>
                        <td scope="col">{user.dominioDirectivoTestInicial.habilidadesDirectivas.question3}</td>
                    </tr>
                    <tr>
                        <td scope="col">¿Eres capaz de analizar y utilizar datos y estadísticas para medir la evolución del negocio?</td>
                        <td scope="col">{user.dominioDirectivoTestInicial.habilidadesDirectivas.question4}</td>
                    </tr>
                    <tr>
                        <td scope="col">¿Que grado de dominio tienes para aterrizar la visión en objetivos estratégicos?</td>
                        <td scope="col">{user.dominioDirectivoTestInicial.habilidadesDirectivas.question5}</td>
                    </tr>
                    <tr>
                        <td scope="col">¿Que grado de dominio tienes para el desarrollo integrado de las áreas funcionales para cumplir con los objetivos estratégicos? (Recursos humano, Administración y Finanzas, Operaciones, Marketing, Ventas, Legales, I+D, Logística, etc.)</td>
                        <td scope="col">{user.dominioDirectivoTestInicial.habilidadesDirectivas.question6}</td>
                    </tr>
                    <tr>
                        <td scope="col">¿Podrías identificar el grado de dominio sobre tu habilidad para liderar equipos y motivar a los empleados?</td>
                        <td scope="col">{user.dominioDirectivoTestInicial.habilidadesDirectivas.question7}</td>
                    </tr>
                    <tr>
                        <td scope="col">¿Podrías identificar el grado de dominio sobre tu habilidad para para entender los números de tu negocio en los estados contables y utilizar los informes financiero para evaluar la rentabilidad de los planes estratégicos, y tomar decisiones en base a indicadores de desempeño?</td>
                        <td scope="col">{user.dominioDirectivoTestInicial.habilidadesDirectivas.question8}</td>
                    </tr>
                </tbody>
                </table>
            </div>
            <div className='puntajeSeccionRespuestasTest'><h3>{user.dominioDirectivoTestInicial.habilidadesDirectivas.sectionScore} PTS</h3></div>
            <div className='tituloSeccionRespuestasTest'><h3>Sección 6</h3></div>
            <div className="table-responsive tableAdmin mb-0">
                <table className="table table-striped-rows align-middle mb-0 text-start">
                <thead className='align-middle'>
                    <tr>
                        <th scope="col">Pregunta</th>
                        <th scope="col">Respuesta</th>
                        <th scope="col">Justificación</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope="col">¿Utilizas una plataforma de almacenamiento de información en la Nube, como Dropbox o Google Drive?</td>
                        <td scope="col">{user.dominioDirectivoTestInicial.habilidadesDigitales.question1}</td>
                        <td scope="col">
                            {
                                user.dominioDirectivoTestInicial.habilidadesDigitales.question1Justification != "Undefined" ? user.dominioDirectivoTestInicial.habilidadesDigitales.question1Justification : <>-</>
                            }
                        </td>
                    </tr>
                    <tr>
                        <td scope="col">¿Qué tan avanzada/o estás en el manejo de la Nube?</td>
                        <td scope="col">{user.dominioDirectivoTestInicial.habilidadesDigitales.question2}</td>
                        <td scope="col">-</td>
                    </tr>
                    <tr>
                        <td scope="col">¿Utilizas algún software de gestión?</td>
                        <td scope="col">{user.dominioDirectivoTestInicial.habilidadesDigitales.question3}</td>
                        <td scope="col">
                            {
                                user.dominioDirectivoTestInicial.habilidadesDigitales.question3Justification != "Undefined" ? user.dominioDirectivoTestInicial.habilidadesDigitales.question3Justification : <>-</>
                            }
                        </td>
                    </tr>
                    <tr>
                        <td scope="col">¿Usas un software de gestión de proyectos?</td>
                        <td scope="col">{user.dominioDirectivoTestInicial.habilidadesDigitales.question4}</td>
                        <td scope="col">
                            {
                                user.dominioDirectivoTestInicial.habilidadesDigitales.question4Justification != "Undefined" ? user.dominioDirectivoTestInicial.habilidadesDigitales.question4Justification : <>-</>
                            }
                        </td>
                    </tr>
                    <tr>
                        <td scope="col">¿Utilizas alguna herramienta digital para gestión del tiempo?</td>
                        <td scope="col">{user.dominioDirectivoTestInicial.habilidadesDigitales.question5}</td>
                        <td scope="col">
                            {
                                user.dominioDirectivoTestInicial.habilidadesDigitales.question5Justification != "Undefined" ? user.dominioDirectivoTestInicial.habilidadesDigitales.question5Justification : <>-</>
                            }
                        </td>
                    </tr>
                </tbody>
                </table>
            </div>
            <div className='puntajeSeccionRespuestasTest ultimoPuntajeRespuestasTest'><h3>{user.dominioDirectivoTestInicial.habilidadesDigitales.sectionScore} PTS</h3></div>
        </>


    )
    } else{
        return(<></>)
    }
}

export default RespuestasTest1