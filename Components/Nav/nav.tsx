import styles from './nav.module.css'

  
interface PropE {
 
};


const Navbar = ({ }: PropE) => {
  return (
    <nav className={styles.nav}>
      <section className={styles.content}>
        <div className={styles.content_menu}>
          <a href="" className={styles.content_shopicon}>
            <i className="fa fa-bars fa-2x" aria-hidden="true"></i>
          </a>
        </div>

        <div className={styles.content_logo}>
    
            <img src="/Logo.png" />
       
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
  )
}
export default Navbar