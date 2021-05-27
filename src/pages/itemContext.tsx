import React, { useState, createContext, useReducer } from 'react'
import { furnitureContextProp, FurnitureProp, Role1 } from './interface'

export const furnitureContext = createContext({
  role: [],
  setRoles: () => {},
  count: [],
  countReducer: () => {},
  dispatch: () => {},
} as furnitureContextProp)

export const FurnitureProvider = ({ children }: FurnitureProp) => {
  const [role, setRoles] = useState<Role1[]>([
    {
      image: '/images/furniture1.png',
      cost: '$19.06',
    },
    {
      image: '/images/furniture 2.png',
      cost: '$19.06',
    },
    {
      image: '/images/furniture3.png',
      cost: '$19.06',
    },
    {
      image: '/images/furniture4.png',
      cost: '$19.06',
    },
    {
      image: '/images/furniture 5.png',
      cost: '$19.06',
    },
    {
      image: '/images/furniture6.png',
      cost: '$19.06',
    },
    {
      image: '/images/furniture7.png',
      cost: '$19.06',
    },
    {
      image: '/images/furniture 8.png',
      cost: '$19.06',
    },
    {
      image: '/images/furniture9.png',
      cost: '$19.06',
    },
    {
      image: '/images/furniture10.png',
      cost: '$19.06',
    },
    {
      image: '/images/furniture 11.png',
      cost: '$19.06',
    },
    {
      image: '/images/furniture12.png',
      cost: '$19.06',
    },
  ])

  const countReducer = (state: any, action: any) => {
    if (action.type === 'INCREMENT') {
      return state + 1
    }
    if (action.type === 'DECREMENT') {
      return state - 1
    }
    if (action.type === 'RESET') {
      return 0
    }
  }

  const [count, dispatch] = useReducer(countReducer, 0)
  return (
    <furnitureContext.Provider value={{ role, setRoles, countReducer, dispatch, count }}>
      {children}
    </furnitureContext.Provider>
  )
}
