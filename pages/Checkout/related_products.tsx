import React from 'react'
import styles from './details.module.css'
// import { MotionAnimate } from 'react-motion-animate'

interface Role {
  image: string
  cost: string
}

const Related = () => {
  const Role: Role[] = [
    {
      image: '/images/product1.png',
      cost: '$19.06',
    },
    {
      image: '/images/product2.png',
      cost: '$19.06',
    },
    {
      image: '/images/product3.png',
      cost: '$19.06',
    },
    {
      image: '/images/product4.png',
      cost: '$19.06',
    },
  ]
  // const scrollFadeIn = {
  //   hidden: {
  //     opacity: 0,
  //     y: 40,
  //   },
  //   show: {
  //     opacity: 1,
  //     y: 0,
  //   },
  // }
  return (
    <>
      <section className={styles.section}>
        <h2>Related Product</h2>
        <article >
          <div className={styles.firstline}>
            {Role.map((img, index) => (
              <div key={index} className={styles.slider_content}>
                <img src={img.image} alt="" className={styles.img} />
              </div>
            ))}
          </div>
        </article>
      </section>
    </>
  )
}

export default Related
