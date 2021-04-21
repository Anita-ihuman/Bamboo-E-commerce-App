import React from 'react'
import styles from './details.module.css'
import Others from '../Checkout/related_products'
interface Details {
  src: string
  navigate:string
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
      src: '/images/product-img.png',
      navigate: '/images/navigation_small.png',
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
        <div className={styles.container}>
          {Detail.map((img, index) => (
            <div key={index} className={styles.content}>
              <div className={styles.content_figure}>
                <img src={img.src} alt="" className={styles.imgbold} />
                <img src={img.navigate} alt="" className={styles.imgnav} />
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
                      <button name="brown" value="brown" className={styles.brown}></button>
                      <button name="black" value="black" className={styles.black}></button>
                      <button value="grey" className={styles.grey}></button>
                    </form>
                  </div>

                  <div className={styles.content_size}>
                    <p>Size</p>
                    <div className={styles.content_btn}>
                      <button className={styles.content_xl}>XL</button>
                      <button className={styles.content_s}>S</button>
                      <button className={styles.content_m}>M</button>
                    </div>
                  </div>
                </div>

                <div className={styles.content_shop}>
                  <div className={styles.content_qty}>
                    QTY<button className={styles.content_span}>- 01 +</button>
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
        <Others />
      </section>
    </>
  )
}

export default Related
