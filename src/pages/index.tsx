import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Home from './home'
import Featured from './Products/Featured'

const App = () => {
  return (
    <main className={styles.first}>
      <Head>
        <title>Bamboo Cart</title>
        <link rel="icon" href="/Logo2.png" />
      </Head>
      <Home />
      <Featured />
    </main>
  )
}

export default App
