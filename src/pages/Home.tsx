import React, { useState } from 'react'
import 'react-animated-slider/build/horizontal.css'
import 'normalize.css/normalize.css'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const content = [
  {
    title: 'INDOORS',
    big: 'See Bamboo’s New Range Of Indoor Furniture',
    description: 'Classic meet modern living, ',
    description2: ' Bamboo has a fantastic range of indoor furniture,',
    description3: ' perfect for any modern home',
    btn: 'SEE MORE',
    image: '/images/Background.png',
  },
  {
    title: 'INDOORS',
    big: 'See Bamboo’s New Range Of Indoor Furniture',
    description: 'Classic meet modern living, ',
    description2: ' Bamboo has a fantastic range of indoor furniture,',
    description3: ' perfect for any modern home',
    btn: 'SEE MORE',
    image: '/images/Background.png',
  },
  {
    title: 'INDOORS',
    big: 'See Bamboo’s New Range Of Indoor Furniture',
    description: 'Classic meet modern living,',
    description2: ' Bamboo has a fantastic range of indoor furniture,',
    description3: ' perfect for any modern home',
    btn: 'SEE MORE',
    image: 'https://i.imgur.com/DvmN8Hx.jpg',
  },
]
function Counter() {
  const [x, setX] = useState(0)
  const goLeft = () => {
    x === 0 ? setX(-100 * (content.length - 1)) : setX(x + 100)
  }
  const goRight = () => {
    x === -100 * (content.length - 1) ? setX(0) : setX(x - 100)
  }
  return (
    <div className={styles.content}>
      <section className={styles.slider_wrapper}>
        {content.map((item, index) => (
          <div
            key={index}
            className={styles.slider_content}
            style={{
              background: `url('${item.image}') 
            no-repeat center center`,
              transform: `translateX(${x}%)`,
              height: `750px`,
              objectFit: `cover`,
            }}
          >
            <div className={styles.inner}>
              <h3>{item.title}</h3>
              <h2> {item.big}</h2>
              <p>{item.description}</p>
              <p>{item.description2}</p>
              <p>{item.description3}</p>
              <Link as="" href="/">
                <button className={styles.btn}>{item.btn}</button>
              </Link>

              <div className={styles.dot}>
                <img src="/images/dots.png"/>
              </div>
            </div>
          </div>
        ))}
        <button id={styles.left} onClick={goLeft}>
          <img src="/images/left.png" />
        </button>
        <button id={styles.right} onClick={goRight}>
          <img src="/images/right.png" />
        </button>
      </section>
    </div>
  )
}

export default Counter
