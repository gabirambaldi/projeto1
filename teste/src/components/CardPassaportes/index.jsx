import { useEffect, useState } from 'react'
import styles from './CardPassaportes.module.css'

function CardPassaportes() {

    const [ passaportes, setPassaportes ] = useState([])

    useEffect(() => {
        const buscarPassaportes = async () => {
            const response = await fetch('https://raw.githubusercontent.com/Legacy48/api2/main/passaporte.json')
            const data = await response.json()
            setPassaportes(data)
        }
        buscarPassaportes()
    }, [])

    return (
        passaportes.map( passaporte => 
            <section key={passaporte.name} className={styles.container}>
                <ul className={styles.lista}>
                    <li className={styles.titulo}>{passaporte.name}</li>
                <hr></hr>
                </ul>
            <ul className={styles.lista}>
            <li>Frente:</li>
            <li><img src= {passaporte.cover} alt='cover' className={styles.img}/></li>
            </ul>
            <ul className={styles.lista}>
            <li>Verso:</li>
            <li><img src= {passaporte.datapage} className={styles.img} alt='datapage'/></li>
            </ul>
            </section>
            
        )
        
    )
    
}

export default CardPassaportes