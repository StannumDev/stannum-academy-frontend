import React from 'react'
import logoStannum from '../../assets/LogoChico.png'
import { useLocation } from 'react-router-dom';
import './footer.css'

function Footer() {

  const location = useLocation();

  if (location.pathname !== '/Iniciar-sesion' && !location.pathname.includes('/Recuperar-contrase%C3%B1a')){
    return (
      <>
        <div className="footer text-center">
          <a href='/'><img src={logoStannum} className="footerImagen" alt="Logo Stannum Footer" /></a>
        </div>
      </>
    )
  }
}

export default Footer