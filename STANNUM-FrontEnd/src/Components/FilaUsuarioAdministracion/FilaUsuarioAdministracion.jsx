import React from 'react'
import axios from 'axios'
import Swal from "sweetalert2";
import './filaUsuarioAdministracion.css'

function FilaUsuarioAdministracion(usuario) {

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: "botonConfirmarAlert",
            cancelButton: "botonCancelarAlert",
        },
        buttonsStyling: false,
    });

    const ApretadoBorrar = async () => {
        swalWithBootstrapButtons
            .fire({
                title: `¿Estas seguro que quieres eliminar este usuario?`,
                text: "¡No podrás deshacer esto!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Confirmar",
                cancelButtonText: "Cancelar",
                reverseButtons: true,
            })
            .then(async (result) => {
                if (result.isConfirmed) {
                    const swalLoading = Swal.fire({
                        title: "Procesando... ¡No cierre esta ventana!",
                        allowOutsideClick: false,
                        allowEscapeKey: false,
                        didOpen: () => {
                            Swal.showLoading();
                        },
                    });
                    await borrarUsuario();
                    swalLoading.close();
                    swalWithBootstrapButtons
                    .fire(
                        "¡Usuario eliminado!",
                        "Se elimino el usuario con éxito.",
                        "success"
                    )
                    .then(() => {
                        window.location.reload(true);
                    });
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    swalWithBootstrapButtons.fire(
                        "Cancelado",
                        "¡Estuvo cerca!",
                        "error"
                    );
                }
            }
        );
    };
    
    const borrarUsuario = async () => {
        await axios.delete(`https://prueba-back-mateolohezic.up.railway.app/delete-user`, {
            data: {
                id: usuario.usuario._id
            }
        })
        .catch((error) => {
            console.error(error);
        })
    }
    
    const ApretadoBan = async () => {
        swalWithBootstrapButtons
            .fire({
                title: `¿Estas seguro que quieres suspender a este usuario?`,
                text: "¡No podra iniciar sesión!. Luego podrás reactivarlo.",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Confirmar",
                cancelButtonText: "Cancelar",
                reverseButtons: true,
            })
            .then(async (result) => {
                if (result.isConfirmed) {
                    const swalLoading = Swal.fire({
                        title: "Procesando... ¡No cierre esta ventana!",
                        allowOutsideClick: false,
                        allowEscapeKey: false,
                        didOpen: () => {
                            Swal.showLoading();
                        },
                    });
                    await estadoUser();
                    swalLoading.close();
                    swalWithBootstrapButtons
                    .fire(
                        "¡Usuario suspendido!",
                        "Se suspendió el usuario con éxito.",
                        "success"
                    )
                    .then(() => {
                        window.location.reload(true);
                    });
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    swalWithBootstrapButtons.fire(
                        "Cancelado",
                        "¡Estuvo cerca!",
                        "error"
                    );
                }
            }
        );
    };
        
    const ApretadoActivar = async () => {
        swalWithBootstrapButtons
            .fire({
                title: `¿Estas seguro que quieres reactivar a este usuario?`,
                text: "Esto le permitirá volver a iniciar sesión.",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Confirmar",
                cancelButtonText: "Cancelar",
                reverseButtons: true,
            })
            .then(async (result) => {
                if (result.isConfirmed) {
                    const swalLoading = Swal.fire({
                        title: "Procesando... ¡No cierre esta ventana!",
                        allowOutsideClick: false,
                        allowEscapeKey: false,
                        didOpen: () => {
                            Swal.showLoading();
                        },
                    });
                    await estadoUser();
                    swalLoading.close();
                    swalWithBootstrapButtons
                    .fire(
                        "¡Usuario reactivado!",
                        "Se reactivo el usuario con éxito.",
                        "success"
                    )
                    .then(() => {
                        window.location.reload(true);
                    });
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    swalWithBootstrapButtons.fire(
                        "Cancelado",
                        "¡Estuvo cerca!",
                        "error"
                    );
                }
            }
        );
    };
    
    const estadoUser = async () => {
        await axios.patch(`https://prueba-back-mateolohezic.up.railway.app/change-user-status`, {
            id: usuario.usuario._id
        })
        .catch((error) => {
            console.error(error);
        })
    }

    return (
        <>
        <tr>    
            <td>{usuario.usuario.name === 'Undefined' ? <>-</> : usuario.usuario.name}</td>
            <td>{usuario.usuario.surname === 'Undefined' ? <>-</> : usuario.usuario.surname}</td>
            <td>{usuario.usuario.email}</td>
            <td>{usuario.usuario.startDate}</td>
            <td>{usuario.usuario.venture === 'Undefined' ? <>-</> : usuario.usuario.venture}</td>
            <td>{usuario.usuario.territory === 'Undefined' ? <>-</> : usuario.usuario.territory}</td>
            <td>{usuario.usuario.birthdate === 'Undefined' ? <>-</> : usuario.usuario.birthdate}</td>
            <td>{usuario.usuario.rankingPosition === 'Undefined' ? <>-</> : usuario.usuario.rankingPosition}</td>
            <td>{usuario.usuario.totalScore === '0' ? <>-</> : usuario.usuario.totalScore}</td>
            <td>{usuario.usuario.dominioDirectivoTestInicial.totalScore === 'Undefined' ? <>-</> : usuario.usuario.dominioDirectivoTestInicial.totalScore}</td>
            <td>{usuario.usuario.status === 'active' ? <>Miembro</> : <>Suspendido</>}</td>
            <td>{usuario.usuario.questionnaire1StartEnabled === true ? <>Pendiente</> : <>Realizado</>}</td>
            <td>
                {usuario.usuario.dominioDirectivoTestInicial.totalScore === "Undefined" ? (
                    <button className='botonIrAlTestAdminDesactivado' disabled>Pendiente</button>
                ) : (
                    <a href={`/Administracion/Test/Directivo/Resultados/${usuario.usuario._id}`}>
                    <button className='botonIrAlTestAdmin'>Ver</button>
                    </a>
                )}
            </td>
            <td><a href={`/Perfil/${usuario.usuario._id}`}><button className='botonIrAlPerfilAdmin'>Ir al perfil</button></a></td>
            <td>
                <div className='d-flex justify-content-between gap-2'>
                    <a href={`/Administracion/EditarPerfil/${usuario.usuario._id}`}><button className='botonIrAlPerfilAdmin'><i className="bi bi-pencil-square"></i></button></a>
                    {
                        usuario.usuario.status === 'active' ?
                        <>
                            <button className='botonBorrarUsuarioAdmin' onClick={ApretadoBan}><i className="bi bi-person-fill-slash"></i></button>
                        </>
                        : <>
                            <button className='botonIrAlTestAdmin' onClick={ApretadoActivar}><i className="bi bi-person-fill-check"></i></button>
                        </>
                    }
                    <button className='botonBorrarUsuarioAdmin' onClick={ApretadoBorrar}><i className="bi bi-trash-fill"></i></button>
                </div>
            </td>
        </tr>
        </>
    )
}

export default FilaUsuarioAdministracion