import Head from 'next/head'
import styles from '../styles/Home.module.css'

interface HomeProp {
  title: string
  href: string
  label: string
  button: string
}

export function Home({}: HomeProp) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/Logo2.png" />
      </Head>
    </>
  )
}
export default Home
