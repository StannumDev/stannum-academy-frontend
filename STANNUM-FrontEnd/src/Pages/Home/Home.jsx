import React from 'react'
import EmpresasEntrenadasHome from '../../Components/EmpresasEntrenadasHome/EmpresasEntrenadasHome';
import EstoEsStannumHome from '../../Components/EstoEsStannumHome/EstoEsStannumHome';
import FooterHome from '../../Components/FooterHome/FooterHome';
import ListoParaComenzarHome from '../../Components/ListoParaComenzarHome/ListoParaComenzarHome';
import LoQueDicenHome from '../../Components/LoQueDicenHome/LoQueDicenHome';
import NavBar from '../../Components/NavBar/NavBar';
import PortadaHome from '../../Components/PortadaHome/PortadaHome';
import ProductosHome from '../../Components/ProductosHome/ProductosHome';
import './home.css'

function Home() {

  document.body.classList.add('iniciooo');

  return (
    <>
      <NavBar/>
      <PortadaHome/>
      <EmpresasEntrenadasHome/>
      <EstoEsStannumHome/>
      <ProductosHome/>
      <LoQueDicenHome/>
      <ListoParaComenzarHome/>
      <FooterHome/>
    </>
  )
}

export default Home