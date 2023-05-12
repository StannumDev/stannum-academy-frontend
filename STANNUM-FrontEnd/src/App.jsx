import React from 'react'
import { Route, Routes } from "react-router-dom";
import './App.css'
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';
import Inicio from './Pages/Inicio/Inicio';
import Login from './Pages/Login/Login';
import InicioTestDirectivo from './Pages/TestDirectivo/Inicio/InicioTestDirectivo';
import TestDirectivoSeccion1 from './Pages/TestDirectivo/Seccion 1/TestDirectivoSeccion1';

function App() {

  return (

    <>
    {/* <NavBar /> */}
    <Routes>
      <Route path="/Iniciar-sesion" element={<Login/>} />
      <Route path="/" element={<Inicio/>} />
      <Route path="/Test/Dominio/Directivo" element={<InicioTestDirectivo/>} />
      <Route path="/Test/Dominio/Directivo/Seccion-1" element={<TestDirectivoSeccion1/>} />
    </Routes>
    <Footer/>
    
    </>

  )
}

export default App
