import React, { useState } from 'react'
import { SideBar } from './sidebar'
import styles from './nav.module.css'
import { useRouter } from 'next/router'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import Link from 'next/link'

const Navbar = () => {
  // const [click, setClick] = useState(false)
  const [sidebar, setSidebar] = useState(false)

  // const handleClick = () => {
  //   setClick(!click)
  // }
  const showSidebar = () => setSidebar(!sidebar)
  return (
    <>
      <nav className={styles.nav}>
        <section className={styles.content}>
          <div className={styles.content_menu}>
            <Link href="#">
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
            {/* <a href="" className={styles.content_shopicon1} >
            <i className={click ? 'fas fa-times fa-2x' : 'fas fa-bars fa-2x'}></i>
          </a> */}
          </div>
          <div className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className={styles.content_menulist}>
              <li>
                <Link href="#">
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>
              {SideBar.map((item, index) => {
                ;<li key={index} className={styles.items}>
                  <Link href={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              })}
            </ul>
          </div>
          <div className={styles.content_logo}>
            <img src="/images/Logo.png" />
          </div>

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
    </>
  )
}
export default Navbar
