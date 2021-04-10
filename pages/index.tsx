import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Home from '../Components/Intro/Home'
import Featured from '../Components/Products/Featured'
import Casestudy from '../Components/Casestudy/Casestude'
import Bamboo from '../Components/Products/Bamboo'
import Item from '../Components/Checkout/Item_details'
import Related from '../Components/Checkout/related_products'
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
      <Item />
      <Related/>
    </main>
  )
}

export default App
