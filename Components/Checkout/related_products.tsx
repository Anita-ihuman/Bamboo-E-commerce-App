import React, { useState } from 'react'
import styles from './details.module.css'

interface Role {
  image: string
  cost: string
}

const Related = () => {
  const Role: Role[] = [
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
  return (
    <>
      <section className={styles.section}>
        <h2>Related Product</h2>

        <div className={styles.firstline}>
          {Role.map((img, index) => (
            <div key={index} className={styles.slider_content}>
              <img src={img.image} alt="" className={styles.img} />
            </div>
          ))}
        </div>

      </section>
    </>
  )
}

export default Related
