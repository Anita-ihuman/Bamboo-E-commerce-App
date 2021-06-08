import React  from 'react'
import styles from '../../assets/css/styles.module.css'

const Trait = () => {
  return (
    <>
      <section className={styles.section_trait}>
        <nav className={styles.nav}>
          <img src="/images/baboo.png" className="logo" />
          <h3 className="textlogo2">Casestudy</h3>
        </nav>

        <div className={styles.container_trait}>
          <div className={styles.container_trait_text}>
            <h1 className={styles.boldtext2_green}>traits</h1>
            <ul>
              <li>MODERN/CLASSIC</li>
              <li>SIMPLE/GENIUNE</li>
              <li>EARTHLY</li>
            </ul>
          </div>
          <div className={styles.container_right}>
            <img src="/images/traits.png" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Trait
