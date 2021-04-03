import React, { useState } from 'react'
import Link from '../../../node_modules/next/link'
import styles from './styles.module.css'
import Masonry from 'react-masonry-css'

const Trait = () => {
  return (
    <>
      <section className={styles.section}>
        <nav className={styles.nav}>
          <img className="logo"></img>
        </nav>
        <h1 className={styles.boldtext}>Traits</h1>
        <div className={styles.container}>
          <div className={styles.container_text}>
            <ul>
              <li>MODERN/CLASSIC</li>
              <li>SIMPLE/GENIUNE</li>
              <li>EARTHLY</li>
            </ul>
          </div>
          <div className={styles.container_imgs}>
            <img src="" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Trait
