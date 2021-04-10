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

  const [cart, setCart] = useState([])
  const addToCart = (img) => {
    console.log('hello earth people')
    setCart([... cart, img]);
  }

  return (
    <>
      <section className={styles.b_section}>
        <h2>Bamboo Products</h2>
        <ul className={styles.section_list}>
          <li onClick={() =>(Chairs)}>CHAIR</li>
          <li onClick={() =>(Cabinets)}>CABINET</li>
          <li onClick={() =>(Sofas)}>SOFA</li>
          <li onClick={() =>(Benches)}>BENCH</li>
        </ul>
        <div className={styles.b_container}>
          {Chairs.map((img, index, product) => (
            <div key={index} className={styles.item_slider}>
              <img src={img.image} alt="" className={styles.item_img} />
              <h3>{}</h3>
            </div>
          ))}
        </div>
        <div className={styles.b_container}>
          {Cabinets.map((img, index) => (
            <div key={index} className={styles.item_slider}>
              <img src={img.image} alt="" className={styles.item_img} />
            </div>
          ))}
        </div>
        <div className={styles.b_container}>
          {Sofas.map((img, index) => (
            <div key={index} className={styles.item_slider}>
              <img src={img.image} alt="" className={styles.item_img} />
            </div>
          ))}
        </div>
        <div className={styles.b_container}>
          {Benches.map((img, index) => (
            <div key={index} className={styles.item_slider}>
              <img src={img.image} alt="" className={styles.item_img} />
            </div>
          ))}
        </div>
        <button onClick={() => addToCart(img)} className={styles.item_btn}>
          Add to cart
        </button>
        <div className={styles.loader}>
          <img />
        </div>
      </section>
    </>
  )
}

export default App
