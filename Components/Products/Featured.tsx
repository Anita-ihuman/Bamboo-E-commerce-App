import React, { useState } from 'react'
import Link from 'next/link'
import styles from './Featured.module.css'
import Masonry from 'react-masonry-css'

const App = () => {
  const [Content, setContent] = useState([
    {
      image: '/images/furniture1.png',
    },
    {
      image: '/images/furniture2.png',
    },
    {
      image: '/images/furniture3.png',
    },
    {
      image: '/images/furniture4.png',
    },
    {
      image: '/images/furniture5.png',
    },
    {
      image: '/images/furniture6.png',
    },
    {
      image: '/images/furniture7.png',
    },
    {
      image: '/images/furniture8.png',
    },
    {
      image: '/images/furniture9.png',
    },
    {
      image: '/images/furniture10.png',
    },
    {
      image: '/images/furniture11.png',
    },
    {
      image: '/images/furniture12.png',
    },
  ])
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  }

  return (
    <>
      <section className={styles.section}>
        <h2>Featured Product</h2>
        <div className={styles.container}>
          {Content.map((img, index) => (
           
              <div key={index} className={styles.slider_content}>
                <img src={img.image} alt="" className={styles.img} />
              </div>
           
          ))}
        </div>
        <button className={styles.btn}>LOAD MORE</button>
      </section>
    </>
  )
}

export default App
