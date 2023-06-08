import React from 'react'
import { Navigate, Route, Routes } from "react-router-dom";
import './App.css'
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';
import Administracion from './Pages/Administracion/Administracion';
import CerrarSesion from './Pages/CerrarSesion/CerrarSesion';
import EditarPerfil from './Pages/EditarPerfil/EditarPerfil';
import EditarPerfilAdmin from './Pages/EditarPerfilAdmin/EditarPerfilAdmin';
import Error404 from './Pages/Error404/Error404';
import Historial from './Pages/Historial/Historial';
import Inicio from './Pages/Inicio/Inicio';
import Login from './Pages/Login/Login';
import Perfil from './Pages/Perfil/Perfil';
import Ranking from './Pages/Ranking/Inicio/Ranking';
import RankingDirectivo from './Pages/Ranking/RankingDirectivo/RankingDirectivo';
import RecuperarContraseñaSeccion1 from './Pages/RecuperarContraseña/RecuperarContraseñaSeccion1/RecuperarContraseñaSeccion1';
import RecuperarContraseñaSeccion2 from './Pages/RecuperarContraseña/RecuperarContraseñaSeccion2/RecuperarContraseñaSeccion2';
import RespuestasTest1 from './Pages/RespuestasTest1/RespuestasTest1';
import FinalTestDirectivo from './Pages/TestDirectivo/Final/FinalTestDirectivo';
import IntroduccionTestDirectivo from './Pages/TestDirectivo/Introducción/IntroduccionTestDirectivo';
import TestDirectivoSeccion1 from './Pages/TestDirectivo/Seccion 1/TestDirectivoSeccion1';
import TestDirectivoSeccion2 from './Pages/TestDirectivo/Seccion 2/TestDirectivoSeccion2';
import TestDirectivoSeccion3 from './Pages/TestDirectivo/Seccion 3/TestDirectivoSeccion3';
import TestDirectivoSeccion4 from './Pages/TestDirectivo/Seccion 4/TestDirectivoSeccion4';
import TestDirectivoSeccion5 from './Pages/TestDirectivo/Seccion 5/TestDirectivoSeccion5';
import TestDirectivoSeccion6 from './Pages/TestDirectivo/Seccion 6/TestDirectivoSeccion6';

function App() {

  return (
    <>
    
    <NavBar />
    <Routes>
      <Route path="/Iniciar-sesion" element={<Login/>} />
      <Route path="/Cerrar-sesion" element={<CerrarSesion/>} />
      <Route path="/" element={<Inicio/>} />
      <Route path="/Perfil/:id" element={<Perfil/>} />
      <Route path="/Administracion/EditarPerfil/:id" element={<EditarPerfilAdmin/>} />
      <Route path="/Editar-perfil" element={<EditarPerfil/>} />
      <Route path="/Ranking/Inicio" element={<Ranking/>} />
      <Route path="/Ranking/Directivo" element={<RankingDirectivo/>} />
      <Route path="/Test/Dominio/Directivo" element={<IntroduccionTestDirectivo/>} />
      <Route path="/Test/Dominio/Directivo/1" element={<TestDirectivoSeccion1/>} />
      <Route path="/Test/Dominio/Directivo/2" element={<TestDirectivoSeccion2/>} />
      <Route path="/Test/Dominio/Directivo/3" element={<TestDirectivoSeccion3/>} />
      <Route path="/Test/Dominio/Directivo/4" element={<TestDirectivoSeccion4/>} />
      <Route path="/Test/Dominio/Directivo/5" element={<TestDirectivoSeccion5/>} />
      <Route path="/Test/Dominio/Directivo/6" element={<TestDirectivoSeccion6/>} />
      <Route path="/Test/Dominio/Directivo/Felicidades" element={<FinalTestDirectivo/>} />
      <Route path="/Administracion/Test/Directivo/Resultados/:id" element={<RespuestasTest1/>} />
      <Route path="/Recuperar-contraseña/Email" element={<RecuperarContraseñaSeccion1/>} />
      <Route path="/Recuperar-contraseña/Nueva-contraseña/:token" element={<RecuperarContraseñaSeccion2/>} />
      <Route path="/Administracion/Jugadores" element={<Administracion/>} />
      <Route path="/Historial/Acciones" element={<Historial/>} />
      <Route path="/404" element={<Error404/>} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
    <Footer/>
    
    </>

  )
}

export default App
