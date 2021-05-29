import React, { useState } from 'react'
import styles from '../../css/Featured.module.css'
import { chair, cabinet, sofa, bench } from '../../data/bamboo-product-array'

const App = () => {
  const [active, setActive] = useState('chair')
  return (
    <>
      <section className={styles.b_section}>
        <h3>Bamboo Products</h3>
        <ul className={styles.section_list}>
          <li onClick={() => setActive('chair')}>CHAIR</li>
          <li onClick={() => setActive('cabinet')}>CABINET</li>
          <li onClick={() => setActive('sofa')}>SOFA</li>
          <li onClick={() => setActive('bench')}>BENCH</li>
        </ul>
        {active === 'chair' && (
          <div className={styles.b_container}>
            {chair.map((img, index) => (
              <div key={index} className={styles.item_slider}>
                <img src={img.image} alt="" className={styles.item_img} />
                <h3>{}</h3>
              </div>
            ))}
          </div>
        )}
        {active === 'cabinet' && (
          <div className={styles.b_container}>
            {cabinet.map((img, index) => (
              <div key={index} className={styles.item_slider}>
                <img src={img.image} alt="" className={styles.item_img} />
                <h3>{}</h3>
              </div>
            ))}
          </div>
        )}
        {active === 'sofa' && (
          <div className={styles.b_container}>
            {sofa.map((img, index) => (
              <div key={index} className={styles.item_slider}>
                <img src={img.image} alt="" className={styles.item_img} />
                <h3>{}</h3>
              </div>
            ))}
          </div>
        )}
        {active === 'bench' && (
          <div className={styles.b_container}>
            {bench.map((img, index) => (
              <div key={index} className={styles.item_slider}>
                <img src={img.image} alt="" className={styles.item_img} />
                <h3>{}</h3>
              </div>
            ))}
          </div>
        )}
        {/* <button className={styles.item_btn}>Add to cart</button> */}
        <div className={styles.loader}>
          <img src="/images/slider_check.png" alt="" className={styles.item_img2} />
          <img src="/images/slider_meter.png" alt="" className={styles.item_img3} />
        </div>
      </section>
    </>
  )
}

export default App
