import React, { useState } from 'react'
import Link from '../../../node_modules/next/link'
import styles from './styles.module.css'
import Masonry from 'react-masonry-css'

const Trait = () => {
  return (
    <>
      <section className={styles.section_trait}>
        <nav className={styles.nav}>
          <img className="logo"></img>
        </nav>
        <h1 className={styles.boldtext}>Traits</h1>
        <div className={styles.container_trait}>
          <div className={styles.container_trait_text}>
            <ul>
              <li>MODERN/CLASSIC</li>
              <li>SIMPLE/GENIUNE</li>
              <li>EARTHLY</li>
            </ul>
          </div>
          <div className={styles.container_right}>
            <img src="" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Trait
