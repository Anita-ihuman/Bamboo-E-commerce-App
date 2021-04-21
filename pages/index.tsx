import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Home from './Home'
import Featured from '../components/Products/Featured'
import Casestudy from './Casestudy/Casestude'
import Bamboo from '../components/Products/Bamboo'
import Item from './Checkout/Item_details'
import Related from './Checkout/related_products'
const App = () => {
  return (
    <main className={styles.first}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/Logo2.png" />
      </Head>
      <Home />
      <Featured />
      <Bamboo />
      <Casestudy />
      <Item />
      <Related />
    </main>
  )
}

export default App
