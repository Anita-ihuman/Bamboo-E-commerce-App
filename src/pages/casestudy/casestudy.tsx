import React from 'react'
import styles from '../../css/styles.module.css'
import Goals from './goal.'
import Traits from './traits'

const Casestudy = () => {
  return (
    <>
      <section className={styles.section_case}>
        <nav className={styles.nav}>
          <img src="/images/Logocase.png" className="logo"></img>
        </nav>

        <div className={styles.container_case}>
          <div className={styles.container_text}>
            <h1 className={styles.boldtext}>casestudy</h1>
            <div className={styles.p}>
              <p>
                Bamboo is a furnitutre company that provide quality product to meet your indoor or
                outdoor furniture needs.
              </p>

              <p>
                Bamboo e-commerce site is a solution that offer a simple system that organize
                different product where peoples(families, businesses) can intereact with the
                product.
              </p>
            </div>
          </div>
          <div className={styles.container_imgs}>
            <img src="/images/casestudy1.png" />
            <img src="/images/casestudy2.png" />
          </div>
        </div>
      </section>
      <Goals />
      <Traits />
    </>
  )
}

export default Casestudy
