import { useState, useEffect } from 'react';
import axios from "axios";
import Cookies from 'js-cookie'
import './ranking.css'
import 'animate.css';

function Ranking() {

    const [mostrarDominios, setMostrarDominios] = useState('inicio');
    const token = Cookies.get('token');
    
    if(token === undefined){
        window.location.replace('/Cerrar-sesion');
    }

    useEffect(() => {

        const verifyToken = async () =>{
            if (token) {
                const respuesta = await axios.post(`https://prueba-back-mateolohezic.up.railway.app/verify-token-user`,
                    {
                        token
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

    }, [token])

    const mostrarDominiosBoton = () =>{
        setMostrarDominios(status => {
            if(status === 'inicio' || status === 'esconder') {
                return 'mostrar';
            } else {
                return 'esconder';
            }
        });
    };

    return (
        <>
            <div className="bg"></div>
            <div className='tituloRanking'><h1>RANKING</h1></div>
            <div className='parrafoRanking'><p>Dentro de nuestra estructura contamos con 2 tipos diferentes de rankings. Por un lado contamos con el "Ranking de dominio" en donde se ve reflejada directamente tu puntuación obtenida en el test de dominio, y también con el medallero de las esferas de metal, en donde se ven reflejados los puntajes que irás obteniendo en tus diferentes entrenamientos.</p></div>
            <div className='d-flex justify-content-between divRankingYMedallero'>
                <div className='divBotonRankingDominio'><button className={`botonRankingDominio ${mostrarDominios  === 'mostrar' ? 'botonRankingDominioApretado' : 'botonRankingDominioSuelto'}`} onClick={mostrarDominiosBoton}>RANKING<span>DE DOMINIOS</span></button></div>
                <div className='divBotonMedalleroMetal'><button className='botonMedalleroMetal' disabled={true}>MEDALLERO<span>DE METAL</span></button></div>
            </div>
            <div className={`divBotonesRankingDominios ${mostrarDominios === 'inicio' ? 'divBotonesRankingDominiosEsconder' : mostrarDominios === 'mostrar' ? 'divBotonesRankingDominiosMostrar animate__animated animate__fadeInLeftBig' : 'divBotonesRankingDominiosEsconder animate__animated animate__fadeOutLeftBig'}`}>
                <div className='divBotonRankingDominioChico'><a href="/Ranking/Directivo"><button className='botonRankingDominio1'>Dominio 1</button></a></div>
                <div className='divBotonRankingDominioChico'><button className='botonRankingDominioDesactivado' disabled={true}>Dominio 2</button></div>
                <div className='divBotonRankingDominioChico'><button className='botonRankingDominioDesactivado' disabled={true}>Dominio 3</button></div>
                <div className='divBotonRankingDominioChico'><button className='botonRankingDominioDesactivado' disabled={true}>Dominio 4</button></div>
                <div className='divBotonRankingDominioChico'><button className='botonRankingDominioDesactivado' disabled={true}>Dominio 5</button></div>
                <div className='divBotonRankingDominioChico'><button className='botonRankingDominioDesactivado' disabled={true}>Dominio 6</button></div>
            </div>
        </>
    )
}

export default Ranking