import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Home from './Home'
import Footer from '../components/Footer/Footer'
import Featured from '../components/Products/Featured'

const App = () => {
  return (
    <main className={styles.first}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/Logo2.png" />
      </Head>
      <Home />
      <Featured />
      <Footer/>
    </main>
  )
}

export default App
