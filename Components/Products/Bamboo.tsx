import React, { useState } from 'react'
import styles from './Featured.module.css'

interface Chair {
  image: string
  cost: string
}

interface Cabinet {
  image: string
  cost: string
}

interface Sofa {
  image: string
  cost: string
}

interface Bench {
  image: string
  cost: string
}

const App = () => {
  const Chairs: Chair[] = [
    {
      image: '/images/cabinet1.png',
      cost: '$19.06',
    },
    {
      image: '/images/cabinet2.png',
      cost: '$19.06',
    },
    {
      image: '/images/cabinet3.png',
      cost: '$19.06',
    },
  ]
  const Cabinets: Cabinet[] = [
    {
      image: '/images/cabinet1.png',
      cost: '$19.06',
    },
    {
      image: '/images/cabinet2.png',
      cost: '$19.06',
    },
    {
      image: '/images/cabinet3.png',
      cost: '$19.06',
    },
  ]
  const Sofas: Sofa[] = [
    {
      image: '/images/cabinet1.png',
      cost: '$19.06',
    },
    {
      image: '/images/cabinet2.png',
      cost: '$19.06',
    },
    {
      image: '/images/cabinet3.png',
      cost: '$19.06',
    },
  ]
  const Benches: Bench[] = [
    {
      image: '/images/cabinet1.png',
      cost: '$19.06',
    },
    {
      image: '/images/cabinet2.png',
      cost: '$19.06',
    },
    {
      image: '/images/cabinet3.png',
      cost: '$19.06',
    },
  ]

  // const [cart, setCart] = useState([])
  // const addToCart = (img) => {
  //   console.log('hello earth people')
  //   setCart([... cart, img]);
  // }
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
            {Chairs.map((img, index, product) => (
              <div key={index} className={styles.item_slider}>
                <img src={img.image} alt="" className={styles.item_img} />
                <h3>{}</h3>
              </div>
            ))}
          </div>
        )}
        {active === 'cabinet' && (
          <div className={styles.b_container}>
            {Cabinets.map((img, index) => (
              <div key={index} className={styles.item_slider}>
                <img src={img.image} alt="" className={styles.item_img} />
              </div>
            ))}
          </div>
        )}
        {active === 'sofa' && (
          <div className={styles.b_container}>
            {Sofas.map((img, index) => (
              <div key={index} className={styles.item_slider}>
                <img src={img.image} alt="" className={styles.item_img} />
              </div>
            ))}
          </div>
        )}
        {active === 'bench' && (
          <div className={styles.b_container}>
            {Benches.map((img, index) => (
              <div key={index} className={styles.item_slider}>
                <img src={img.image} alt="" className={styles.item_img} />
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
