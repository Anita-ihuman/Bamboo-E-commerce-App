import Image from '../Intro/images/Background.png'
import React, { useState } from 'react'
import Link from '../../../node_modules/next/link'
import styles from './Featured.module.css'

const Content = [
  {
    image: '../Intro/images/Background.png',
  },
  {
    image: '../Intro/images/Background.png',
  },
  {
    image: '../Intro/images/Background.png',
  },
  {
    image: '../Intro/images/Background.png',
  },
  {
    image: '../Intro/images/Background.png',
  },
  {
    image: '../Intro/images/Background.png',
  },
  {
    image: '../Intro/images/Background.png',
  },
  {
    image: '../Intro/images/Background.png',
  },
  {
    image: '../Intro/images/Background.png',
  },
  {
    image: '../Intro/images/Background.png',
  },
]


const App = () => {


  
  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          {Content.map((items, index) => (
            <div key={index} className={styles.slider_content} style={{}}>
              <img className={styles.img}>{items.image}</img>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default App
