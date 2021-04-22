import React from 'react'
import styles from './footer.module.css'


const  Footer = () =>{
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
              <div className={styles.blackbox_toptext}>
                <p>JOIN US ON</p>
              </div>

              <div className={styles.social}>
                <img src="https://img.icons8.com/fluent-systems-filled/30/4a90e2/facebook-new.png" />
              </div>

              <div className={styles.social}>
                <img src="https://img.icons8.com/color/31/4a90e2/twitter-circled--v1.png" />
              </div>

              <a className={styles.instagram1}>
                <i className="fab fa-instagram fa-1x"></i>
              </a>
            </div>
          </article>

          <article className={styles.blackbottom}>
            <div className={styles.blackbottom_text}>
              <a href="">TERMS & CODITION POLICY</a>
            </div>
            <div className={styles.blackbottom_img}>
              <img src="/images/Logo2.png" width="100%" />
            </div>
            <div className={styles.blackbottom_text}>© 2019 Bamboo All Rights Reserved</div>
          </article>
        </section>
      </footer>
    </>
  )
}
export default Footer
