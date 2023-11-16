// named imports
import { getRates } from '../../../../actions/getRates'
import {
  CircleStackIcon,
  CubeIcon, Square2StackIcon,
  TableCellsIcon,
  UsersIcon
} from '@heroicons/react/20/solid'
import { CurrencyRupeeIcon } from '@heroicons/react/24/outline'

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

export async function HomePage() {
  // const commodities = await getRates()

  return (
    <div className='page grid grid-cols-6 gap-x-5'>

      {/* KPI listing */}
      <div className='section sm:col-span-4 col-span-6'>
        <h2 className='font-semibold text-gray-700'>Overview</h2>

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
        <h2 className='font-semibold text-gray-700'>Commodity Rates</h2>

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
    </div>
  )
}

export default HomePage
