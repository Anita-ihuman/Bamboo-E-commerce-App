import React, { useState } from 'react'
import styles from './Featured.module.css'

interface Role1 {
  image: string
  cost: string
}
interface Role2 {
  image: string
  cost: string
}
interface Role3 {
  image: string
  cost: string
}
const Featured = () => {
  const Role: Role1[] = [
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
  const Role2s: Role2[] = [
    {
      image: '/images/furniture2.png',
      cost: '$19.06',
    },
    {
      image: '/images/furniture5.png',
      cost: '$19.06',
    },
    {
      image: '/images/furniture8.png',
      cost: '$19.06',
    },
    {
      image: '/images/furniture11.png',
      cost: '$19.06',
    },
  ]
  const Role3s: Role3[] = [
    {
      image: '/images/furniture3.png',
      cost: '$19.06',
    },
    {
      image: '/images/furniture6.png',
      cost: '$19.06',
    },
    {
      image: '/images/furniture9.png',
      cost: '$19.06',
    },
    {
      image: '/images/furniture12.png',
      cost: '$19.06',
    },
  ]
  // const [Content, setContent] = useState([

  // ])
  const [inHover, setHover] = useState(false)
  const [cart, setCart] = useState([]);
  
  const addTocart = (img: Role3) => {
    console.log('hello anita keep trying!!!')
    setCart([...cart, img])
  }

  return (
    <>
      <section className={styles.section}>
        <h2>Featured Product</h2>
        <article className={styles.container1}>
          <div className={styles.firstline}>
            {Role.map((img, index) => (
              <div key={index} className={styles.slider_content}>
                <a href="">
                  <img
                    src={img.image}
                    alt=""
                    className={styles.img}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                  />
                </a>

                {inHover && (
                  <div className={styles.slider_costbox}>
                    <h3>{img.cost}</h3>
                    <a href="" className={styles.cart}>
                      <img src="/images/back.png" />
                      <i className="fa fa-shopping-cart fa-1x" aria-hidden="true"></i>
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className={styles.secondline}>
            {Role2s.map((img, index) => (
              <div key={index} className={styles.slider_content}>
                <a href="">
                  <img
                    src={img.image}
                    alt=""
                    className={styles.img}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(true)}
                  />
                </a>

                {inHover && (
                  <div className={styles.slider_costbox}>
                    <h3>{img.cost}</h3>
                    <a href="" className={styles.cart}>
                      <img src="/images/back.png" />
                      <i className="fa fa-shopping-cart fa-1x" aria-hidden="true"></i>
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className={styles.thirdline}>
            {Role3s.map((img, index) => (
              <div key={index} className={styles.slider_content}>
                <a href="">
                  <img
                    src={img.image}
                    alt=""
                    className={styles.img}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(true)}
                  />
                </a>
                {inHover && (
                  <div className={styles.slider_costbox}>
                    <h3>{img.cost}</h3>
                    <a href="" className={styles.cart} onClick={() => addTocart(img)}>
                      <img src="/images/back.png" />
                      <i className="fa fa-shopping-cart fa-1x" aria-hidden="true"></i>
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </article>

        <button className={styles.btn}>LOAD MORE</button>
      </section>
    </>
  )
}

export default Featured
