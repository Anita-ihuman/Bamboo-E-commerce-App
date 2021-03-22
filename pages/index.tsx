import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Home from './Home'

const App = () => {
  return (
    <main className={styles.first}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/Logo2.png" />
      </Head>
      <Home
        intro="INDOORS"
        head="See Bamboo’s New Range Of Indoor Furniture"
        text="Classic meet modern living"
        text2="Bamboo has a fantastic range of indoor furniture,"
        text3=" perfect for any modern home"
        button="SEE MORE"
      />
    </main>
  )
}

export default App
