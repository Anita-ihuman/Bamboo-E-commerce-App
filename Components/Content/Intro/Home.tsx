import React, { useState } from 'react'
import 'react-animated-slider/build/horizontal.css'
import 'normalize.css/normalize.css'
import styles from '../../../styles/Home.module.css'

const content = [
  {
    title: 'INDOORS',
    big: 'See Bamboo’s New Range Of Indoor Furniture',
    description:
      'Classic meet modern living, Bamboo has a fantastic range of indoor furniture,perfect for any modern home',
    btn: 'SEE MORE',
    image: '/Background.png',
  },
  {
    title: 'INDOORS',
    big: 'See Bamboo’s New Range Of Indoor Furniture',
    description:
      'Classic meet modern living, Bamboo has a fantastic range of indoor furniture,perfect for any modern home',
    btn: 'SEE MORE',
    image: 'https://i.imgur.com/DCdBXcq.jpg',
  },
  {
    title: 'INDOORS',
    big: 'See Bamboo’s New Range Of Indoor Furniture',
    description:
      'Classic meet modern living, Bamboo has a fantastic range of indoor furniture,perfect for any modern home',
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
    (x === -100 * (content.length-1))?setX(0):
    setX(x - 100)
  }
    ;
  return (
    <div className={styles.content}>
      <section className={styles.slider_wrapper}>
        {content.map((item, index) => (
          <div
            key={index}
            className={styles.slider_content}
            style={{
              background: `url('${item.image}' 
            no-repeat center center`,
              transform: `translateX(${x}%)`,
            }}
          >
            <div className={styles.inner}>
              <h3>{item.title}</h3>
              <h1> {item.big}</h1>
              <p>{item.description}</p>
              <button className={styles.btn}>{item.btn}</button>
            </div>
          </div>
        ))}
        <button id={styles.left} onClick={goLeft}>
          <i className="fa fa-chevron-left fa-3x" aria-hidden="true"></i>
        </button>
        <button id={styles.right} onClick={goRight}>
          <i className="fa fa-chevron-right fa-3x" aria-hidden="true"></i>
        </button>
      </section>
    </div>
  )
}

export default Counter
