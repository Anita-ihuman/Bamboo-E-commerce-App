import React, { useState } from 'react'
import styles from './Featured.module.css'
import Bamboo from './Bamboo'
import { Role } from './items'
// import Link from 'next/link'


const Featured = () => {
  const [inHover, setHover] = useState(false)
  // const [cart, setCart] = useState([])

  // const addTocart = (img) => {
  //   console.log('hello anita keep trying!!!')
  //   setCart([...cart, img])

  // onClick={() => addTocart(img)}
  // }

  return (
    <>
      <section className={styles.section}>
        <h2>Featured Product</h2>
        {/* <Link href="/Cart/cart" as="">
          <a className={styles.content_shopicon}>
            <i className="fa fa-shopping-cart fa-2x" aria-hidden="true"></i>
            <span className={styles.cart_count}>({cart.length})</span>
          </a>
        </Link> */}
        <article className={styles.container1}>
          <div className={styles.firstline}>
            {Role.map((img, index) => (
              <div key={index} className={styles.slider_content}>
                <a href="">
                  <img
                    src={img.image}
                    alt="item images"
                    className={styles.img}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(true)}
                  />
                </a>

                {inHover && (
                  <div className={styles.slider_costbox}>
                    <h3>{img.cost}</h3>
                    <figure className={styles.cart} >
                      <img src="/images/back.png" />
                      <i className="fa fa-shopping-cart fa-1x" aria-hidden="true"></i>
                    </figure>
                  </div>
                )}
              </div>
            ))}
          </div>
        </article>

        <button className={styles.btn}>LOAD MORE</button>
        <Bamboo />
      </section>
    </>
  )
}

export default Featured
