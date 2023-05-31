import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Cookies from 'js-cookie'
import axios from "axios";
import { Helmet, HelmetProvider } from 'react-helmet-async'
import './historial.css'

function Historial() {

    const [logs, setLogs] = useState([]);
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

        const getLogs = async () =>{
            if (token) {
                const respuesta = await axios.post(`https://prueba-back-mateolohezic.up.railway.app/get-logs`,
                    {
                        token
                    }
                );
                if (respuesta.status === 200) {
                    setLogs(respuesta.data)
                } else {
                    window.location.replace('/Cerrar-sesion');
                }
            }
        }

        getLogs()

    }, [])
    
    return (
    <>
        <HelmetProvider>
            <Helmet>
                <meta name="description" content="Respuestas del test Dominio 1: Directivo de jugador en STANNUM Academy" />
                <meta name="keywords" content="stannum, academia, academy, respuestas, usuario, dominio, directivo, jugador, puntos" />
                <meta name="subject" content="Respuestas del test Dominio 1: Directivo" />
                <meta name="theme-color" content="#3A3A3A" />
                <title>Historial | STANNUM Academy</title>
            </Helmet>
        </HelmetProvider>
        <div className='tituloAdministracion'><h1>HISTORIAL</h1></div>
        <div className='parrafoBienvenidaCentro text-center'><p>Estas viendo el <b>historial</b> de acciones.</p></div>
        <div className="table-responsive tableAdmin tableHistorial">
            <table className="table table-striped-rows align-middle mb-0 text-start">
            <thead className='align-middle'>
                <tr>
                    <th scope="col">Fecha</th>
                    <th scope="col">Descripción</th>
                </tr>
            </thead>
            <tbody>
                {logs
                    .sort((a, b) => {
                        const dateA = new Date(a.date.split('/').reverse().join('/'));
                        const dateB = new Date(b.date.split('/').reverse().join('/'));
                        return dateB - dateA;
                    })
                    .map((cadaLog) => (
                        <React.Fragment key={cadaLog._id}>
                        <tr>
                            <td>{cadaLog.date}</td>
                            <td>{cadaLog.description}</td>
                        </tr>
                        </React.Fragment>
                ))}
            </tbody>
            </table>
        </div>
    </>
    )
}

export default Historial