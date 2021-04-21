import { useState, useEffect } from 'react'
import { sideBar } from './sidebar'
import styles from './nav.module.css'
import Link from 'next/link'
import { IconContext } from 'react-icons'

const Navbar = () => {
  const [showSideBar, setShowSideBar] = useState(false)

  const [active, setActive] = useState(false)
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className={styles.nav}>
          <section className={styles.content}>
            <div className={styles.navbar} onClick={() => setActive(true)}>
              <Link href="#">
                <img src="https://img.icons8.com/ultraviolet/40/000000/menu--v3.png" />
              </Link>
            </div>

            {active === true && (
              <div className={showSideBar ? 'nav-menu active' : 'nav-menu'}>
                <ul className={styles.nav_menuitems}>
                  <li className={styles.navbar_toggle} onClick={() => setActive(false)}>
                    <Link href="#">
                      <img src="https://img.icons8.com/ultraviolet/40/000000/menu--v3.png" />
                    </Link>
                  </li>
                  {sideBar.map((item, index) => {
                    return (
                      <li key={index} className={styles.navbar_text}>
                        <Link href={item.path}>
                          <div>
                            <a> {item.icon}</a>
                            {item.title}
                          </div>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}
            <div className={styles.content_logo}>
              <Link href="/" as="/">
                <img src="/images/Logo.png" />
              </Link>
            </div>

            <div className={styles.content_shop}>
              <Link href="" as="">
                <a className={styles.content_shopicon}>
                  <i className="fa fa-search fa-2x" aria-hidden="true"></i>
                </a>
              </Link>

              <Link href="/Cart/cart" as="">
                <a className={styles.content_shopicon}>
                  <i className="fa fa-shopping-cart fa-2x" aria-hidden="true"></i>
                </a>
              </Link>
            </div>
          </section>
        </nav>
      </IconContext.Provider>
    </>
  )
}
export default Navbar
