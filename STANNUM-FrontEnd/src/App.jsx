import React from 'react'
import { Route, Routes } from "react-router-dom";
import './App.css'
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';
import Inicio from './Pages/Inicio/Inicio';
import Login from './Pages/Login/Login';
import TestDirectivo from './Pages/TestDirectivo/TestDirectivo';

function App() {

  return (

    <>
    {/* <NavBar /> */}
    <Routes>
      <Route path="/Iniciar-sesion" element={<Login/>} />
      <Route path="/" element={<Inicio/>} />
      <Route path="/Test/Dominio/Directivo" element={<TestDirectivo/>} />
    </Routes>
    <Footer/>
    
    </>

  )
}

export default App
