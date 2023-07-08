import React from 'react'
import NavBar from '../../Components/NavBar/NavBar';
import PortadaHome from '../../Components/PortadaHome/PortadaHome';
import './home.css'

function Home() {

  document.body.classList.add('iniciooo');

  return (
    <>
      <NavBar/>
      <PortadaHome/>
    </>
  )
}

export default Home