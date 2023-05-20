import React from 'react'
import './rankingDirectivo.css'

function RankingDirectivo() {

    return (
        <>
            <div className='tituloRankingDirectivo'><h1>RANKING DE DOMINIOS</h1></div>
            <div className='subtituloRankingDirectivo'><h2>DOMINIO 1 - DIRECTIVO</h2></div>
            <div className="divBotonesRankingDominiosDirectivo divBotonesRankingDominiosDirectivoMostrar">
                <div className='divBotonRankingDominioChico'><a href="/Ranking/Directivo"><button className='botonRankingDominio1Activo' disabled={true}>Dominio 1</button></a></div>
                <div className='divBotonRankingDominioChico'><button className='botonRankingDominioDesactivado' disabled={true}>Dominio 2</button></div>
                <div className='divBotonRankingDominioChico'><button className='botonRankingDominioDesactivado' disabled={true}>Dominio 3</button></div>
                <div className='divBotonRankingDominioChico'><button className='botonRankingDominioDesactivado' disabled={true}>Dominio 4</button></div>
                <div className='divBotonRankingDominioChico'><button className='botonRankingDominioDesactivado' disabled={true}>Dominio 5</button></div>
                <div className='divBotonRankingDominioChico'><button className='botonRankingDominioDesactivado' disabled={true}>Dominio 6</button></div>
            </div>
            <div className='divGrandeRankingDirectivo d-flex flex-column'>


                <div className='row parteSuperiorRankingDirectivo mx-auto m-0 align-items-star'>
                    <div className='titulosRankingTablaDirectivo col-2 text-start m-0 p-0'><span>N°</span></div>
                    <div className='titulosRankingTablaDirectivo col-8 text-start m-0 p-0'><span>NOMBRE</span></div>
                    <div className='titulosRankingTablaDirectivo col-2 text-end m-0 p-0'><span>PTS</span></div>
                </div>


                <div className='tituloCategoriaRankingDirectivo'><h3>- CATEGORIA A -</h3></div>

                
                <div className='row jugadorARankingDirectivo mx-auto m-0 align-items-center'>
                    <div className='puestoARankingTablaDirectivo col-2 text-start m-0 p-0' ><span>1</span></div>
                    <div className='nombreARankingTablaDirectivo col-8 text-start m-0 p-0'><span>Maxi Rodriguez</span></div>
                    <div className='puntosARankingTablaDirectivo col-2 text-end m-0 p-0'><span>82</span></div>
                </div>
          

                <div className='tituloCategoriaRankingDirectivo'><h3>- CATEGORIA B1 -</h3></div>


                <div className='row jugadorB1RankingDirectivo mx-auto m-0 align-items-center'>
                    <div className='puestoBRankingTablaDirectivo col-2 text-start m-0 p-0'><span>7</span></div>
                    <div className='nombreBRankingTablaDirectivo col-8 text-start m-0 p-0'><span>Josefina Hübner</span></div>
                    <div className='puntosBRankingTablaDirectivo col-2 text-end m-0 p-0'><span>66</span></div>
                </div>
              

                <div className='tituloCategoriaRankingDirectivo'><h3>- CATEGORIA B2 -</h3></div>

                <div className='row jugadorB2RankingDirectivo mx-auto m-0 align-items-center'>
                    <div className='puestoBRankingTablaDirectivo col-2 text-start m-0 p-0'><span>13</span></div>
                    <div className='nombreBRankingTablaDirectivo col-8 text-start m-0 p-0'><span>Verónica Picco</span></div>
                    <div className='puntosBRankingTablaDirectivo col-2 text-end m-0 p-0'><span>50</span></div>
                </div>
              

                <div className='tituloCategoriaRankingDirectivo'><h3>- CATEGORIA C -</h3></div>
               
               
                <div className='row jugadorCRankingDirectivo mx-auto m-0 align-items-center'>
                    <div className='puestoBRankingTablaDirectivo col-2 text-start m-0 p-0'><span>19</span></div>
                    <div className='nombreBRankingTablaDirectivo col-8 text-start m-0 p-0'><span>Alejandro Diaz</span></div>
                    <div className='puntosBRankingTablaDirectivo col-2 text-end m-0 p-0'><span>32</span></div>
                </div>
               


                <div className='parteInferiorRankingDirectivo'>
                    <div className='fraseInferiorRankingTablaDirectivo'><span>MEJORA TU PUNTAJE Y ALCANZA UN LUGAR MAS ALTO</span></div>
                </div>
            </div>
        </>
    )
}

export default RankingDirectivo