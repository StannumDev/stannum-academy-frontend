import React, { useEffect } from 'react';
import './modalEditarPrimeraVez.css';

function ModalEditarPrimeraVez() {

    useEffect(() => {
        const modalElement = document.getElementById('completarDatosModal');

        const modal = new bootstrap.Modal(modalElement);
        modal.show();

        const closeButton = modalElement.querySelector('.completarPerfilDespues');
        closeButton.addEventListener('click', () => {
        modal.hide();
        });
    }, []);

    return (
    <>
      <div className="modal fade" id="completarDatosModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="completarDatosModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content cuerpoModal">
            <div className="modal-body d-flex flex-column justify-content-center align-items-center p-0">
              <div className='completarPerfilTitulo'><h3>¡Completa tu perfil!</h3></div>
              <div className='completarPerfilParrafo'><p>Ingresa tus datos para poder generar una plantilla de jugador a tu medida</p></div>
              <div className='completarPerfilBotones d-flex'>
                <button className='completarPerfilDespues align-middle' data-bs-dismiss="modal" aria-label="Close">Hacerlo luego</button>
                <a href='/Editar-perfil' className='completarPerfilCompletar d-flex justify-content-center align-items-middle text-decoration-none'><button>Editar perfil</button></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    );   
}

export default ModalEditarPrimeraVez;