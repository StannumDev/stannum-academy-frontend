import { useState, useEffect } from 'react';
import axios from "axios";
import Cookies from 'js-cookie'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import './rankingDirectivo.css'

function RankingDirectivo() {
    
    const [users, setUsers] = useState([]);
    const [usersCategoriaA, setUsersCategoriaA] = useState([]);
    const [usersCategoriaB1, setUsersCategoriaB1] = useState([]);
    const [usersCategoriaB2, setUsersCategoriaB2] = useState([]);
    const [usersCategoriaC, setUsersCategoriaC] = useState([]);
    const token = Cookies.get('token');

    if(token === undefined){
        window.location.replace('/Cerrar-sesion');
    }

    const categorizeUsers = (users) => {
        const categoriaA = users.filter(user => user.dominioDirectivoTestInicial.totalScore > 66).sort((a, b) => b.totalScore - a.totalScore);
        const categoriaB1 = users.filter(user => user.dominioDirectivoTestInicial.totalScore > 50 && user.dominioDirectivoTestInicial.totalScore <= 66).sort((a, b) => b.totalScore - a.totalScore);
        const categoriaB2 = users.filter(user => user.dominioDirectivoTestInicial.totalScore > 33 && user.dominioDirectivoTestInicial.totalScore <= 50).sort((a, b) => b.totalScore - a.totalScore);
        const categoriaC = users.filter(user => user.dominioDirectivoTestInicial.totalScore <= 33).sort((a, b) => b.totalScore - a.totalScore);
      
        return { categoriaA, categoriaB1, categoriaB2, categoriaC };
    };

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

        const getUsers = async () =>{

            if (token) {
                const respuesta = await axios.post(`https://prueba-back-mateolohezic.up.railway.app/get-users/`,
                    {
                        token
                    }
                );
                const categorizedUsers = await categorizeUsers(respuesta.data);
                setUsers(respuesta.data.sort((a, b) => b.totalScore - a.totalScore));
                setUsersCategoriaA(categorizedUsers.categoriaA);
                setUsersCategoriaB1(categorizedUsers.categoriaB1);
                setUsersCategoriaB2(categorizedUsers.categoriaB2);
                setUsersCategoriaC(categorizedUsers.categoriaC);
            } else{
                window.location.replace('/Cerrar-sesion');
            }
        }

        getUsers()
        
    }, [token])

    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <meta name="description" content="Ranking del Dominio 1: Directivo en STANNUM Academy" />
                    <meta name="keywords" content="stannum, academia, academy, ranking, usuarios, jugadores, dominio, 1, directivo, puntos, jugador, puesto" />
                    <meta name="subject" content="Ranking Dominio 1: Directivo" />
                    <meta name="theme-color" content="#3A3A3A" />
                    <title>Directivo - Ranking | STANNUM Academy</title>
                </Helmet>
            </HelmetProvider>
            <div className="bg"></div>
            <div className='tituloRankingDirectivo'><h1>RANKING DE DOMINIOS</h1></div>
            <div className='subtituloRankingDirectivo'><h2>DOMINIO 1 - DIRECTIVO</h2></div>
            <div className="divBotonesRankingDominiosDirectivo">
                <div className='divBotonRankingDominioChico'><a href="/Ranking/Directivo"><button className='botonRankingDominio1Activo' disabled={true}>Dominio 1</button></a></div>
                <div className='divBotonRankingDominioChico'><button className='botonRankingDominioDesactivado' disabled={true}>Dominio 2</button></div>
                <div className='divBotonRankingDominioChico'><button className='botonRankingDominioDesactivado' disabled={true}>Dominio 3</button></div>
                <div className='divBotonRankingDominioChico'><button className='botonRankingDominioDesactivado' disabled={true}>Dominio 4</button></div>
                <div className='divBotonRankingDominioChico'><button className='botonRankingDominioDesactivado' disabled={true}>Dominio 5</button></div>
                <div className='divBotonRankingDominioChico'><button className='botonRankingDominioDesactivado' disabled={true}>Dominio 6</button></div>
            </div>
            <div className='divGrandeRankingDirectivo d-flex flex-column'>
                <div className='row parteSuperiorRankingDirectivo mx-auto m-0 align-items-star'>
                    <div className='titulosRankingTablaDirectivo col-2 text-start m-0 p-0'><span>N°</span></div>
                    <div className='titulosRankingTablaDirectivo col-8 text-start m-0 p-0'><span>NOMBRE</span></div>
                    <div className='titulosRankingTablaDirectivo col-2 text-end m-0 p-0'><span>PTS</span></div>
                </div>
                {
                    usersCategoriaA.length !== 0 ? (
                        <>
                        <div className='tituloCategoriaRankingDirectivo'>
                            <h3>- CATEGORÍA A -</h3>
                        </div>
                        {usersCategoriaA.map((user) => {
                            const globalIndex = users.findIndex((dataUser) => dataUser._id === user._id);
                            return (
                            <a href={`/Perfil/${user._id}`} className="text-decoration-none" key={user._id}>
                                <div className='row jugadorARankingDirectivo mx-auto m-0 align-items-center'>
                                    <div className='puestoARankingTablaDirectivo puestoTamañoRankingTablaDirectivo col-1 text-start m-0 p-0'>
                                    <span>{globalIndex + 1}</span>
                                    </div>
                                    <div className='nombreARankingTablaDirectivo nombreTamañoRankingTablaDirectivo col-10 text-start m-0 p-0 py-2 pe-1'>
                                    <span>{user.name} {user.surname}</span>
                                    </div>
                                    <div className='puntosARankingTablaDirectivo puntosTamañoRankingTablaDirectivo col-1 text-end m-0 p-0'>
                                    <span>{user.dominioDirectivoTestInicial.totalScore}</span>
                                    </div>
                                </div>
                            </a>
                            );
                        })}
                        </>
                    ) : (
                        <></>
                    )
                }
                {
                    usersCategoriaB1.length !== 0 ? 
                    <>
                    <div className='tituloCategoriaRankingDirectivo'>
                        <h3>- CATEGORÍA B1 -</h3>
                    </div>
                    {usersCategoriaB1.map((user) => {
                        const globalIndex = users.findIndex((dataUser) => dataUser._id === user._id);
                        return (
                        <a href={`/Perfil/${user._id}`} className="text-decoration-none" key={user._id}>
                            <div className='row jugadorBCRankingDirectivo mx-auto m-0 align-items-center'>
                                <div className='puestoBRankingTablaDirectivo puestoTamañoRankingTablaDirectivo col-1 text-start m-0 p-0'>
                                    <span>{globalIndex + 1}</span>
                                </div>
                                <div className='nombreBRankingTablaDirectivo nombreTamañoRankingTablaDirectivo col-10 text-start m-0 p-0'>
                                    <span>{user.name} {user.surname}</span>
                                </div>
                                <div className='puntosBRankingTablaDirectivo puntosTamañoRankingTablaDirectivo col-1 text-end m-0 p-0'>
                                    <span>{user.dominioDirectivoTestInicial.totalScore}</span>
                                </div>
                            </div>
                        </a>
                        );
                    })}
                    </> : <></>
                }
                {
                    usersCategoriaB2.length !== 0 ? 
                    <>
                    <div className='tituloCategoriaRankingDirectivo'>
                        <h3>- CATEGORÍA B2 -</h3>
                    </div>
                    {usersCategoriaB2.map((user) => {
                        const globalIndex = users.findIndex((dataUser) => dataUser._id === user._id);
                        return (
                        <a href={`/Perfil/${user._id}`} className="text-decoration-none" key={user._id}>
                            <div className='row jugadorBCRankingDirectivo mx-auto m-0 align-items-center'>
                                <div className='puestoBRankingTablaDirectivo puestoTamañoRankingTablaDirectivo col-1 text-start m-0 p-0'>
                                    <span>{globalIndex + 1}</span>
                                </div>
                                <div className='nombreBRankingTablaDirectivo nombreTamañoRankingTablaDirectivo col-10 text-start m-0 p-0'>
                                    <span>{user.name} {user.surname}</span>
                                </div>
                                <div className='puntosBRankingTablaDirectivo puntosTamañoRankingTablaDirectivo col-1 text-end m-0 p-0'>
                                    <span>{user.dominioDirectivoTestInicial.totalScore}</span>
                                </div>
                            </div>
                        </a>
                        );
                    })}
                    </> : <></>
                }
                {
                    usersCategoriaC.length !== 0 ? 
                    <>
                    <div className='tituloCategoriaRankingDirectivo'>
                        <h3>- CATEGORÍA C -</h3>
                    </div>
                    {usersCategoriaC.map((user) => {
                        const globalIndex = users.findIndex((dataUser) => dataUser._id === user._id);
                        return (
                        <a href={`/Perfil/${user._id}`} className="text-decoration-none" key={user._id}>
                            <div className='row jugadorBCRankingDirectivo mx-auto m-0 align-items-center'>
                                <div className='puestoBRankingTablaDirectivo puestoTamañoRankingTablaDirectivo col-1 text-start m-0 p-0'>
                                    <span>{globalIndex + 1}</span>
                                </div>
                                <div className='nombreBRankingTablaDirectivo nombreTamañoRankingTablaDirectivo col-10 text-start m-0 p-0'>
                                    <span>{user.name} {user.surname}</span>
                                </div>
                                <div className='puntosBRankingTablaDirectivo puntosTamañoRankingTablaDirectivo col-1 text-end m-0 p-0'>
                                    <span>{user.dominioDirectivoTestInicial.totalScore}</span>
                                </div>
                            </div>
                        </a>
                        );
                    })}
                    </> : <></>
                }
                <div className='parteInferiorRankingDirectivo'>
                    <span>MEJORA TU PUNTAJE Y ALCANZA UN LUGAR MAS ALTO</span>
                </div>
            </div>
        </>
    )
}

export default RankingDirectivo