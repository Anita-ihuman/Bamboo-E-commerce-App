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
      src:  '/images/furniture2.png',
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
        <div className={styles.firstline}>
          {Detail.map((img, index) => (
            <div key={index} className={styles.content}>
              <div className={styles.content_figure}>
                <img src={img.src} alt="" className={styles.imgbold} />
              </div>

              <div className={styles.content_details}>
                <div className={styles.content_box}>
                  <h3>{img.name}</h3>
                  <h4>{img.cost}</h4>
                  <span>{img.description}</span>
                  <p className={styles.content_text}>{img.details}</p>
                </div>

                <div className={styles.content_specs}>
                  <div className={styles.content_color}>
                    <p>Color</p>
                    <form className={styles.content_form}>
                      <input
                        type="radio"
                        name="brown"
                        value="brown"
                        className={styles.brown}
                      ></input>
                      <input
                        type="radio"
                        name="black"
                        value="black"
                        className={styles.black}
                      ></input>
                      <input type="radio" name="grey" value="grey" className={styles.grey}></input>
                    </form>
                  </div>

                  <div className={styles.content_size}>
                    <p>Size</p>
                    <div className={styles.content_btn}>
                      <button>XML</button>
                      <button>S</button>
                      <button>M</button>
                    </div>
                  </div>
                </div>

                <div className={styles.content_shop}>
                  <div className={styles.content_qty}>
                    Qty<button className={styles.content_span}>- 01 +</button>
                  </div>
                  <button className={styles.content_shop_btn}>SHOP NOW</button>
                </div>

                <div className={styles.content_share}>
                  <p>Share</p>
                  <div className={styles.content_contact}>
                    <img src="https://img.icons8.com/color/48/000000/facebook-new.png" />

                    <img src="https://img.icons8.com/color/48/000000/twitter-circled--v1.png" />

                    <img src="https://img.icons8.com/material-rounded/24/000000/instagram-new.png" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Related
