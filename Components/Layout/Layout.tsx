import Navbar from '../Nav/nav';
import Head from 'next/head'

interface PropE {
  children: string & any
}

const Layout = ({ children }: PropE) => {
  return (
    <div className="content">
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <Navbar />
      {children}
    </div>
  )
}
export default Layout
