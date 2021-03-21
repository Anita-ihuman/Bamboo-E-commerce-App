import React, { useState } from 'react'
import styles from './footer.module.css'

interface FooterLink {
  title: string
  href: string
  label: string
}

export function Footer({ }: FooterLink) {
  return (
    <>
      <footer className={styles.footer}>
        <section className={styles.blackbox}>
          <article className={styles.blackbox_top}>
            <div className={styles.blackbox_topleft}>
              <p>SUBSCRIBE TO OUR NEWSLETTER</p>
              <form className={styles.blackbox_form}>
                <input
                  className={styles.blackbox_input}
                  type="email"
                  placeholder="Enter Your E-mail Address Here"
                />
              </form>
            </div>
            <div className={styles.blackbox_line}></div>
            <div className={styles.blackbox_topright}>
              <p>JOIN US ON</p>
              <a href="">
                <img src="Facebook.png" />
              </a>
              <a href="">
                <img src="Facebook.png" />
              </a>
              <a href="">
                <img src="Instagram.png" />
              </a>
            </div>
          </article>

          <article className={styles.blackbottom}>
            <div className={styles.blackbottom_text}>
              <a href="">TERMS & CODITION POLICY</a>
            </div>
            <div>
              <img src=".Logo2.png" />
            </div>
            <div className={styles.blackbottom_text}>© 2019 Bamboo All Rights Reserved</div>
          </article>
        </section>
      </footer>
    </>
  )
}
export default Footer
