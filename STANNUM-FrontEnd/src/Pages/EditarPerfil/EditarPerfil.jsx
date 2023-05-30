import { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import Cookies from 'js-cookie'
import './editarPerfil.css'
import axios from "axios";
import FotoDePerfil from '../../assets/UserDefecto.png'
import { Helmet, HelmetProvider } from 'react-helmet-async'

function EditarPerfil() {

    const [loading, setLoading] = useState(false);
    const [foto, setFoto] = useState("");
    const { register, handleSubmit, formState: { errors }, setValue } = useForm({ mode: "onBlur" });
    const [archivoSubido, setArchivoSubido] = useState(null);
    const [user, setUser] = useState({});

    const token = Cookies.get('token');
        
    if(token === undefined){
        window.location.replace('/Cerrar-sesion');
    }

    const formatDate = (fecha) =>{
        if (fecha) {
            const [day, month, year] = fecha.split('/');
            return `${year}-${month}-${day}`;        
        }
    }

    useEffect(() => {
        const getUser = async () =>{
        if (token) {
            const respuesta = await axios.post(`https://prueba-back-mateolohezic.up.railway.app/get-user/${token}`);
            setUser(respuesta.data)
            if (respuesta.data.name !== "Undefined"){
                setValue("name", respuesta.data.name);
            }
            if (respuesta.data.surname !== "Undefined"){
                setValue("surname", respuesta.data.surname);
            }
            if (respuesta.data.venture !== "Undefined"){
                setValue("venture", respuesta.data.venture);
            }
            if (respuesta.data.birthdate !== "Undefined"){
                setValue("birthdate", formatDate(respuesta.data.birthdate));
            }
            if (respuesta.data.territory !== "Undefined"){
                setValue("territory", respuesta.data.territory);
            }
            if (respuesta.data.biography !== "Undefined"){
                setValue("biography", respuesta.data.biography);
            }
        }}
        getUser()

        const getPhoto = async () => {
            try {
              const response = await axios.get(`https://prueba-back-mateolohezic.up.railway.app/get-photo/${token}`, {
                responseType: 'blob',
              });
              if (response.status === 200) {              
                const url = window.URL.createObjectURL(new Blob([response.data]));
                setFoto(url)
              }
            } catch (error) {
              console.error(error);
            }
        };

        getPhoto();
    }, [token])

    const onSubmit = async (data) => {
        setLoading(true);
        const fecha = data.birthdate.split('-');
        const nacimiento = `${fecha[2]}/${fecha[1]}/${fecha[0]}`;
        const respuesta = await axios.patch(`https://prueba-back-mateolohezic.up.railway.app/patch-user`,
            {
                token,
                id: user._id,
                name: data.name.trim(),
                surname: data.surname.trim(),
                venture: data.venture.trim(),
                territory: data.territory.trim(),
                birthdate: nacimiento,
                biography: data.biography.trim(),
            }
        );

        if (data.photo) {
            await axios.post(
                "https://prueba-back-mateolohezic.up.railway.app/upload-photo",
                {
                    file: data.photo,
                    userId: user._id
                },
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
        }

        if (respuesta.status === 200) {
            window.location.replace(`/Perfil/${user._id}`);        
        }
        if (respuesta.status === 206) {
            setLoading(false);
            window.location.replace(`/Cerrar-sesion`);        
        }
        setLoading(false)
    };

    const handleFileChange = (event) => {
        if (event.target.files[0]){
            const file = event.target.files[0];
            setValue("photo", file)
            setArchivoSubido(URL.createObjectURL(file));
        }
      };

    return (
    <>
        <HelmetProvider>
            <Helmet>
                <meta name="description" content="Editar mi perfil STANNUM Academy" />
                <meta name="keywords" content="stannum, academia, academy, editar, perfil, jugadores, usuario, foto, nombre, datos" />
                <meta name="subject" content="Editar mi perfil" />
                <meta name="theme-color" content="#3A3A3A" />
                <title>Editar mi perfil | STANNUM Academy</title>
            </Helmet>
        </HelmetProvider>
        <div className="bg"></div>
        <div className='tituloPerfil'><h1>EDITAR MI PERFIL</h1></div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='row rowEditarPerfil'>
                <div className='divFotoJugadorPerfil divFotoJugadorPerfilEditarPerfil'>
                    <label htmlFor="photo" className='botonFotoEditarPerfil'>
                    <i className="bi bi-pencil-square"></i>
                    <input
                        id="photo"
                        type="file"
                        accept="image/*"
                        style={{ display: 'none' }}
                        onChange={handleFileChange}
                    />
                    </label>
                    <div className='contenedorImagen'>
                    <img src={archivoSubido || foto || FotoDePerfil} alt="Perfil Stannum" />
                    </div>
                </div>
                <div className='cajaFormularioEditarPerfil'>
                    <div className="row rowEditarPerfilInput">
                        <div className='form-group col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
                            <label htmlFor="name" className='labelFormEditarPerfil'>Nombre</label>
                            <input
                                autoComplete='false'
                                id='name'
                                type="text"
                                className={`inputEditarPerfil form-control  mt-2`}
                                {...register("name", {
                                    required: false,
                                    maxLength: 40,
                                })}
                            />     
                            {errors.name && errors.name.type === "maxLength" && (
                                <p className="text-danger mt-2 ms-1 fs-6">No puede contener mas de 40 caracteres.</p>
                            )}             
                        </div>
                        <div className='form-group col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
                            <label htmlFor="surname" className='labelFormEditarPerfil'>Apellido</label>
                            <input
                                id='surname'
                                type="text"
                                className={`inputEditarPerfil form-control mt-2`}
                                {...register("surname", { required: false, maxLength: 40 })}
                            />
                            {errors.surname && errors.surname.type === "maxLength" && (
                                <p className="text-danger mt-2 ms-1 fs-6">No puede contener mas de 40 caracteres.</p>
                            )}
                        </div>
                    </div>
                    <div className="row rowEditarPerfilInput">
                        <div className='form-group col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
                            <label htmlFor="venture" className='labelFormEditarPerfil'>Emprendimiento</label>
                            <input
                                autoComplete='false'
                                id='venture'
                                type="text"
                                className={`inputEditarPerfil form-control  mt-2`}
                                {...register("venture", {
                                    required: false,
                                    maxLength: 40,
                                })}
                            />
                            {errors.venture && errors.venture.type === "maxLength" && (
                                <p className="text-danger mt-2 ms-1 fs-6">No puede contener mas de 40 caracteres.</p>
                            )}
                        </div>
                        <div className='form-group col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
                            <label htmlFor="birthdate" className='labelFormEditarPerfil'>Nacimiento</label>
                            <input
                                autoComplete='false'
                                id='birthdate'
                                type="date"
                                className={`inputEditarPerfil form-control  mt-2`}
                                {...register("birthdate", {
                                    required: false,
                                    maxLength: 40,
                                })}
                            />
                            {errors.birthdate && errors.birthdate.type === "maxLength" && (
                                <p className="text-danger mt-2 ms-1 fs-6">No puede contener mas de 40 caracteres.</p>
                            )}
                        </div>
                    </div>
                    <div className="row rowEditarPerfilInput">
                        <div className='form-group col-12'>
                            <label htmlFor="territory" className='labelFormEditarPerfil'>Territorio</label>
                            <input
                                autoComplete='false'
                                id='territory'
                                type="text"
                                className={`inputEditarPerfil form-control  mt-2`}
                                {...register("territory", {
                                    required: false,
                                    maxLength: 40,
                                })}
                            />
                            {errors.territory && errors.territory.type === "maxLength" && (
                                <p className="text-danger mt-2 ms-1 fs-6">No puede contener mas de 40 caracteres.</p>
                            )}
                        </div>
                    </div>
                    <div className="row rowEditarPerfilInput">
                        <div className='form-group col-12'>
                            <label htmlFor="biography" className='labelFormEditarPerfil'>Biografía</label>
                            <textarea
                                autoComplete='false'
                                id='biography'
                                type="text"
                                className={`inputEditarPerfil form-control  mt-2`}
                                {...register("biography", {
                                    required: false,
                                    maxLength: 350,
                                })}
                            />
                            {errors.biography && errors.biography.type === "maxLength" && (
                                <p className="text-danger mt-2 ms-1 fs-6">No puede contener mas de 350 caracteres.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className='botonesEditarPerfil'>
                <a href={`Perfil/${user._id}`} className='descartarEditarPerfil'><button  type='button'>Descartar cambios</button></a>
                <button className='confirmarEditarPerfil' type='submit'>
                    {loading ? (
                        <span
                            className="spinner-border spinner-border-sm mr-2"
                            role="status"
                            aria-hidden="true"
                        ></span>
                    ) : (
                        <span>
                            Guardar cambios
                        </span>
                    )}
                </button>
            </div>
        </form>        
    </>
    )
}

export default EditarPerfil