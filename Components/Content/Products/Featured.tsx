import Image from '../Intro/images/furniture1.png'
import React, { useState } from 'react'
import Link from '../../../node_modules/next/link'
import styles from './Featured.module.css'

interface Content {
  image: string
}


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

  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          {Content.map((img, index) => (
            <div key={index} className={styles.slider_content}>
              <img src={img.image} alt="" className={styles.img} />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default App
