import React,{useState} from 'react'

import styles from './nav.module.css'
import MenuList from './interfaces'

// interface Menu {
//   title: string
//   url: string
// }

const Navbar =() => {
  const [click, setClick] = useState(false)

  const handleClick = () => {
    setClick(!click)
  }
  return (
    <nav className={styles.nav}>
      <section className={styles.content}>
        <div className={styles.content_menu}>
          <a href="" className={styles.content_shopicon1} onClick={handleClick}>
            <i className={click ? 'fas fa-times fa-2x' : 'fas fa-bars fa-2x'}></i>
          </a>
        </div>

        <div className={styles.content_logo}>
          <img src="/images/Logo.png" />
        </div>
        <ul className={ styles.content_menulist }>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Casestudy</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Casestudy</a>
          </li>
        </ul>
        <div className={styles.content_shop}>
          <a href="" className={styles.content_shopicon}>
            <i className="fa fa-search fa-2x" aria-hidden="true"></i>
          </a>
          <a href="" className={styles.content_shopicon}>
            <i className="fa fa-shopping-cart fa-2x" aria-hidden="true"></i>
          </a>
        </div>
      </section>
    </nav>
  )
}
export default Navbar
