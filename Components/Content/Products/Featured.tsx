import Image from '../Intro/images/Background.png'
import React, { useState } from 'react'
import Link from '../../../node_modules/next/link'
import styles from './Featured.module.css'

interface Content {
  image: string
}

const Content: Content[] = [
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
          {Content.map((image, index) => (
            <div key={index} className={styles.slider_content} style={{}}>
              {/* {image} */}
              <img>{image}</img>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default App
