import React from 'react'
import './rankingDirectivo.css'

function RankingDirectivo() {

    return (
        <>
            <div className="bg"></div>
            <div className='tituloRankingDirectivo'><h1>RANKING DE DOMINIOS</h1></div>
            <div className='subtituloRankingDirectivo'><h2>DOMINIO 1 - DIRECTIVO</h2></div>
            <div className="divBotonesRankingDominiosDirectivo">
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
                <div className='tituloCategoriaRankingDirectivo'><h3>- CATEGORÍA A -</h3></div>
                <div className='row jugadorARankingDirectivo mx-auto m-0 align-items-center'>
                    <div className='puestoARankingTablaDirectivo puestoTamañoRankingTablaDirectivo col-2 text-start m-0 p-0' ><span>1</span></div>
                    <div className='nombreARankingTablaDirectivo nombreTamañoRankingTablaDirectivo col-8 text-start m-0 p-0 py-2 pe-1'><span>Maxi Rodriguez</span></div>
                    <div className='puntosARankingTablaDirectivo puntosTamañoRankingTablaDirectivo col-2 text-end m-0 p-0'><span>82</span></div>
                </div>
                <div className='row jugadorARankingDirectivo mx-auto m-0 align-items-center'>
                    <div className='puestoARankingTablaDirectivo puestoTamañoRankingTablaDirectivo col-2 text-start m-0 p-0' ><span>2</span></div>
                    <div className='nombreARankingTablaDirectivo nombreTamañoRankingTablaDirectivo col-8 text-start m-0 p-0 py-2 pe-1'><span>Pablo Hatem</span></div>
                    <div className='puntosARankingTablaDirectivo puntosTamañoRankingTablaDirectivo col-2 text-end m-0 p-0'><span>78</span></div>
                </div>
                <div className='row jugadorARankingDirectivo mx-auto m-0 align-items-center'>
                    <div className='puestoARankingTablaDirectivo puestoTamañoRankingTablaDirectivo col-2 text-start m-0 p-0' ><span>3</span></div>
                    <div className='nombreARankingTablaDirectivo nombreTamañoRankingTablaDirectivo col-8 text-start m-0 p-0 py-2 pe-1'><span>Mariana Cueto</span></div>
                    <div className='puntosARankingTablaDirectivo puntosTamañoRankingTablaDirectivo col-2 text-end m-0 p-0'><span>72</span></div>
                </div>
                <div className='row jugadorARankingDirectivo mx-auto m-0 align-items-center'>
                    <div className='puestoARankingTablaDirectivo puestoTamañoRankingTablaDirectivo col-2 text-start m-0 p-0' ><span>4</span></div>
                    <div className='nombreARankingTablaDirectivo nombreTamañoRankingTablaDirectivo col-8 text-start m-0 p-0 py-2 pe-1'><span>Mariana Compay</span></div>
                    <div className='puntosARankingTablaDirectivo puntosTamañoRankingTablaDirectivo col-2 text-end m-0 p-0'><span>72</span></div>
                </div>
                <div className='row jugadorARankingDirectivo mx-auto m-0 align-items-center'>
                    <div className='puestoARankingTablaDirectivo puestoTamañoRankingTablaDirectivo col-2 text-start m-0 p-0' ><span>5</span></div>
                    <div className='nombreARankingTablaDirectivo nombreTamañoRankingTablaDirectivo col-8 text-start m-0 p-0 py-2 pe-1'><span>Rodolfo Durba</span></div>
                    <div className='puntosARankingTablaDirectivo puntosTamañoRankingTablaDirectivo col-2 text-end m-0 p-0'><span>69</span></div>
                </div>
                <div className='row jugadorARankingDirectivo mx-auto m-0 align-items-center'>
                    <div className='puestoARankingTablaDirectivo puestoTamañoRankingTablaDirectivo col-2 text-start m-0 p-0' ><span>6</span></div>
                    <div className='nombreARankingTablaDirectivo nombreTamañoRankingTablaDirectivo col-8 text-start m-0 p-0 py-2 pe-1'><span>Alejandro De La Zerda</span></div>
                    <div className='puntosARankingTablaDirectivo puntosTamañoRankingTablaDirectivo col-2 text-end m-0 p-0'><span>67</span></div>
                </div>
                <div className='tituloCategoriaRankingDirectivo'><h3>- CATEGORIA B1 -</h3></div>
                <div className='row jugadorB1RankingDirectivo mx-auto m-0 align-items-center'>
                    <div className='puestoBRankingTablaDirectivo puestoTamañoRankingTablaDirectivo col-2 text-start m-0 p-0'><span>7</span></div>
                    <div className='nombreBRankingTablaDirectivo nombreTamañoRankingTablaDirectivo col-8 text-start m-0 p-0'><span>Josefina Hübner</span></div>
                    <div className='puntosBRankingTablaDirectivo puntosTamañoRankingTablaDirectivo col-2 text-end m-0 p-0'><span>66</span></div>
                </div>
                <div className='row jugadorB1RankingDirectivo mx-auto m-0 align-items-center'>
                    <div className='puestoBRankingTablaDirectivo puestoTamañoRankingTablaDirectivo col-2 text-start m-0 p-0'><span>8</span></div>
                    <div className='nombreBRankingTablaDirectivo nombreTamañoRankingTablaDirectivo col-8 text-start m-0 p-0'><span>Cecilia Conti</span></div>
                    <div className='puntosBRankingTablaDirectivo puntosTamañoRankingTablaDirectivo col-2 text-end m-0 p-0'><span>65</span></div>
                </div>
                <div className='row jugadorB1RankingDirectivo mx-auto m-0 align-items-center'>
                    <div className='puestoBRankingTablaDirectivo puestoTamañoRankingTablaDirectivo col-2 text-start m-0 p-0'><span>9</span></div>
                    <div className='nombreBRankingTablaDirectivo nombreTamañoRankingTablaDirectivo col-8 text-start m-0 p-0'><span>Ezze Bermudez</span></div>
                    <div className='puntosBRankingTablaDirectivo puntosTamañoRankingTablaDirectivo col-2 text-end m-0 p-0'><span>65</span></div>
                </div>
                <div className='row jugadorB1RankingDirectivo mx-auto m-0 align-items-center'>
                    <div className='puestoBRankingTablaDirectivo puestoTamañoRankingTablaDirectivo col-2 text-start m-0 p-0'><span>10</span></div>
                    <div className='nombreBRankingTablaDirectivo nombreTamañoRankingTablaDirectivo col-8 text-start m-0 p-0'><span>Cintia Murad</span></div>
                    <div className='puntosBRankingTablaDirectivo puntosTamañoRankingTablaDirectivo col-2 text-end m-0 p-0'><span>64</span></div>
                </div>
                <div className='row jugadorB1RankingDirectivo mx-auto m-0 align-items-center'>
                    <div className='puestoBRankingTablaDirectivo puestoTamañoRankingTablaDirectivo col-2 text-start m-0 p-0'><span>11</span></div>
                    <div className='nombreBRankingTablaDirectivo nombreTamañoRankingTablaDirectivo col-8 text-start m-0 p-0'><span>Gaston Hansen</span></div>
                    <div className='puntosBRankingTablaDirectivo puntosTamañoRankingTablaDirectivo col-2 text-end m-0 p-0'><span>64</span></div>
                </div>
                <div className='row jugadorB1RankingDirectivo mx-auto m-0 align-items-center'>
                    <div className='puestoBRankingTablaDirectivo puestoTamañoRankingTablaDirectivo col-2 text-start m-0 p-0'><span>12</span></div>
                    <div className='nombreBRankingTablaDirectivo nombreTamañoRankingTablaDirectivo col-8 text-start m-0 p-0'><span>Nicolás Darelli</span></div>
                    <div className='puntosBRankingTablaDirectivo puntosTamañoRankingTablaDirectivo col-2 text-end m-0 p-0'><span>63</span></div>
                </div>
                <div className='row jugadorB1RankingDirectivo mx-auto m-0 align-items-center'>
                    <div className='puestoBRankingTablaDirectivo puestoTamañoRankingTablaDirectivo col-2 text-start m-0 p-0'><span>13</span></div>
                    <div className='nombreBRankingTablaDirectivo nombreTamañoRankingTablaDirectivo col-8 text-start m-0 p-0'><span>Mariano Ghiotto</span></div>
                    <div className='puntosBRankingTablaDirectivo puntosTamañoRankingTablaDirectivo col-2 text-end m-0 p-0'><span>63</span></div>
                </div>
                <div className='row jugadorB1RankingDirectivo mx-auto m-0 align-items-center'>
                    <div className='puestoBRankingTablaDirectivo puestoTamañoRankingTablaDirectivo col-2 text-start m-0 p-0'><span>14</span></div>
                    <div className='nombreBRankingTablaDirectivo nombreTamañoRankingTablaDirectivo col-8 text-start m-0 p-0'><span>Bruno De Faveri</span></div>
                    <div className='puntosBRankingTablaDirectivo puntosTamañoRankingTablaDirectivo col-2 text-end m-0 p-0'><span>62</span></div>
                </div>
                <div className='row jugadorB1RankingDirectivo mx-auto m-0 align-items-center'>
                    <div className='puestoBRankingTablaDirectivo puestoTamañoRankingTablaDirectivo col-2 text-start m-0 p-0'><span>15</span></div>
                    <div className='nombreBRankingTablaDirectivo nombreTamañoRankingTablaDirectivo col-8 text-start m-0 p-0'><span>Hugo Bazan</span></div>
                    <div className='puntosBRankingTablaDirectivo puntosTamañoRankingTablaDirectivo col-2 text-end m-0 p-0'><span>61</span></div>
                </div>
                <div className='row jugadorB1RankingDirectivo mx-auto m-0 align-items-center'>
                    <div className='puestoBRankingTablaDirectivo puestoTamañoRankingTablaDirectivo col-2 text-start m-0 p-0'><span>16</span></div>
                    <div className='nombreBRankingTablaDirectivo nombreTamañoRankingTablaDirectivo col-8 text-start m-0 p-0'><span>Simón Poliche</span></div>
                    <div className='puntosBRankingTablaDirectivo puntosTamañoRankingTablaDirectivo col-2 text-end m-0 p-0'><span>56</span></div>
                </div>
                <div className='row jugadorB1RankingDirectivo mx-auto m-0 align-items-center'>
                    <div className='puestoBRankingTablaDirectivo puestoTamañoRankingTablaDirectivo col-2 text-start m-0 p-0'><span>17</span></div>
                    <div className='nombreBRankingTablaDirectivo nombreTamañoRankingTablaDirectivo col-8 text-start m-0 p-0'><span>Lucas Gomez</span></div>
                    <div className='puntosBRankingTablaDirectivo puntosTamañoRankingTablaDirectivo col-2 text-end m-0 p-0'><span>55</span></div>
                </div>
                <div className='row jugadorB1RankingDirectivo mx-auto m-0 align-items-center'>
                    <div className='puestoBRankingTablaDirectivo puestoTamañoRankingTablaDirectivo col-2 text-start m-0 p-0'><span>18</span></div>
                    <div className='nombreBRankingTablaDirectivo nombreTamañoRankingTablaDirectivo col-8 text-start m-0 p-0'><span>Luz Leiva</span></div>
                    <div className='puntosBRankingTablaDirectivo puntosTamañoRankingTablaDirectivo col-2 text-end m-0 p-0'><span>53</span></div>
                </div>
                <div className='row jugadorB1RankingDirectivo mx-auto m-0 align-items-center'>
                    <div className='puestoBRankingTablaDirectivo puestoTamañoRankingTablaDirectivo col-2 text-start m-0 p-0'><span>19</span></div>
                    <div className='nombreBRankingTablaDirectivo nombreTamañoRankingTablaDirectivo col-8 text-start m-0 p-0'><span>Pedro Silvano</span></div>
                    <div className='puntosBRankingTablaDirectivo puntosTamañoRankingTablaDirectivo col-2 text-end m-0 p-0'><span>53</span></div>
                </div>
                <div className='row jugadorB1RankingDirectivo mx-auto m-0 align-items-center'>
                    <div className='puestoBRankingTablaDirectivo puestoTamañoRankingTablaDirectivo col-2 text-start m-0 p-0'><span>20</span></div>
                    <div className='nombreBRankingTablaDirectivo nombreTamañoRankingTablaDirectivo col-8 text-start m-0 p-0'><span>Darío Alzogaray</span></div>
                    <div className='puntosBRankingTablaDirectivo puntosTamañoRankingTablaDirectivo col-2 text-end m-0 p-0'><span>53</span></div>
                </div>
                <div className='row jugadorB1RankingDirectivo mx-auto m-0 align-items-center'>
                    <div className='puestoBRankingTablaDirectivo puestoTamañoRankingTablaDirectivo col-2 text-start m-0 p-0'><span>21</span></div>
                    <div className='nombreBRankingTablaDirectivo nombreTamañoRankingTablaDirectivo col-8 text-start m-0 p-0'><span>Josefina</span></div>
                    <div className='puntosBRankingTablaDirectivo puntosTamañoRankingTablaDirectivo col-2 text-end m-0 p-0'><span>51</span></div>
                </div>
                <div className='tituloCategoriaRankingDirectivo'><h3>- CATEGORIA B2 -</h3></div>
                <div className='row jugadorB2RankingDirectivo mx-auto m-0 align-items-center'>
                    <div className='puestoBRankingTablaDirectivo puestoTamañoRankingTablaDirectivo col-2 text-start m-0 p-0'><span>22</span></div>
                    <div className='nombreBRankingTablaDirectivo nombreTamañoRankingTablaDirectivo col-8 text-start m-0 p-0'><span>Verónica Picco</span></div>
                    <div className='puntosBRankingTablaDirectivo puntosTamañoRankingTablaDirectivo col-2 text-end m-0 p-0'><span>50</span></div>
                </div>
                <div className='row jugadorB2RankingDirectivo mx-auto m-0 align-items-center'>
                    <div className='puestoBRankingTablaDirectivo puestoTamañoRankingTablaDirectivo col-2 text-start m-0 p-0'><span>23</span></div>
                    <div className='nombreBRankingTablaDirectivo nombreTamañoRankingTablaDirectivo col-8 text-start m-0 p-0'><span>Laura Bitar</span></div>
                    <div className='puntosBRankingTablaDirectivo puntosTamañoRankingTablaDirectivo col-2 text-end m-0 p-0'><span>48</span></div>
                </div>
                <div className='row jugadorB2RankingDirectivo mx-auto m-0 align-items-center'>
                    <div className='puestoBRankingTablaDirectivo puestoTamañoRankingTablaDirectivo col-2 text-start m-0 p-0'><span>24</span></div>
                    <div className='nombreBRankingTablaDirectivo nombreTamañoRankingTablaDirectivo col-8 text-start m-0 p-0'><span>Erik Novello</span></div>
                    <div className='puntosBRankingTablaDirectivo puntosTamañoRankingTablaDirectivo col-2 text-end m-0 p-0'><span>46</span></div>
                </div>
                <div className='row jugadorB2RankingDirectivo mx-auto m-0 align-items-center'>
                    <div className='puestoBRankingTablaDirectivo puestoTamañoRankingTablaDirectivo col-2 text-start m-0 p-0'><span>25</span></div>
                    <div className='nombreBRankingTablaDirectivo nombreTamañoRankingTablaDirectivo col-8 text-start m-0 p-0'><span>Tere Vidal</span></div>
                    <div className='puntosBRankingTablaDirectivo puntosTamañoRankingTablaDirectivo col-2 text-end m-0 p-0'><span>45</span></div>
                </div>
                <div className='row jugadorB2RankingDirectivo mx-auto m-0 align-items-center'>
                    <div className='puestoBRankingTablaDirectivo puestoTamañoRankingTablaDirectivo col-2 text-start m-0 p-0'><span>26</span></div>
                    <div className='nombreBRankingTablaDirectivo nombreTamañoRankingTablaDirectivo col-8 text-start m-0 p-0'><span>Constanza Proserpio</span></div>
                    <div className='puntosBRankingTablaDirectivo puntosTamañoRankingTablaDirectivo col-2 text-end m-0 p-0'><span>44</span></div>
                </div>
                <div className='row jugadorB2RankingDirectivo mx-auto m-0 align-items-center'>
                    <div className='puestoBRankingTablaDirectivo puestoTamañoRankingTablaDirectivo col-2 text-start m-0 p-0'><span>27</span></div>
                    <div className='nombreBRankingTablaDirectivo nombreTamañoRankingTablaDirectivo col-8 text-start m-0 p-0'><span>Pablo Martín Frias</span></div>
                    <div className='puntosBRankingTablaDirectivo puntosTamañoRankingTablaDirectivo col-2 text-end m-0 p-0'><span>44</span></div>
                </div>
                <div className='row jugadorB2RankingDirectivo mx-auto m-0 align-items-center'>
                    <div className='puestoBRankingTablaDirectivo puestoTamañoRankingTablaDirectivo col-2 text-start m-0 p-0'><span>28</span></div>
                    <div className='nombreBRankingTablaDirectivo nombreTamañoRankingTablaDirectivo col-8 text-start m-0 p-0'><span>Eugenia Caceres</span></div>
                    <div className='puntosBRankingTablaDirectivo puntosTamañoRankingTablaDirectivo col-2 text-end m-0 p-0'><span>43</span></div>
                </div>
                <div className='row jugadorB2RankingDirectivo mx-auto m-0 align-items-center'>
                    <div className='puestoBRankingTablaDirectivo puestoTamañoRankingTablaDirectivo col-2 text-start m-0 p-0'><span>29</span></div>
                    <div className='nombreBRankingTablaDirectivo nombreTamañoRankingTablaDirectivo col-8 text-start m-0 p-0'><span>Rodrigo Lizondo</span></div>
                    <div className='puntosBRankingTablaDirectivo puntosTamañoRankingTablaDirectivo col-2 text-end m-0 p-0'><span>41</span></div>
                </div>
                <div className='row jugadorB2RankingDirectivo mx-auto m-0 align-items-center'>
                    <div className='puestoBRankingTablaDirectivo puestoTamañoRankingTablaDirectivo col-2 text-start m-0 p-0'><span>30</span></div>
                    <div className='nombreBRankingTablaDirectivo nombreTamañoRankingTablaDirectivo col-8 text-start m-0 p-0'><span>Andrea Serrano</span></div>
                    <div className='puntosBRankingTablaDirectivo puntosTamañoRankingTablaDirectivo col-2 text-end m-0 p-0'><span>41</span></div>
                </div>
                <div className='row jugadorB2RankingDirectivo mx-auto m-0 align-items-center'>
                    <div className='puestoBRankingTablaDirectivo puestoTamañoRankingTablaDirectivo col-2 text-start m-0 p-0'><span>31</span></div>
                    <div className='nombreBRankingTablaDirectivo nombreTamañoRankingTablaDirectivo col-8 text-start m-0 p-0'><span>Carolina Chehin</span></div>
                    <div className='puntosBRankingTablaDirectivo puntosTamañoRankingTablaDirectivo col-2 text-end m-0 p-0'><span>37</span></div>
                </div>
                <div className='row jugadorB2RankingDirectivo mx-auto m-0 align-items-center'>
                    <div className='puestoBRankingTablaDirectivo puestoTamañoRankingTablaDirectivo col-2 text-start m-0 p-0'><span>32</span></div>
                    <div className='nombreBRankingTablaDirectivo nombreTamañoRankingTablaDirectivo col-8 text-start m-0 p-0'><span>Celia Diaz</span></div>
                    <div className='puntosBRankingTablaDirectivo puntosTamañoRankingTablaDirectivo col-2 text-end m-0 p-0'><span>34</span></div>
                </div>
                <div className='row jugadorB2RankingDirectivo mx-auto m-0 align-items-center'>
                    <div className='puestoBRankingTablaDirectivo puestoTamañoRankingTablaDirectivo col-2 text-start m-0 p-0'><span>33</span></div>
                    <div className='nombreBRankingTablaDirectivo nombreTamañoRankingTablaDirectivo col-8 text-start m-0 p-0'><span>José Bazan</span></div>
                    <div className='puntosBRankingTablaDirectivo puntosTamañoRankingTablaDirectivo col-2 text-end m-0 p-0'><span>34</span></div>
                </div>
                <div className='tituloCategoriaRankingDirectivo'><h3>- CATEGORIA C -</h3></div>
                <div className='row jugadorCRankingDirectivo mx-auto m-0 align-items-center'>
                    <div className='puestoBRankingTablaDirectivo puestoTamañoRankingTablaDirectivo col-2 text-start m-0 p-0'><span>34</span></div>
                    <div className='nombreBRankingTablaDirectivo nombreTamañoRankingTablaDirectivo col-8 text-start m-0 p-0'><span>Alejandro Diaz</span></div>
                    <div className='puntosBRankingTablaDirectivo puntosTamañoRankingTablaDirectivo col-2 text-end m-0 p-0'><span>32</span></div>
                </div>
                <div className='row jugadorCRankingDirectivo mx-auto m-0 align-items-center'>
                    <div className='puestoBRankingTablaDirectivo puestoTamañoRankingTablaDirectivo col-2 text-start m-0 p-0'><span>35</span></div>
                    <div className='nombreBRankingTablaDirectivo nombreTamañoRankingTablaDirectivo col-8 text-start m-0 p-0'><span>Jorge Delaporte</span></div>
                    <div className='puntosBRankingTablaDirectivo puntosTamañoRankingTablaDirectivo col-2 text-end m-0 p-0'><span>29</span></div>
                </div>
                <div className='row jugadorCRankingDirectivo mx-auto m-0 align-items-center'>
                    <div className='puestoBRankingTablaDirectivo puestoTamañoRankingTablaDirectivo col-2 text-start m-0 p-0'><span>36</span></div>
                    <div className='nombreBRankingTablaDirectivo nombreTamañoRankingTablaDirectivo col-8 text-start m-0 p-0'><span>Lucia Alvarez Cruz</span></div>
                    <div className='puntosBRankingTablaDirectivo puntosTamañoRankingTablaDirectivo col-2 text-end m-0 p-0'><span>27</span></div>
                </div>
                <div className='row jugadorCRankingDirectivo mx-auto m-0 align-items-center'>
                    <div className='puestoBRankingTablaDirectivo puestoTamañoRankingTablaDirectivo col-2 text-start m-0 p-0'><span>37</span></div>
                    <div className='nombreBRankingTablaDirectivo nombreTamañoRankingTablaDirectivo col-8 text-start m-0 p-0'><span>Juan Pincheira</span></div>
                    <div className='puntosBRankingTablaDirectivo puntosTamañoRankingTablaDirectivo col-2 text-end m-0 p-0'><span>26</span></div>
                </div>        
                <div className='parteInferiorRankingDirectivo'>
                    <span>MEJORA TU PUNTAJE Y ALCANZA UN LUGAR MAS ALTO</span>
                </div>
            </div>
        </>
    )
}

export default RankingDirectivo