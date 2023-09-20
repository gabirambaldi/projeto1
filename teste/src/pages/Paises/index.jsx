import styles from './Paises.module.css'
import CardPaises from '../../components/CardPaises'
import { Link } from 'react-router-dom'

function Paises() {

  return (
    <>
      <CardPaises />
      <div className={styles.div}>
      <Link to="/" className={styles.link}>Home</Link>
      <Link to="/Passaportes" className={styles.link}>Passaportes</Link>
      <hr></hr>
      
      <hr></hr>
      </div>
    </>
  )
}

export default Paises