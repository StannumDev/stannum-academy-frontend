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
      if (location.pathname === '/Perfil' || location.pathname.includes('/Editar-perfil')) {
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
                        <button className="navbar-toggler p-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarPrincipal" aria-controls="navbarPrincipal" aria-expanded="false" aria-label="Expandir" onClick={() => setOpen(!open)}>
                            <label className="burger" htmlFor="burgerButton">
                                <input type="checkbox" id="burgerButton"/>
                                <span></span>
                                <span></span>
                                <span></span>
                            </label>
                        </button>
                        <div className=''>
                            <a className="navbar-brand text-end" href="/"><img src={logo} className='logoNavbar'/></a>
                        </div>
                        <div className="collapse navbar-collapse" id="navbarPrincipal">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item nonActiveDropdown dropdown">
                                    <a className="nav-link linkNavbar dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Mateo Bernabé Lohezic
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-end">
                                        <li><a className="dropdown-item" href="/Perfil">Perfil</a></li>
                                        <li><a className="dropdown-item" href="/Ranking/Inicio">Ranking</a></li>
                                        <li><a className="dropdown-item ultimoItemDropdown" href="/Cerrar-sesion">Cerrar sesión</a></li>
                                    </ul>
                                </li>
                                <li className='nav-item botonNavbarResponsive nombreNavBarResponsive'>
                                    <span>Mateo Bernabé Lohezic</span>
                                </li>
                                <li className={`nav-item botonNavbarResponsive ${activeIndex === 0 ? 'active' : 'nonActive'}`}>
                                    <a className="nav-link linkNavbar" aria-current="page" href="/">Inicio</a>
                                </li>
                                <li className={`nav-item botonNavbarResponsive ${activeIndex === 1 ? 'active' : 'nonActive'}`}>
                                    <a className="nav-link linkNavbar" aria-current="page" href="/Ranking/Inicio">Ranking</a>
                                </li>
                                <li className={`nav-item botonNavbarResponsive ${activeIndex === 2 ? 'active' : 'nonActive'}`}>
                                    <a className="nav-link linkNavbar" aria-current="page" href="/Perfil">Perfil</a>
                                </li>
                                <li className={`nav-item botonNavbarResponsive ${activeIndex === 2 ? 'active' : 'nonActive'}`}>
                                    <a className="nav-link linkNavbar" aria-current="page" href="/Iniciar-sesion">Iniciar sesión</a>
                                </li>
                                {/* <li className='nav-item nonActive'>
                                    <a className="nav-link linkNavbar" aria-current="page" href="/Iniciar-sesion">Iniciar Sesión</a>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}

export default NavBar