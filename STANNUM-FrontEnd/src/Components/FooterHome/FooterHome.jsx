import React from 'react'
import './footerHome.css'
import logo from '../../assets/LogoChico.png'
import instagram from '../../assets/footerHomeInstagram.png'
import youtube from '../../assets/footerHomeYoutube.png'
import facebook from '../../assets/footerHomeFacebook.png'

function FooterHome() {
  return (
    <>
        <div className='contenedorFooterHome'>
            <div className='logoFooterHome'><a href="/"><img src={logo} alt="STANNUM Game" /></a></div>
            <div className='enlacesFooterHome'>
                <h4>ACERCA DE</h4>
                <a href="/">Información</a>
                <a href="/">Nosotros</a>
                <a href="/">Preguntas frecuentes</a>
            </div>
            <div className='redesSocialesFooterHome'>
                <h4>NUESTRAS REDES</h4>
                <a href='https://www.instagram.com/stannum.ar/' target="_blank" className='itemRedesFooterHome'>
                    <img src={instagram} alt="Instagram STANNUM Game" />
                    <span>Instagram</span>
                </a>
                <a href='https://www.youtube.com/@martinmerlini' target="_blank" className='itemRedesFooterHome'>
                    <img src={youtube} alt="YouTube STANNUM Game" />
                    <span>YouTube</span>
                </a>
                <a href='https://www.facebook.com/stannumAR' target="_blank" className='itemRedesFooterHome'>
                    <img src={facebook} alt="Facebook STANNUM Game" />
                    <span>Facebook</span>
                </a>
            </div>
            <div className='contactoFooterHome'>
                <h4>CONTACTO</h4>
                <span>Centro de alto rendimiento Stannum - Oficina 1</span>
                <span>Hilton Abasto (Miguel Lillo365), San Miguel de Tucumán</span>
            </div>
        </div>
    </>
  )
}

export default FooterHome