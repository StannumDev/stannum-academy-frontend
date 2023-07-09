import React from 'react'
import './estoEsStannumHome.css'
import estoEsStannumIcono1 from '../../assets/estoEsStannumIcono1.png'
import estoEsStannumIcono2 from '../../assets/estoEsStannumIcono2.png'
import estoEsStannumIcono3 from '../../assets/estoEsStannumIcono3.png'

function EstoEsStannumHome() {
  return (
    <>
        <div className='contenedorEstoEsStannumHome'>
            <div className='textosEstoEsStannumHome'>
                <h4>ESTO ES STANNUM GAME</h4>
                <h3>Una nueva forma de aprender</h3>
                <p>Desarrollamos una forma de enseñanza que combina, los objetivos desafiantes que tienen los grandes deportistas, con lo divertido de los videojuegos.</p>
            </div>
            <div className='contenedorItemsEstoEsStannum'>
                <div className='itemEstoEsStannum'>
                    <div><img src={estoEsStannumIcono1} alt="Esto es STANNUM" /></div><span>Rápida asimilación</span>
                </div>
                <div className='itemEstoEsStannum'>
                    <div><img src={estoEsStannumIcono2} alt="Esto es STANNUM" /></div><span>Fácil de aprender</span>
                </div>
                <div className='itemEstoEsStannum'>
                    <div><img src={estoEsStannumIcono3} alt="Esto es STANNUM" /></div><span>Crecimiento</span>
                </div>
            </div>
        </div>
    </>
  )
}

export default EstoEsStannumHome