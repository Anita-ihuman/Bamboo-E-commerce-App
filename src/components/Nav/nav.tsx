import { useState, useContext } from 'react'
import { sideBar } from './Sidebar'
import styles from '../../css/nav.module.css'
import Link from 'next/link'
import { IconContext } from 'react-icons'
import { furnitureContext } from '../../pages/itemContext'

const Navbar = () => {
  const [active, setActive] = useState(false)

  const { count } = useContext(furnitureContext)

  const [input, setInput] = useState(false)

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
              <div className={'nav-menu'}>
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
              <form className={styles.form}>
                {input && (
                  <input
                    type="name"
                    name="name"
                    // onChange={updateName}
                    placeholder="Search.."
                  ></input>
                )}

                <Link href="/" as="">
                  <a
                    className={styles.content_shopicon}
                    onClick={() => setInput((input) => !input)}
                  >
                    <i className="fa fa-search fa-2x" aria-hidden="true"></i>
                  </a>
                </Link>
              </form>

              <Link href="/cart/cart" as="">
                <a className={styles.content_shopicon}>
                  <i className="fa fa-shopping-cart fa-2x" aria-hidden="true">
                    {' '}
                    <span className={styles.cart_count}> {count}</span>
                  </i>
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
