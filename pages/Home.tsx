import Head from 'next/head'
import styles from '../styles/Home.module.css'

interface HomeProp {
  intro: string
  text: string
  text2: string
  text3: string
  button: string
  head: string
}


export function Home({ head, intro, text, text3, text2, button }: HomeProp) {
  return (
    <>
      <header className={styles.header}>
        <article className={styles.content}>
          <h3>{intro}</h3>
          <h1>{head}</h1>
          <p>{text}</p>
          <p>{text2}</p>
          <p>{text3}</p>
          <img src="/Navigation.png" width="80%" />
          <div>
            <button className={styles.btn}>{button}</button>
          </div>
        </article>
      </header>
    </>
  )
}
export default Home
