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
    path: '/Checkout/Item_details',
    icon: <FaIcons.FaCartPlus />,
  },
  {
    title: 'Casestudy',
    path: '/Casestudy/Casestude',
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: 'Admin',
    path: '/Admin/admin',
    icon: <IoIcons.IoMdHelpCircle />,
  },
]
