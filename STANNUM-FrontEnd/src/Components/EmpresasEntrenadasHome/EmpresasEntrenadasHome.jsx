import React from 'react'
import './empresasEntrenadasHome.css'
import empresasEntrenadas from '../../assets/empresasEntrenadas.png'

function EmpresasEntrenadasHome() {
  return (
    <>
        <div className='contenedorEmpresasEntrenadas'>
            <div className='empresasEntrenadasTitulo'><h4>EMPRESAS QUE ENTRENARON Y ENTRENAN CON STANNUM</h4></div>
            <img src={empresasEntrenadas} alt="Empresas Entrenadas por STANNUM" />
        </div>
    </>
  )
}

export default EmpresasEntrenadasHome