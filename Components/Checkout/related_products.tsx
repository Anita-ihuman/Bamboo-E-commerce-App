import React from 'react'
import styles from './details.module.css'
import Slide from 'react-reveal/Fade'

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
  return (
    <>
      <section className={styles.section}>
        <h2>Related Product</h2>
        <Slide left>
          <div className={styles.firstline}>
            {Role.map((img, index) => (
              <div key={index} className={styles.slider_content}>
                <img src={img.image} alt="" className={styles.img} />
              </div>
            ))}
          </div>
        </Slide>
      </section>
    </>
  )
}

export default Related
