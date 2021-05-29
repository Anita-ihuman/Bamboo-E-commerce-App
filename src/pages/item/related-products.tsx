import React from 'react'
import styles from '../../css/details.module.css'
import { related } from '../../data/related-array'

const Related = () => {
  return (
    <>
      <section className={styles.section}>
        <h2>Related Product</h2>
        <article>
          <div className={styles.firstline}>
            {related.map((img, index) => (
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
