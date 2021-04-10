import React, { useState } from 'react'
import styles from './details.module.css'

interface Details {
  image: string
  name: string
  cost: string
  description: string
  details: string
}

const Related = () => {
  const Detail: Details[] = [
    {
      image: '/images/furniture1.png',
      name: 'Sona Armless Chair',
      cost: '$400.00',
      description: 'Available : In Stock',
      details:
        'Versatile elegance for dining room, office or living room. This seating solution offers great appeal. Bamboo chairs combine premium quality materials with unique high-style design, with the advanced product engineering and packaging reinforcement, each product is designed, manufactured and packaged with shipping in mind.',
    },
  ]
  return (
    <>
      <section className={styles.section}>
        <h2>Related Product</h2>

        <div className={styles.firstline}>
          {Detail.map((img, index) => (
            <div key={index} className={styles.slider_content}>
              <img src={img.image} alt="" className={styles.img} />
              <h3>{img.name}</h3>
              <h4>{img.cost}</h4>
              <a>{img.description}</a>
              <p>{img.details}</p>
            </div>
          ))}
          <div>
            <div className={styles.content_color}>Color</div>
            <div className={styles.content_size}>Size</div>
          </div>
          <div>
            <div className={styles.content_color}>Qty</div>
            <button>SHOP NOW</button>
          </div>
          <div className={styles.content_share}>Share</div>
        </div>
      </section>
    </>
  )
}

export default Related
