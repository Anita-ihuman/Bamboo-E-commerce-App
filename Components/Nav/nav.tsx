import styles from " ./nav.module.scss";

interface PropE {
 
}

const Navbar = ({ }: PropE) => {
  return (
    <nav className={styles.nav}>
      <section className={styles.content}>
        <div className={styles.content_menu}>
          <i className="fa fa-bars" aria-hidden="true"></i>
        </div>

        <div className={styles.content_logo}>
          <img src="" />
        </div>
        <div className={styles.content_shop}>
          <i className="fa fa-search" aria-hidden="true"></i>
          <i className="fa fa-shopping-cart" aria-hidden="true"></i>
        </div>
      </section>
    </nav>
  )
}
export default Navbar