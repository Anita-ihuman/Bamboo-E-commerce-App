import Layout from '../components/Layout/Layout'
import { FurnitureProvider } from './itemContext'
interface ElementProps {
  Component: string & any
  pageProps: string
}

export function Element({ pageProps, Component }: ElementProps) {
  return (
    <FurnitureProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </FurnitureProvider>
  )
}

export default Element
