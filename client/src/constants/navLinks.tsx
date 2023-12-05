// named imports
import { ArrowRightOnRectangleIcon, ChartBarSquareIcon, CubeTransparentIcon, CurrencyRupeeIcon, HomeIcon, UsersIcon } from '@heroicons/react/20/solid'
import { CircleStackIcon, Cog8ToothIcon } from '@heroicons/react/24/solid'

export const navLinks = [
  {
    name: 'Home',
    path: '/home',
    icon: <HomeIcon />
  },
  {
    name: 'Purchase Orders',
    path: '/orders',
    icon: <CircleStackIcon />
  },
  {
    name: 'Customers',
    path: '/customers',
    icon: <UsersIcon />
  },
  // {
  //   name: 'Finance Flow',
  //   path: '/finance-flow',
  //   icon: <CurrencyRupeeIcon />
  // },
  {
    name: 'Product Catalogue',
    path: '/product-catalogue',
    icon: <CubeTransparentIcon />
  },
  {
    name: 'Account Settings',
    path: '/settings',
    icon: <Cog8ToothIcon />
  },
]

export const bottomNavLinks = [

]