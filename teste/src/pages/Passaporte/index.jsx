import styles from './Passaporte.module.css'
import CardPassaportes from '../../components/CardPassaportes'
import { Link } from 'react-router-dom'

function Passaportes() {

  return (
    <>
    
      <CardPassaportes />
    <div className={styles.div}>
      <Link to="/" className={styles.link}>Home</Link>
      <Link to="/Paises" className={styles.link}>Países</Link>
      <hr></hr>
      <hr></hr>
    </div>
    
    </>
  )
}

export default Passaportes