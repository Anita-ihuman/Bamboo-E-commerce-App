import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Home from '../Components/Intro/Home'
import Featured from '../Components/Products/Featured'
import Casestudy from '../Components/Casestudy/Casestude'
import Bamboo from '../Components/Products/Bamboo'
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
      <Casestudy />
      
    </main>
  )
}

export default App
