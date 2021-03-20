import styles from './nav.module.css'
import Logo from './Logo.png';
  
interface PropE {
 
};


const Navbar = ({ }: PropE) => {
  return (
    <nav className={styles.nav}>
      <section className={styles.content}>
        <div className={styles.content_menu}>
          <a>
            <i className="fa fa-bars" aria-hidden="true"></i>
          </a>
        </div>

        <div className={styles.content_logo}>
          <img src={Logo} />
        </div>
        <div className={styles.content_shop}>
          <a>
            <i className="fa fa-search" aria-hidden="true"></i>
          </a>
          <a>
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
          </a>
        </div>
      </section>
    </nav>
  )
}
export default Navbar