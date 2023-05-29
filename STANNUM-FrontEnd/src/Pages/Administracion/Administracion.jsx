import { useState, useEffect } from 'react';
import axios from "axios";
import Cookies from 'js-cookie'
import './administracion.css'
import FilaUsuarioAdministracion from '../../Components/FilaUsuarioAdministracion/FilaUsuarioAdministracion';
import ModalCrearUsuario from '../../Components/ModalCrearUsuario/ModalCrearUsuario';

function Administracion() {

  const [users, setUsers] = useState([]);
  const token = Cookies.get('token');
  const adminToken = Cookies.get('adminToken');

  if(adminToken === undefined){
    window.location.replace('/Cerrar-sesion');
  }
  
  useEffect(() => {
    const verifyToken = async () =>{
      if (adminToken) {
          const respuesta = await axios.post(`https://prueba-back-mateolohezic.up.railway.app/verify-token`,
              {
                  adminToken
              }
          );
          if (respuesta.status === 206) {
              window.location.replace('/Cerrar-sesion');
          }
      } else{
          window.location.replace('/Cerrar-sesion');
      }
    }

    verifyToken()

    const getUser = async () =>{
    if (adminToken) {
        const respuesta = await axios.post(`https://prueba-back-mateolohezic.up.railway.app/get-users`,
          {
            token
          }
        );
        if (respuesta.status === 200) {
            setUsers(respuesta.data)
        } else{
            window.location.replace('/')
        }
    }}

    getUser()

}, [adminToken])


  return (
    <>
      <div className='tituloAdministracion'><h1>ADMINISTRACIÓN</h1></div>
      <div className='parrafoBienvenidaCentro text-center'><p>Información de los <b>jugadores</b>.</p></div>
      <div className='d-flex justify-content-end divBotonCrearUsuarioAdmin'>
        <ModalCrearUsuario/>
      </div>
      <div className="table-responsive tableAdmin">
        <table className="table table-striped-rows align-middle mb-0 text-center">
          <thead className='align-middle'>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
              <th scope="col">Correo</th>
              <th scope="col">Inicio</th>
              <th scope="col">Empresa</th>
              <th scope="col">Territorio</th>
              <th scope="col">Nacimiento</th>
              <th scope="col">Posición</th>
              <th scope="col">Pts. Total</th>
              <th scope="col">Pts. Directivo</th>
              <th scope="col">Estado</th>
              <th scope="col">Test 1</th>
              <th scope="col">Respuestas Test 1</th>
              <th scope="col">Perfil</th>
              <th scope="col">Opciones</th>
            </tr>
          </thead>
          <tbody>
          {
            users.map(usuario => <FilaUsuarioAdministracion key={usuario._id} usuario={usuario}/>)
          }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Administracion