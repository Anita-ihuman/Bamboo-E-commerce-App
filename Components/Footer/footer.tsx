import React, { useState } from 'react'
import styles from './footer.module.css'

interface FooterLink {
  title: string
  href: string
  label: string
}

export function Footer({ title, href }: FooterLink) {
  return (
    <>
      <footer className={styles.footer}>
        <section className={styles.blackbox}>
          <article className={styles.blackbox_top}>
            <div className={styles.blackbox_topleft}>
              <p>{title}</p>
              <form className={styles.blackbox_input}>
                <label htmlFor="name">Enter Your E-mail Address Here </label>
                <input type="text" id="name" name="fname" />
              </form>
            </div>
            <div></div>
            <div className={styles.blackbox_topright}>
              <p>JOIN US ON</p>
              <a href="">{href}</a>
              <a href="">twitter</a>
              <a href="">instagram</a>
            </div>
          </article>

          <article className={styles.blackbottom}>
            <div>
              <a href="">TERMS & CODITION POLICY</a>
            </div>
            <div>
              <img src=".Logo2.png"/>
            </div>
            <div>© 2019 Bamboo All Rights Reserved</div>
          </article>
        </section>
      </footer>
    </>
  )
}
export default Footer
