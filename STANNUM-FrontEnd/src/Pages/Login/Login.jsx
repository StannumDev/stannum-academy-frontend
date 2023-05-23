import React from 'react'
import './login.css'
import imagenLogin from '../../assets/Login.png'
import logoStannum from '../../assets/LogoChico.png'
import FormularioLogin from '../../Components/FormularioLogin/FormularioLogin'

function Login() {

    document.body.classList.add('iniciar-sesion');

    return (
    <>
        <div className='row w-100 m-0 p-0 align-items-stretch vh-100'>
            <div className='col-6 p-0 imagenLogin'>
                <img src={imagenLogin} alt="Iniciar Sesion" className='w-100'/>
            </div>
            <div className='col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12 d-flex align-items-center formularioLoginDiv'>
                <a href='/' className='logoIniciarSesion'><img src={logoStannum} alt="Logo Stannum"/></a>
                <div className='divLoginFormulario'>
                    <div className='volverAlInicioLogin'>
                        <a href="/" className='text-decoration-none'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" className="bi bi-arrow-left-short svgInicioVolver" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
                            </svg>
                            <span>Volver al inicio</span>
                        </a>
                    </div>
                    <h1 className='fs-3 tituloInicioStannum'><span className='ingreseALogin'>Ingresa a</span><span className='stannumAcademyTituloLogin'> STANNUM Academy!</span></h1>
                    <h3 className='fs-6 completaTuInformacion mt-3'>Completa tu información para ingresar.</h3>
                    <FormularioLogin/>
                </div>
                <div className='d-flex align-items-center divSolicitarAcceso'>
                    <span className='textoNoTienesUnaCuenta'>¿No tienes una cuenta?</span>
                    <button className='botonSolicitarAcceso'>Solicitar acceso</button>
                </div>
            </div>
        </div>
    </>
    )
}

export default Login