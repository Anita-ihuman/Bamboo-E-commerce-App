import { createContext } from 'react'

export default createContext({
  products: [],
  carts: [],
  addProductToCart: () => { },
  removeProductFromCart: () => { },
  clearCart:()=>{}
})