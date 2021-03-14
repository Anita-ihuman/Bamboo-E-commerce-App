import styles from './footer.module.scss'

interface FooterLink {
  title: string
  href: string
}
interface FooterSection {
  title: string
  links: FooterLink[]
}

const footerSections: FooterSection[] = [
  {
    title: 'More on The Blog',
    links: [
      { title: 'About MNTN', href: '/' },
     
    ],
  },
  {
    title: 'More on MNTN',
    links: [
      { title: 'The Team', href: '/' },
      
    ],
  },
]

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <section className={styles.Third}>
          <article className={styles.text}>
            <div>
              <img src="Logo.png" className={styles.textimg} />
              <p>Get out there & discover your next slope, mountain & destination!</p>
            </div>
            <div className={styles.copy}>Copyright 2019 MNTN, Inc. Terms & Privacy</div>
          </article>
          {footerSections.map(({ title, links }) => (
            <section key={title} className={styles.text1}>
              <h3>{title}</h3>
              <ul>
                {links.map((link) => (
                  <li key={link.title}>
                    <a href={link.href} className={styles.list}>
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </section>
      </footer>
    </>
  )
}
export default Footer
