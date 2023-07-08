import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from "axios";
import logo from '../../assets/LogoChico.png';
import loginIcon from '../../assets/loginIcon.png';
import Cookies from 'js-cookie'
import './navBar.css'
import 'animate.css';

function NavBar() {


    const location = useLocation();
    const [activeIndex, setActiveIndex] = useState(0);
    const [open, setOpen] = useState(false);
    const [user, setUser] = useState({});

    const token = Cookies.get('token');

    useEffect(() => {
        const getUser = async () =>{
        if (token) {
            const respuesta = await axios.post(`https://prueba-back-mateolohezic.up.railway.app/get-user/${token}`);
            if(respuesta.status === 200){
                setUser(respuesta.data)
            } else{
                window.location.replace('/Cerrar-sesion')
            }
        }}
        getUser()
    }, [token])
    
    useEffect(() => {
        
      if (location.pathname === '/') {
        setActiveIndex(0);
      }
      if (location.pathname.includes('/Ranking')) {
        setActiveIndex(1);
      }

    }, [location.pathname]);

    if (location.pathname !== '/Iniciar-sesion' && !location.pathname.includes('/Recuperar-contrase%C3%B1a') && location.pathname !== '/404') {
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
                            <a className="navbar-brand text-end" href="/"><img src={logo} className='logoNavbar' alt="Logo STANNUM"/></a>
                        </div>
                        <div className="collapse navbar-collapse" id="navbarPrincipal">
                            <ul className="navbar-nav me-auto mb-0">
                                <li className='nav-item active'>
                                    <a className="nav-link linkNavbar" aria-current="page" href="/">Inicio</a>
                                </li>                        
                                <li className='nav-item nonActive'>
                                    <a className="nav-link linkNavbar" aria-current="page" href="/">Información</a>
                                </li>                        
                                <li className='nav-item nonActive'>
                                    <a className="nav-link linkNavbar" aria-current="page" href="/">Nosotros</a>
                                </li>                        
                                <li className='nav-item nonActive'>
                                    <a className="nav-link linkNavbar" aria-current="page" href="/">Preguntas frecuentes</a>
                                </li>                        
                            </ul>
                            <ul className="navbar-nav ms-auto mb-0">
                                <li className='nav-item navLoginRegister navLoginButton'>
                                    <a className="nav-link" aria-current="page" href="/"><img src={loginIcon}/>Iniciar Sesión</a>
                                </li>                        
                                <li className='nav-item navLoginRegister'>
                                    <a className="nav-link" aria-current="page" href="/">Registrarse</a>
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