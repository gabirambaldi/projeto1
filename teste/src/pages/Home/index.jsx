import logo from '../../assets/pp.jpg'
import styles from './Home.module.css'
import Container from '../../components/Container'


function Home() {

  return (
    <>
      <div>
          <img src={logo} className={styles.logo} alt="pplogo" />
      </div>    
      <Container />
    </>
  )
}

export default Home