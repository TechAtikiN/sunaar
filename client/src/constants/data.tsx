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

export const customerListing = [
  {
    id: 'C001',
    name: 'R. K. Sharma',
    email: 'rksharma@gmial.com',
    phone: '9876543210',
    location: 'Mumbai, Maharashtra',
    revenue: 700000,
    averageOrderValue: 500
  },
  {
    id: 'C002',
    name: 'Anil Kumar',
    email: 'anil@gmail.com',
    phone: '9876543210',
    location: 'Mumbai, Maharashtra',
    revenue: 600000,
    averageOrderValue: 500
  },
  {
    id: 'C003',
    name: 'Piyush Jain',
    email: 'pjain@gmail.com',
    phone: '9876543210',
    location: 'Indore, Madhya Pradesh',
    revenue: 500000,
    averageOrderValue: 500
  },
  {
    id: 'C004',
    name: 'R. K. Sharma',
    email: 'rksharma@gmial.com',
    phone: '9876543210',
    location: 'Mumbai, Maharashtra',
    revenue: 700000,
    averageOrderValue: 500
  },
  {
    id: 'C005',
    name: 'Anil Kumar',
    email: 'anil@gmail.com',
    phone: '9876543210',
    location: 'Mumbai, Maharashtra',
    revenue: 600000,
    averageOrderValue: 500
  },
  {
    id: 'C006',
    name: 'Piyush Jain',
    email: 'pjain@gmail.com',
    phone: '9876543210',
    location: 'Indore, Madhya Pradesh',
    revenue: 500000,
    averageOrderValue: 500
  },
  {
    id: 'C007',
    name: 'R. K. Sharma',
    email: 'rksharma@gmial.com',
    phone: '9876543210',
    location: 'Mumbai, Maharashtra',
    revenue: 700000,
    averageOrderValue: 500
  },
  {
    id: 'C008',
    name: 'Anil Kumar',
    email: 'anil@gmail.com',
    phone: '9876543210',
    location: 'Mumbai, Maharashtra',
    revenue: 600000,
    averageOrderValue: 500
  },
  {
    id: 'C009',
    name: 'Piyush Jain',
    email: 'pjain@gmail.com',
    phone: '9876543210',
    location: 'Indore, Madhya Pradesh',
    revenue: 500000,
    averageOrderValue: 500
  },
  {
    id: 'C010',
    name: 'R. K. Sharma',
    email: 'rksharma@gmial.com',
    phone: '9876543210',
    location: 'Mumbai, Maharashtra',
    revenue: 700000,
    averageOrderValue: 500
  },
  {
    id: 'C011',
    name: 'Anil Kumar',
    email: 'anil@gmail.com',
    phone: '9876543210',
    location: 'Mumbai, Maharashtra',
    revenue: 600000,
    averageOrderValue: 500
  },
  {
    id: 'C012',
    name: 'Piyush Jain',
    email: 'pjain@gmail.com',
    phone: '9876543210',
    location: 'Indore, Madhya Pradesh',
    revenue: 500000,
    averageOrderValue: 500
  }
]

export const orderDetails = [
  {
    id: 'OD001',
    date: '12/12/2020',
    orderValue: '₹ 1,00,000',
    orderWeight: '10 gm',
    orderStatus: 'In Progress'
  },
  {
    id: 'OD002',
    date: '21/12/2020',
    orderValue: '₹ 10,00,000',
    orderWeight: '70 gm',
    orderStatus: 'Active'
  },
  {
    id: 'OD003',
    date: '12/12/2020',
    orderValue: '₹ 1,00,000',
    orderWeight: '10 gm',
    orderStatus: 'Completed'
  },
  {
    id: 'OD004',
    date: '12/12/2020',
    orderValue: '₹ 1,00,000',
    orderWeight: '10 gm',
    orderStatus: 'Active'
  },
  {
    id: 'OD005',
    date: '12/12/2020',
    orderValue: '₹ 1,00,000',
    orderWeight: '10 gm',
    orderStatus: 'Completed'
  },
  {
    id: 'OD006',
    date: '12/12/2020',
    orderValue: '₹ 1,00,000',
    orderWeight: '10 gm',
    orderStatus: 'In Progress'
  },
  {
    id: 'OD007',
    date: '12/12/2020',
    orderValue: '₹ 1,00,000',
    orderWeight: '10 gm',
    orderStatus: 'Completed'
  },
  {
    id: 'OD006',
    date: '12/12/2020',
    orderValue: '₹ 1,00,000',
    orderWeight: '10 gm',
    orderStatus: 'In Progress'
  },
  {
    id: 'OD007',
    date: '12/12/2020',
    orderValue: '₹ 1,00,000',
    orderWeight: '10 gm',
    orderStatus: 'Completed'
  },
  {
    id: 'OD006',
    date: '12/12/2020',
    orderValue: '₹ 1,00,000',
    orderWeight: '10 gm',
    orderStatus: 'In Progress'
  },
  {
    id: 'OD007',
    date: '12/12/2020',
    orderValue: '₹ 1,00,000',
    orderWeight: '10 gm',
    orderStatus: 'Completed'
  },
]

