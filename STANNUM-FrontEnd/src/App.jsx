import React from 'react'
import { Route, Routes } from "react-router-dom";
import './App.css'
import NavBar from './Components/NavBar/NavBar';
import Inicio from './Pages/Inicio/Inicio';
import Test from './Pages/Test/test';

function App() {

  return (

    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<Inicio/>} />
      <Route path="/Test" element={<Test/>} />
    </Routes>
    
    </>

  )
}

export default App
