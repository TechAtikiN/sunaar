// named imports
import { getRates } from '../../../../actions/getRates'
import {
  CircleStackIcon,
  CubeIcon, Square2StackIcon,
  TableCellsIcon,
  UsersIcon
} from '@heroicons/react/20/solid'
import { CurrencyRupeeIcon } from '@heroicons/react/24/outline'
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'

// default imports
import IncomeExpenseChart from '@/components/home/IncomeExpenseChart'
import StatewiseDistribution from '@/components/home/StatewiseDistribution'
import Link from 'next/link'

const data = [
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

const customerData = [
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

const ordersData = [
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

export async function HomePage() {
  // const commodities = await getRates()

  return (
    <div className='page grid grid-cols-6 gap-5'>

      {/* KPI listing */}
      <div className='section sm:col-span-4 col-span-6'>
        <h2 className='section-heading'>Overview</h2>

        <div className='flex justify-center items-center'>
          {data.map((item, index) => (
            <div
              key={index}
              className='last:border-none border-r border-gray-400 mt-5 px-5 flex flex-col items-center space-y-3'
            >
              <div>
                {item.icon}
              </div>
              <div className='flex justify-between items-center w-full space-x-4'>
                <span className='font-semibold'>{item.title}</span>
                <span className='text-sm mt-1'>{item.value}</span>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Commodity rates */}
      <div className='section col-span-2'>
        <h2 className='section-heading'>Commodity Rates</h2>

        {/* <div className='flex justify-center items-center space-x-3 mt-2'>
          {commodities.map((item, index) => (
            <div
              key={item.name}
              className='flex flex-col last:border-none border-r border-gray-400 px-5'
            >
              <p className=''>{item.name}</p>
              <div className='flex flex-col justify-center items-center space-y-2'>
                <CubeIcon className={`h-6 w-6 ${item.name === 'Gold' ? 'text-yellow-500' : 'text-gray-400'
                  }`} />
                <div className='flex items-center text-gray-700 space-x-1'>
                  <CurrencyRupeeIcon className='h-6 w-6' />
                  <p className='text-sm'>{item.price}/<span className='text-xs'>10gm</span></p>
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </div>

      {/* Income v/s Expense chart  */}
      <div className='section col-span-4'>
        <div className='flex justify-between items-center'>
          <h2 className='section-heading'>Statistics</h2>
          <div className='flex justify-end items-center space-x-2 text-sm'>
            {/* <p className='flex'>
              <div className='p-1 block bg-[#29ADB2]/80 rounded-full' />
              <span>Income</span>
            </p>
            <p className='flex'>
              <div className='p-1 block bg-[#7071E8]/80 rounded-full' />
              <span>Expenses</span>
            </p> */}
            <p>Income v/s Expense</p>
            <select className='p-1 text-sm text-center hover:cursor-pointer hover:bg-gray-100 focus:outline-none border border-gray-300 rounded-full' name="period" id="period">
              <option className='' value="weekly">Daily</option>
              <option className='' value="monthly">Weekly</option>
              <option className='' value="yearly">Monthly</option>
            </select>
          </div>
        </div>
        <IncomeExpenseChart />

      </div>

      {/* Statewise Distrubution of Sales and Customers */}
      <div className='section col-span-2'>
        <StatewiseDistribution />
      </div>

      {/* Customer Analytics */}
      <div className='section col-span-3'>
        <div className='flex justify-between items-center mb-4'>
          <h2 className='section-heading'>Customer Analytics</h2>
          <Link href={'/customers'}
            className='text-amber-500 font-semibold text-sm hover:underline'>See All</Link>
        </div>

        <table className='w-full my-1 h-[80px]'>
          <thead className='my-5 pb-3 border-b border-amber-400'>
            <tr>
              <th className='table-header'>Customer</th>
              <th className='table-header'>State</th>
              <th className='table-header'>Total Orders</th>
              <th className='table-header'>Total Sales</th>
            </tr>
          </thead>

          <tbody className=''>
            {customerData.map((item, index) => (
              <tr key={item.name} className='hover:cursor-pointer hover:bg-amber-50'>
                <td className='table-data'>{item.name}</td>
                <td className='table-data'>{item.state}</td>
                <td className='table-data font-semibold'>{item.totalOrders}</td>
                <td className='table-data'>₹
                  {item.totalSales.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Forex news */}
      <div className='section col-span-3'>
        <div className='flex justify-between items-center mb-4'>
          <h2 className='section-heading'>Recent Orders</h2>
          <Link href={'/customers'}
            className='text-amber-500 font-semibold text-sm hover:underline'>See All</Link>
        </div>

        <table className='w-full my-1 h-[80px]'>
          <thead className='my-5 pb-3 border-b border-amber-400'>
            <tr>
              <th className='table-header'>Product Name</th>
              <th className='table-header'>Customer</th>
              <th className='table-header'>Quantity</th>
              <th className='table-header'>Amount</th>
              <th className='table-header'>Status</th>
            </tr>
          </thead>

          <tbody className=''>
            {ordersData.map((item, index) => (
              <tr key={item.item} className='hover:cursor-pointer hover:bg-amber-50'>
                <td className='table-data font-semibold'>{item.item}</td>
                <td className='table-data'>{item.customer}</td>
                <td className='table-data'>{item.quantity}</td>
                <td className='table-data'>{item.price}</td>
                <td>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${item.status === 'In Progress' ? 'bg-yellow-100 text-yellow-700' : item.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default HomePage
