import Layout from '../Components/Layout/Layout'


interface ElementProps {
  Component: string & any;
  pageProps: string
}

export function Element({ pageProps, Component }: ElementProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default  Element
