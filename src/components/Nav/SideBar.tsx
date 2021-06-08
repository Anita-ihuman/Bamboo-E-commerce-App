import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
// import * as IoIcons  from 'react-icons/io'

interface Menu {
  title: string
  path: string
  icon: any
}

export const sideBar: Menu[] = [
  { title: 'Home', path: '/', icon: <AiIcons.AiFillHome /> },

  {
    title: 'Cart',
    path: '/cart/cart',
    icon: <FaIcons.FaCartPlus />,
  },
  {
    title: 'Casestudy',
    path: '/casestudy/casestudy',
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: 'Admin',
    path: '/admin/admin',
    icon: <IoIcons.IoMdHelpCircle />,
  },
]
