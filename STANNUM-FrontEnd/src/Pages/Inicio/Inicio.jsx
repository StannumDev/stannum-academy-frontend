import { useState, useEffect } from 'react';
import axios from "axios";
import ModalEditarPrimeraVez from '../../Components/ModalEditarPrimeraVez/ModalEditarPrimeraVez'
import Cookies from 'js-cookie'
import './inicio.css'

function Inicio() {

  const [user, setUser] = useState({});

  const token = Cookies.get('token');

  useEffect(() => {
      const getUser = async () =>{
      if (token) {
          const respuesta = await axios.post(`https://prueba-back-mateolohezic.up.railway.app/get-user/${token}`);
          setUser(respuesta.data)
      }}
      getUser()
  }, [token])

  return (
    <>
      <div className="bg"></div>
      <div className='d-flex flex-column align-items-center pb-5'>
        <div className='text-center tituloBienvenido'><h1>¡Bienvenido a</h1> <span>STANNUM Academy!</span></div>
        {user.name === "Undefined" || user.surname === "Undefined" || user.biography === "Undefined" || user.territory === "Undefined" || user.venture === "Undefined" || user.birthdate === "Undefined" ? (
          <ModalEditarPrimeraVez />
        ) : null}

        <div className='parrafoBienvenidaCentro text-center'><p>Este es el <b>centro de alto rendimiento</b> en donde podrás adquirir los conocimientos y las habilidades necesarias para llevar a tu emprendimiento al siguiente nivel.</p></div>
        <div className='text-center mt-4 tusPrimerosPasos'><h2>Tus primeros pasos</h2></div>
        <div className='parrafoPrimerosPasos text-center'>
          <p>
            {
              token ? <>Para poder comenzar tu camino dentro de STANNUM Academy es necesario que completes los siguientes Tests de Dominio, ¡la información obtenida de ellos nos permitirá construir tu plantilla de jugador!.</> : <>Para poder comenzar tu camino dentro de STANNUM Academy solicita acceso a una cuenta, y empieza a entrenar para sacar el <b>PRO</b> que tenes adentro!</>
            }
            
          </p>
        </div>
      </div>
      <div className='contenedorCardsTest'>
        <div className='text-center seleccioneTestTitulo'>Seleccione el Test que<span>desea responder</span></div>
        <div className='d-flex justify-content-evenly align-items-center flex-wrap cajaCardsTest'>
            <div className='cardTest'>
              <div className='tituloDominio tituloDominio1 text-center'>DOMINIO 1</div>
              <div className='subtituloDominio tituloDominio1 text-center'>DIRECTIVO</div>
              <hr className='hrDominio'/>
              {
                token ? (
                  user.dominioDirectivoTestInicial && user.dominioDirectivoTestInicial.totalScore !== "Undefined" ? (
                    <button className='botonDominio botonDominio1' disabled>
                      <i className="bi bi-check-circle-fill"></i>
                    </button>
                  ) : (
                    <a href='/Test/Dominio/Directivo'>
                      <button className='botonDominio botonDominio1'>Hacer el test</button>
                    </a>
                  )
                ) : (
                  <a href='https://stannum.com.ar/' target="_blank">
                    <button className='botonDominio botonDominio1'>Solicitar acceso</button>
                  </a>
                )
              }
            </div>
            <div className='cardTest'>
              <div className='tituloDominio tituloDominio2 text-center'>DOMINIO 2</div>
              <div className='subtituloDominio tituloDominio2 text-center'>TIEMPO</div>
              <hr className='hrDominio'/>
              <button className='botonDominio botonDominio2' disabled={true}>Próximamente</button>
            </div>
            <div className='cardTest'>
              <div className='tituloDominio tituloDominio3 text-center'>DOMINIO 3</div>
              <div className='subtituloDominio tituloDominio3 text-center'>COMUNICACIÓN</div>
              <hr className='hrDominio'/>
              <button className='botonDominio botonDominio3' disabled={true}>Próximamente</button>
            </div>
            <div className='cardTest'>
              <div className='tituloDominio tituloDominio4 text-center'>DOMINIO 4</div>
              <div className='subtituloDominio tituloDominio4 text-center'>DELEGACIÓN</div>
              <hr className='hrDominio'/>
              <button className='botonDominio botonDominio4' disabled={true}>Próximamente</button>
            </div>
            <div className='cardTest'>
              <div className='tituloDominio tituloDominio5 text-center'>DOMINIO 5</div>
              <div className='subtituloDominio tituloDominio5 text-center'>ORGANIZACIÓN</div>
              <hr className='hrDominio'/>
              <button className='botonDominio botonDominio5' disabled={true}>Próximamente</button>
            </div>
            <div className='cardTest'>
              <div className='tituloDominio tituloDominio6 text-center'>DOMINIO 6</div>
              <div className='subtituloDominio tituloDominio6 text-center'>PLANIFICACIÓN</div>
              <hr className='hrDominio'/>
              <button className='botonDominio botonDominio6' disabled={true}>Próximamente</button>
            </div>
        </div>
      </div>
      
    </>
  )
}

export default Inicio