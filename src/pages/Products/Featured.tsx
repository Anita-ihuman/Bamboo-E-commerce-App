import React, { useState, useContext } from 'react'
import styles from '../../css/Featured.module.css'
import Bamboo from './Bamboo-product'
import { furnitureContext } from '../../contexts/itemContext'
import Link from 'next/link'

const Featured = () => {
  const [inHover, setHover] = useState(false)
  const { role, dispatch } = useContext(furnitureContext)

  function refreshPage() {
    window.location.reload(false)
  }

  return (
    <>
      <section className={styles.section}>
        <h2>Featured Product</h2>
        <article className={styles.container1}>
          <div className={styles.firstline}>
            {role.map((img, index) => (
              <div key={index} className={styles.slider_content}>
                <div className={styles.figure}>
                  <Link href={`/item/${index}`}>
                    <img
                      src={img.image}
                      alt="item images"
                      className={styles.img}
                      onMouseEnter={() => setHover(true)}
                      onMouseLeave={() => setHover(true)}
                    />
                  </Link>
                  {inHover && (
                    <div className={styles.slider_costbox}>
                      <h3>{img.cost}</h3>
                      <figure
                        className={styles.cart}
                        onClick={() => {
                          dispatch({ type: 'INCREMENT' })
                        }}
                      >
                        <img src="/images/back.png" />
                        <i className="fa fa-shopping-cart fa-1x" aria-hidden="true"></i>
                      </figure>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </article>

        <button className={styles.btn} onClick={refreshPage}>
          LOAD MORE
        </button>
        <Bamboo />
      </section>
    </>
  )
}

export default Featured
