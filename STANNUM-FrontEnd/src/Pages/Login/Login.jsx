import React from 'react'
import './login.css'
import imagenLogin from '../../assets/Login.png'
import iconoStannum from '../../assets/LogoColor.png'
import FormularioLogin from '../../Components/FormularioLogin/FormularioLogin'

function Login() {
  return (
    <>
        <div className='row w-100 align-items-stretch vh-100'>
            <div className='col-6 p-0'>
                <img src={imagenLogin} alt="Iniciar Sesion" className='w-100 imagenLogin'/>
            </div>
            <div className='col-6 bg-white d-flex align-items-center formularioLoginDiv'>
                <div>
                    <h1 className='fs-3'><span className='ingreseALogin'>Ingresa a</span> <span className='stannumAcademyTituloLogin'>Stannum Academy!</span></h1>
                    <h3 className='fs-6 completaTuInformacion mt-3'>Completa tu información para ingresar</h3>
                    <FormularioLogin/>
                </div>
                <div className='d-flex justify-content-end gap-3 align-items-center divSolicitarAcceso'>
                    <span className='textoNoTienesUnaCuenta'>¿No tienes una cuenta?</span>
                    <button className='botonSolicitarAcceso'>Solicitar acceso</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login