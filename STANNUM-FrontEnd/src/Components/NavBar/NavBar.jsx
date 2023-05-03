import React from 'react'
import './navBar.css'
import logo from '../../Images/LogoBlanco.png';
import 'animate.css';

function NavBar() {

  return (
    <>
        <nav className="navbar navbar-expand-lg sticky-top animate__animated animate__fadeInDown pt-3 pb-3">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarPrincipal" aria-controls="navbarPrincipal" aria-expanded="false" aria-label="Expandir">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className=''>
                    <a className="navbar-brand" href="/"><img src={logo} className='logoNavbar'/></a>
                </div>
                <div className="collapse navbar-collapse" id="navbarPrincipal">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link linkNavbar" aria-current="page" href="/"><i className="bi bi-house-fill"></i> Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link linkNavbar" href="/"><i className="bi bi-person-circle"></i> Perfil</a>
                        </li>               
                    </ul>
                </div>
            </div>
        </nav>
    </>

  )
}

export default NavBar