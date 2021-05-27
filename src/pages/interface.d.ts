import { Interface } from 'readline'

export interface Role1 {
  image: string
  cost: string
}
export type ContextType = {
  role: Role1[]
}

export interface Cart {
  item: number
}

export interface furnitureContextProp {
  role: Role1[]
  count: Cart[]
  countReducer: (state: any, action: any) => any
  dispatch: React.Dispatch<any>
  setRoles: (x: Role1[]) => void
}

export interface FurnitureProp {
  children: string & any
}

export interface Item {
  src: string
  navigate: string
  name: string
  cost: string
  description: string
  details: string
  id: string
  color: string
  count: number
}