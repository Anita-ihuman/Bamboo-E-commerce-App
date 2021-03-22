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
      <Home />
    </main>
  )
}

export default App
