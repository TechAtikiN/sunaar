import { CircleStackIcon, Square2StackIcon, TableCellsIcon, UsersIcon } from "@heroicons/react/20/solid"

export const data = [
  {
    title: 'Sales Target',
    value: 900000,
    icon: <Square2StackIcon className='h-7 w-7 text-purple-500' />
  },
  {
    title: 'Sales',
    value: 100000,
    icon: <TableCellsIcon className='h-7 w-7 text-emerald-500' />
  },
  {
    title: 'Orders',
    value: 300000,
    icon: <CircleStackIcon className='h-7 w-7 text-yellow-500' />
  },
  {
    title: 'Customers',
    value: 250,
    icon: <UsersIcon className='h-7 w-7 text-lime-500' />
  },
]

export const customerData = [
  {
    name: 'R. K. Sharma',
    state: 'Maharashtra',
    totalOrders: 50,
    totalSales: 700000
  },
  {
    name: 'Anil Kumar',
    state: 'Maharashtra',
    totalOrders: 35,
    totalSales: 600000
  },
  {
    name: 'Piyush Jain',
    state: 'Madhya Pradesh',
    totalOrders: 25,
    totalSales: 500000
  }
]

export const ordersData = [
  {
    item: 'Gents ring',
    quantity: 4,
    price: 50000,
    status: 'In Progress',
    customer: 'Piyush Jain'
  },
  {
    item: 'Ladies ring',
    quantity: 2,
    price: 30000,
    status: 'Completed',
    customer: 'R. K. Sharma'
  },
  {
    item: 'Gold chain',
    quantity: 1,
    price: 100000,
    status: 'Active',
    customer: 'Tushar Jain'
  }
]