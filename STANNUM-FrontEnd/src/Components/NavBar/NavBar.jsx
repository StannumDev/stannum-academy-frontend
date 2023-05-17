import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../../assets/LogoChico.png';
import './navBar.css'
import 'animate.css';

function NavBar() {


    const location = useLocation();
    const [activeIndex, setActiveIndex] = useState(0);
    const [open, setOpen] = useState(false);
  
    useEffect(() => {
        
      if (location.pathname === '/') {
        setActiveIndex(0);
      }
      if (location.pathname.includes('/Ranking')) {
        setActiveIndex(1);
      }
      if (location.pathname === '/Perfil') {
        setActiveIndex(2);
      }
      if (location.pathname === '/Iniciar-sesion') {
        setActiveIndex(3);
      }
    }, [location.pathname]);

    if (location.pathname !== '/Iniciar-sesion' && !location.pathname.includes('/Recuperar-contrase%C3%B1a')) {
        return (
            <>
                <nav className="navbar navbar-expand-lg sticky-top animate__animated animate__fadeInDown">
                    <div className="container-fluid containerFluidNavBar">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarPrincipal" aria-controls="navbarPrincipal" aria-expanded="false" aria-label="Expandir" onClick={() => setOpen(!open)}>
                            <span className={`navbar-toggler-icon ${ open ? 'openNavBar' : '' }`}></span>
                        </button>
                        <div className=''>
                            <a className="navbar-brand text-end" href="/"><img src={logo} className='logoNavbar'/></a>
                        </div>
                        <div className="collapse navbar-collapse" id="navbarPrincipal">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className={`nav-item ${activeIndex === 0 ? 'active' : 'nonActive'}`}>
                                    <a className="nav-link linkNavbar" aria-current="page" href="/">Inicio</a>
                                </li>
                                <li className={`nav-item ${activeIndex === 1 ? 'active' : 'nonActive'}`}>
                                    <a className="nav-link linkNavbar" aria-current="page" href="/Ranking/Inicio">Ranking</a>
                                </li>
                                <li className={`nav-item ${activeIndex === 2 ? 'active' : 'nonActive'}`}>
                                    <a className="nav-link linkNavbar" aria-current="page" href="/Perfil">Mi Perfil</a>
                                </li>
                                <li className={`nav-item ${activeIndex === 3 ? 'active' : 'nonActive'}`}>
                                    <a className="nav-link linkNavbar" aria-current="page" href="/Iniciar-sesion">Iniciar Sesión</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}

export default NavBar