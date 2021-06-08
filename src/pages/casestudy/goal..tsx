import React from 'react'
import styles from '../../css/styles.module.css'


const Goal = () => {
  return (
    <>
      <section className={styles.section_goal}>
        <nav className={styles.nav}>
          <img src="/images/Group.png" className="logo1" />
          <h3 className="textlogo">Casestudy</h3>
        </nav>
        <h1 className={styles.boldtext2}>goal</h1>
        <div className={styles.container_goal}>
          <div className={styles.container_goal_text}>
            <h3>SALE SOLUTION</h3>

            <p>
              The Bamboo E-commerce site provide a digital space were digital transaction can take
              place between the buyer and seller.
            </p>
          </div>

          <div className={styles.container_goal_text}>
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

 