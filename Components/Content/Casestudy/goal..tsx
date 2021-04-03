import React, { useState } from 'react'
import Link from '../../../node_modules/next/link'
import styles from './styles.module.css'


const Goal = () => {
  return (
    <>
           <section className={styles.section}>
        <nav className={styles.nav}>
          <img className="logo"></img>
        </nav>
        <h1 className={styles.boldtext}>goal</h1>
        <div className={styles.container}>
          <div className={styles.container_textleft}>
            <h3>SALE SOLUTION</h3>
            <p>
              The Bamboo E-commerce site provide a digital space were digital transaction can take
              place between the buyer and seller.
            </p>
          </div>
          <br />
          <div className={styles.container_texright}>
            <h3>PRODUCT HUB</h3>
            <p>
              The Platform provide a single source of truth for all all things furniture to
              interested parties and eventually be converted to a Lead
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Goal

 