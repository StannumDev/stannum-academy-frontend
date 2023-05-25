import React from 'react'
import { Route, Routes } from "react-router-dom";
import './App.css'
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';
import EditarPerfil from './Pages/EditarPerfil/EditarPerfil';
import Inicio from './Pages/Inicio/Inicio';
import Login from './Pages/Login/Login';
import Perfil from './Pages/Perfil/Perfil';
import Ranking from './Pages/Ranking/Inicio/Ranking';
import RankingDirectivo from './Pages/Ranking/RankingDirectivo/RankingDirectivo';
import RecuperarContraseñaSeccion1 from './Pages/RecuperarContraseña/RecuperarContraseñaSeccion1/RecuperarContraseñaSeccion1';
import RecuperarContraseñaSeccion2 from './Pages/RecuperarContraseña/RecuperarContraseñaSeccion2/RecuperarContraseñaSeccion2';
import InicioTestDirectivo from './Pages/TestDirectivo/Inicio/InicioTestDirectivo';
import TestDirectivoSeccion1 from './Pages/TestDirectivo/Seccion 1/TestDirectivoSeccion1';
import TestDirectivoSeccion2 from './Pages/TestDirectivo/Seccion 2/TestDirectivoSeccion2';
import TestDirectivoSeccion3 from './Pages/TestDirectivo/Seccion 3/TestDirectivoSeccion3';
import TestDirectivoSeccion4 from './Pages/TestDirectivo/Seccion 4/TestDirectivoSeccion4';
import TestDirectivoSeccion5 from './Pages/TestDirectivo/Seccion 5/TestDirectivoSeccion5';

function App() {

  return (
    <>
    
    <NavBar />
    <Routes>
      <Route path="/Iniciar-sesion" element={<Login/>} />
      <Route path="/" element={<Inicio/>} />
      <Route path="/Perfil" element={<Perfil/>} />
      <Route path="/Editar-perfil" element={<EditarPerfil/>} />
      <Route path="/Ranking/Inicio" element={<Ranking/>} />
      <Route path="/Ranking/Directivo" element={<RankingDirectivo/>} />
      <Route path="/Test/Dominio/Directivo" element={<InicioTestDirectivo/>} />
      <Route path="/Test/Dominio/Directivo/1" element={<TestDirectivoSeccion1/>} />
      <Route path="/Test/Dominio/Directivo/2" element={<TestDirectivoSeccion2/>} />
      <Route path="/Test/Dominio/Directivo/3" element={<TestDirectivoSeccion3/>} />
      <Route path="/Test/Dominio/Directivo/4" element={<TestDirectivoSeccion4/>} />
      <Route path="/Test/Dominio/Directivo/5" element={<TestDirectivoSeccion5/>} />
      <Route path="/Recuperar-contraseña/Email" element={<RecuperarContraseñaSeccion1/>} />
      <Route path="/Recuperar-contraseña/Nueva-contraseña" element={<RecuperarContraseñaSeccion2/>} />
    </Routes>
    <Footer/>
    
    </>

  )
}

export default App
