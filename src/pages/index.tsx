import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Home from './home'
import Featured from './Products/Featured'

const App = () => {
  return (
    <div>
      <Head>
        <title>Bamboo Cart</title>
        <link rel="icon" href="/Logo2.png" />
      </Head>

      <main className={styles.first}>
        <Home />
        <Featured />
      </main>
    </div>
  )
}

export default App
