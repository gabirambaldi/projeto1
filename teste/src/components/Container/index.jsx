import { Link } from 'react-router-dom'
import styles from './Container.module.css'

function Container() {

  return (
    <>
    <nav>
    <div className={styles.div}>
  <Link to="/paises" className={styles.botao}>PAÍSES</Link> 
  <hr></hr>
  <Link to="/Passaportes" className={styles.botao}>PASSAPORTES</Link>
  <hr></hr>
  <h4>criado por Gabriela Rambaldi e Gabriel Henrique</h4>
  </div>
  </nav>
  </>
  )
}

export default Container
