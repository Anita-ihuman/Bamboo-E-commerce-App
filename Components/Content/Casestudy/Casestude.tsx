import React, { useState } from 'react'
import Link from '../../../node_modules/next/link'
import styles from './styles.module.css'
import Masonry from 'react-masonry-css'

const Casestudy = () => {
  return (
    <>
      <section className={styles.section}>
        <nav className={styles.nav}>
          <img className="logo"></img>
        </nav>
        <h1 className={styles.boldtext}>Casestudy</h1>
        <div className={styles.container}>
          <div className={styles.container_text}>
            <p>
              Bamboo is a furnitutre company that provide quality product to meet your indoor or
              outdoor furniture needs.
            </p>
            <br />
            <p>
              Bamboo e-commerce site is a solution that offer a simple system that organize
              different product where peoples(families, businesses) can intereact with the product.
            </p>
          </div>
          <div className={styles.container_imgs}>
            <img src="" />
            <img src="" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Casestudy
