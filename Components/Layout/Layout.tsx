import Navbar from '../Nav/nav'
import Footer from '../Footer/footer' 
import Head from 'next/head'

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
export default Layout
