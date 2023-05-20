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
            <div className='divGrandeRankingDirectivo'>
                <div className='d-flex parteSuperiorRankingDirectivo'>
                    <div className='titulosRankingTablaDirectivo'><span>N°</span></div>
                    <div className='titulosRankingTablaDirectivo flex-fill ms-5'><span>NOMBRE</span></div>
                    <div className='titulosRankingTablaDirectivo'><span>PTS</span></div>
                </div>
                <div className='tituloCategoriaRankingDirectivo'><h3>- CATEGORIA A -</h3></div>
                <div className='d-flex jugadorARankingDirectivo align-items-center'>
                    <div className='puestoARankingTablaDirectivo numeroJugadorRankingDirectivo' ><span>1</span></div>
                    <div className='nombreARankingTablaDirectivo flex-fill ms-5'><span>Maxi Rodriguez</span></div>
                    <div className='puntosARankingTablaDirectivo'><span>82</span></div>
                </div>
                <div className='d-flex jugadorARankingDirectivo align-items-center'>
                    <div className='puestoARankingTablaDirectivo numeroJugadorRankingDirectivo'><span>2</span></div>
                    <div className='nombreARankingTablaDirectivo flex-fill ms-5'><span>Pablo Hatem</span></div>
                    <div className='puntosARankingTablaDirectivo'><span>78</span></div>
                </div>
                <div className='d-flex jugadorARankingDirectivo align-items-center'>
                    <div className='puestoARankingTablaDirectivo numeroJugadorRankingDirectivo'><span>3</span></div>
                    <div className='nombreARankingTablaDirectivo flex-fill ms-5'><span>Mariana Cueto</span></div>
                    <div className='puntosARankingTablaDirectivo'><span>72</span></div>
                </div>
                <div className='d-flex jugadorARankingDirectivo align-items-center'>
                    <div className='puestoARankingTablaDirectivo numeroJugadorRankingDirectivo'><span>4</span></div>
                    <div className='nombreARankingTablaDirectivo flex-fill ms-5'><span>Mariana Compay</span></div>
                    <div className='puntosARankingTablaDirectivo'><span>72</span></div>
                </div>
                <div className='d-flex jugadorARankingDirectivo align-items-center'>
                    <div className='puestoARankingTablaDirectivo numeroJugadorRankingDirectivo'><span>5</span></div>
                    <div className='nombreARankingTablaDirectivo flex-fill ms-5'><span>Rodolfo Durba</span></div>
                    <div className='puntosARankingTablaDirectivo'><span>69</span></div>
                </div>
                <div className='d-flex jugadorARankingDirectivo align-items-center'>
                    <div className='puestoARankingTablaDirectivo numeroJugadorRankingDirectivo'><span>6</span></div>
                    <div className='nombreARankingTablaDirectivo flex-fill ms-5'><span>Alejandro De la Zerda</span></div>
                    <div className='puntosARankingTablaDirectivo'><span>67</span></div>
                </div>
                <div className='tituloCategoriaRankingDirectivo'><h3>- CATEGORIA B1 -</h3></div>
                <div className='d-flex jugadorB1RankingDirectivo align-items-center'>
                    <div className='puestoBRankingTablaDirectivo numeroJugadorRankingDirectivo'><span>7</span></div>
                    <div className='nombreBRankingTablaDirectivo flex-fill ms-5'><span>Josefina Hübner</span></div>
                    <div className='puntosBRankingTablaDirectivo'><span>66</span></div>
                </div>
                <div className='d-flex jugadorB1RankingDirectivo align-items-center'>
                    <div className='puestoBRankingTablaDirectivo numeroJugadorRankingDirectivo'><span>8</span></div>
                    <div className='nombreBRankingTablaDirectivo flex-fill ms-5'><span>Lourdes Villafañe</span></div>
                    <div className='puntosBRankingTablaDirectivo'><span>65</span></div>
                </div>
                <div className='d-flex jugadorB1RankingDirectivo align-items-center'>
                    <div className='puestoBRankingTablaDirectivo numeroJugadorRankingDirectivo'><span>9</span></div>
                    <div className='nombreBRankingTablaDirectivo flex-fill ms-5'><span>Cecilia Conti</span></div>
                    <div className='puntosBRankingTablaDirectivo'><span>65</span></div>
                </div>
                <div className='d-flex jugadorB1RankingDirectivo align-items-center'>
                    <div className='puestoBRankingTablaDirectivo numeroJugadorRankingDirectivo'><span>10</span></div>
                    <div className='nombreBRankingTablaDirectivo flex-fill ms-5'><span>Ezze Bermudez</span></div>
                    <div className='puntosBRankingTablaDirectivo'><span>64</span></div>
                </div>
                <div className='d-flex jugadorB1RankingDirectivo align-items-center'>
                    <div className='puestoBRankingTablaDirectivo numeroJugadorRankingDirectivo'><span>11</span></div>
                    <div className='nombreBRankingTablaDirectivo flex-fill ms-5'><span>Cintia Murad</span></div>
                    <div className='puntosBRankingTablaDirectivo'><span>60</span></div>
                </div>
                <div className='d-flex jugadorB1RankingDirectivo align-items-center'>
                    <div className='puestoBRankingTablaDirectivo numeroJugadorRankingDirectivo'><span>12</span></div>
                    <div className='nombreBRankingTablaDirectivo flex-fill ms-5'><span>Gaston Hansen</span></div>
                    <div className='puntosBRankingTablaDirectivo'><span>51</span></div>
                </div>

                <div className='tituloCategoriaRankingDirectivo'><h3>- CATEGORIA B2 -</h3></div>

                <div className='d-flex jugadorB2RankingDirectivo align-items-center'>
                    <div className='puestoBRankingTablaDirectivo numeroJugadorRankingDirectivo'><span>13</span></div>
                    <div className='nombreBRankingTablaDirectivo flex-fill ms-5'><span>Verónica Picco</span></div>
                    <div className='puntosBRankingTablaDirectivo'><span>50</span></div>
                </div>
                <div className='d-flex jugadorB2RankingDirectivo align-items-center'>
                    <div className='puestoBRankingTablaDirectivo numeroJugadorRankingDirectivo'><span>14</span></div>
                    <div className='nombreBRankingTablaDirectivo flex-fill ms-5'><span>Laura Bitar</span></div>
                    <div className='puntosBRankingTablaDirectivo'><span>47</span></div>
                </div>
                <div className='d-flex jugadorB2RankingDirectivo align-items-center'>
                    <div className='puestoBRankingTablaDirectivo numeroJugadorRankingDirectivo'><span>15</span></div>
                    <div className='nombreBRankingTablaDirectivo flex-fill ms-5'><span>Erik Novello</span></div>
                    <div className='puntosBRankingTablaDirectivo'><span>44</span></div>
                </div>
                <div className='d-flex jugadorB2RankingDirectivo align-items-center'>
                    <div className='puestoBRankingTablaDirectivo numeroJugadorRankingDirectivo'><span>16</span></div>
                    <div className='nombreBRankingTablaDirectivo flex-fill ms-5'><span>Tere Vidal</span></div>
                    <div className='puntosBRankingTablaDirectivo'><span>41</span></div>
                </div>
                <div className='d-flex jugadorB2RankingDirectivo align-items-center'>
                    <div className='puestoBRankingTablaDirectivo numeroJugadorRankingDirectivo'><span>17</span></div>
                    <div className='nombreBRankingTablaDirectivo flex-fill ms-5'><span>Contanza Proserpio</span></div>
                    <div className='puntosBRankingTablaDirectivo'><span>35</span></div>
                </div>
                <div className='d-flex jugadorB2RankingDirectivo align-items-center'>
                    <div className='puestoBRankingTablaDirectivo numeroJugadorRankingDirectivo'><span>18</span></div>
                    <div className='nombreBRankingTablaDirectivo flex-fill ms-5'><span>Pablo Martín Frías</span></div>
                    <div className='puntosBRankingTablaDirectivo'><span>34</span></div>
                </div>
                <div className='tituloCategoriaRankingDirectivo'><h3>- CATEGORIA C -</h3></div>
                <div className='d-flex jugadorCRankingDirectivo align-items-center'>
                    <div className='puestoBRankingTablaDirectivo numeroJugadorRankingDirectivo'><span>19</span></div>
                    <div className='nombreBRankingTablaDirectivo flex-fill ms-5'><span>Alejandro Diaz</span></div>
                    <div className='puntosBRankingTablaDirectivo'><span>32</span></div>
                </div>
                <div className='d-flex jugadorCRankingDirectivo align-items-center'>
                    <div className='puestoBRankingTablaDirectivo numeroJugadorRankingDirectivo'><span>20</span></div>
                    <div className='nombreBRankingTablaDirectivo flex-fill ms-5'><span>Jorge Delaporte</span></div>
                    <div className='puntosBRankingTablaDirectivo'><span>29</span></div>
                </div>
                <div className='d-flex jugadorCRankingDirectivo align-items-center'>
                    <div className='puestoBRankingTablaDirectivo numeroJugadorRankingDirectivo'><span>21</span></div>
                    <div className='nombreBRankingTablaDirectivo flex-fill ms-5'><span>CLucia Alvarez Cruz</span></div>
                    <div className='puntosBRankingTablaDirectivo'><span>27</span></div>
                </div>
                <div className='d-flex jugadorCRankingDirectivo align-items-center'>
                    <div className='puestoBRankingTablaDirectivo numeroJugadorRankingDirectivo'><span>22</span></div>
                    <div className='nombreBRankingTablaDirectivo flex-fill ms-5'><span>Juan Pincheira</span></div>
                    <div className='puntosBRankingTablaDirectivo'><span>26</span></div>
                </div>
                <div className='parteInferiorRankingDirectivo'>
                    <div className='fraseInferiorRankingTablaDirectivo'><span>MEJORA TU PUNTAJE Y ALCANZA UN LUGAR MAS ALTO</span></div>
                </div>
            </div>
        </>
    )
}

export default RankingDirectivo