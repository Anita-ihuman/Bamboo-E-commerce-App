import React, { useState } from 'react'
import styles from './details.module.css'

interface Details {
  src: string
  name: string
  cost: string
  description: string
  details: string
  id: string
  color: string
  count: number
}

const Related = () => {
  const Detail: Details[] = [
    {
      id: '1',
      src: '/images/furniture1.png',
      name: 'Sona Armless Chair',
      cost: '$400.00',
      description: 'Available : In Stock',
      details:
        'Versatile elegance for dining room, office or living room. This seating solution offers great appeal. Bamboo chairs combine premium quality materials with unique high-style design, with the advanced product engineering and packaging reinforcement, each product is designed, manufactured and packaged with shipping in mind.',
      color: '["red","green","white"]',
      count: 1,
    },
  ]

  return (
    <>
      <section className={styles.section}>
        <h2>Related Product</h2>

        <div className={styles.firstline}>
          {Detail.map((img, index) => (
            <div key={index} className={styles.slider_content}>
              <div>
                <img src={img.src} alt="" className={styles.img} />
              </div>

              <div>
                <div>
                  <h3>{img.name}</h3>
                  <h4>{img.cost}</h4>
                  <a>{img.description}</a>
                  <p>{img.details}</p>
                </div>

                <div>
                  <div className={styles.content_color}>
                    {/* {Detail.color.map((color) => (
                    <button></button>
                  ))} */}
                  </div>
                  <div className={styles.content_size}>Size</div>
                </div>

                <div>
                  <div className={styles.content_color}>Qty</div>
                  <button>SHOP NOW</button>
                </div>

                <div className={styles.content_share}>Share</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Related
