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
              <img src={logoStannum} className="footerImagen" alt="Logo Stannum Footer" />
              {/* <span className='text-muted'><small>&copy; 2023 <b>XPLAY</b> - Todos los derechos reservados - Powered by <b>Coilin</b> - V 1.0.8</small></span> */}
          </div>
      </>
    )
  }
}

export default Footer