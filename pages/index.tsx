import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Home from '../Components/Content/Intro/Home'
import Featured from '../Components/Content/Products/Featured'
import Bamboo from '../Components/Content/Products/Bamboo'
const App = () => {
  return (
    <main className={styles.first}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/Logo2.png" />
      </Head>
      <Home />
      <Featured />
      <Bamboo/>
    </main>
  )
}

export default App
