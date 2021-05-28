import React, { useContext, useState } from 'react'
import styles from '../../css/details.module.css'
import Others from './related-products'
import Link from 'next/link'
import { furnitureContext } from '../itemContext'
import { items } from '../../data/item-array'
import { useRouter } from 'next/router'

const Related = () => {
  const { dispatch } = useContext(furnitureContext)

  const router = useRouter()

  console.log(router.query.id, Number(router.query.id))

  const item = items[Number(router.query.id)]

  const [num, setNum] = useState(0)
  const addNum = () => {
    setNum(num + 1)
  }
  const removeNum = () => {
    if (num > 0) {
      setNum(num - 1)
    } else {
      setNum(0)
    }
  }

  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <div key={item.id} className={styles.content}>
            <div className={styles.content_figure}>
              <img src={item.src} alt="" className={styles.imgbold} />

              <img src={item.navigate} alt="" className={styles.imgnav} />
            </div>

            <div className={styles.content_details}>
              <div className={styles.content_box}>
                <h3>{item.name}</h3>
                <h4>{item.cost}</h4>
                <span>{item.description}</span>
                <p className={styles.content_text}>{item.details}</p>
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
                  QTY
                  <button className={styles.content_span}>
                    <span onClick={addNum}>+</span>
                    {num}
                    <span onClick={removeNum}>-</span>
                  </button>
                </div>
                <Link href="/cart/cart" as="">
                  <button
                    className={styles.content_shop_btn}
                    onClick={() => {
                      dispatch({ type: 'INCREMENT' })
                    }}
                  >
                    SHOP NOW
                  </button>
                </Link>
              </div>

              <div className={styles.content_share}>
                <p>Share</p>

                <div className={styles.content_contact}>
                  <Link href="" as="">
                    <img src="https://img.icons8.com/color/48/000000/facebook-new.png" />
                  </Link>

                  <Link href="" as="">
                    <img src="https://img.icons8.com/color/48/000000/twitter-circled--v1.png" />
                  </Link>
                  <Link href="" as="">
                    <img src="https://img.icons8.com/material-rounded/24/000000/instagram-new.png" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Others />
      </section>
    </>
  )
}

export default Related
