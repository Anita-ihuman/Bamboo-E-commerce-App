import Head from 'next/head'
import styles from '../styles/Home.module.css'

interface HomeProp {
  intro: string
  text: string
  button: string
  head: string
}


const HomeProp: HomeProp[] = [
  {
    intro: 'INDOORS',
    head: 'See Bamboo’s New Range Of Indoor Furniture',
    text:
      'Classic meet modern living Bamboo has a fantastic range of indoor furniture,perfect for any modern home',
    button: 'SEE MORE',
  }
]

export function Home({}: HomeProp) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/Logo2.png" />
      </Head>
      <header className={styles.header}>
        {HomeProp.map(({ text, head, intro, button }) => (
          <article className={styles.content}>
            <h3>{intro}</h3>
            <h1>{head}</h1>
            <p>{text}</p>
            <img src="/Navigation.png" width="80%" />
            <div>
              <button className={styles.btn}>{button}</button>
            </div>
          </article>
        ))}
      </header>
    </>
  )
}
export default Home
