import { useEffect, useState } from 'react'
import styles from './CardPaises.module.css'

function CardPaises() {

    const [ paises, setPaises ] = useState([])

    useEffect(() => {
        const buscarPaises = async () => {
            const response = await fetch('https://raw.githubusercontent.com/Legacy48/api2/main/paises.json')
            const data = await response.json()
            setPaises(data)
        }
        buscarPaises()
    }, [])

    return (
        paises.map( pais => 
            <section key={pais.pais} className={styles.container}>
                <ul className={styles.lista}>
                    <li className={styles.titulo}>{pais.pais}</li>
                    <hr></hr> 

            <li className={styles.city}>Cidades:</li>
            <li className={styles.city}>{pais.cidade1}</li>
            <li className={styles.city}>{pais.cidade2}</li>
            <li className={styles.city}>{pais.cidade3}</li>
            
            </ul>
            <img className={styles.img} src= {pais.logo} alt='logo'/>
            </section>
            
        )
        
    )
    
}

export default CardPaises