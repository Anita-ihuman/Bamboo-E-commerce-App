import React, { useState } from 'react'
import styles from './Featured.module.css'

interface Role1 {
  image: string
  cost: string
}
interface Role2 {
  image: string
  cost: string
}
interface Role3 {
  image: string
  cost: string
}
const Featured = () => {
  const Role: Role1[] = [
    {
      image: '/images/furniture1.png',
      cost: '$19.06',
    },
    {
      image: '/images/furniture4.png',
      cost: '$19.06',
    },
    {
      image: '/images/furniture7.png',
      cost: '$19.06',
    },
    {
      image: '/images/furniture10.png',
      cost: '$19.06',
    },
  ]
  const Role2s: Role2[] = [
    {
      image: '/images/furniture2.png',
      cost: '$19.06',
    },
    {
      image: '/images/furniture5.png',
      cost: '$19.06',
    },
    {
      image: '/images/furniture8.png',
      cost: '$19.06',
    },
    {
      image: '/images/furniture11.png',
      cost: '$19.06',
    },
  ]
  const Role3s: Role3[] = [
    {
      image: '/images/furniture3.png',
      cost: '$19.06',
    },
    {
      image: '/images/furniture6.png',
      cost: '$19.06',
    },
    {
      image: '/images/furniture9.png',
      cost: '$19.06',
    },
    {
      image: '/images/furniture12.png',
      cost: '$19.06',
    },
  ]
  // const [Content, setContent] = useState([
   
  // ])

  return (
    <>
      <section className={styles.section}>
        <h2>Featured Product</h2>
        <article className={styles.container1}>
          <div className={styles.firstline}>
            {Role.map((img, index) => (
              <div key={index} className={styles.slider_content}>
                <img src={img.image} alt="" className={styles.img} />
              </div>
            ))}
          </div>
          <div className={styles.secondline}>
            {Role2s.map((img, index) => (
              <div key={index} className={styles.slider_content}>
                <img src={img.image} alt="" className={styles.img} />
              </div>
            ))}
          </div>
          <div className={styles.thirdline}>
            {Role3s.map((img, index) => (
              <div key={index} className={styles.slider_content}>
                <img src={img.image} alt="" className={styles.img} />
              </div>
            ))}
          </div>
        </article>

        <button className={styles.btn}>LOAD MORE</button>
      </section>
    </>
  )
}

export default Featured
