// named imports
import { handleCurrencyFormat } from '@/lib/utils'
import {
  BanknotesIcon,
  CircleStackIcon,
  ClipboardDocumentCheckIcon,
  Square2StackIcon,
  TableCellsIcon,
  UsersIcon
} from '@heroicons/react/20/solid'

interface Props {
  revenue: number
  orders: number
  customers: number
}

function KPIListing({
  revenue,
  orders,
  customers
}: Props) {

  const data = [
    {
      title: 'Sales Target',
      value: handleCurrencyFormat(100000000),
      icon: <Square2StackIcon className='h-8 w-8 text-pink-300' />
    },
    {
      title: 'Total Revenue',
      value: handleCurrencyFormat(revenue),
      icon: <BanknotesIcon className='h-8 w-8 text-sky-300' />
    },
    {
      title: 'Orders',
      value: orders,
      icon: <ClipboardDocumentCheckIcon className='h-8 w-8 text-lime-400' />
    },
    {
      title: 'Customers',
      value: customers,
      icon: <UsersIcon className='h-8 w-8 text-indigo-400' />
    },
  ]
  return (
    <div className='section sm:col-span-4 col-span-6 px-3'>
      <h2 className='section-heading'>Overview</h2>

      <div className='flex items-center -ml-2'>
        {data.map((item, index) => (
          <div
            key={index}
            className='last:border-none border-r border-gray-400 px-5 flex justify-center space-x-3 items-center space-y-3'
          >
            <div>
              {item.icon}
            </div>
            <div className='flex flex-col items-center w-full space-x-4'>
              <span className='font-semibold text-slate-800'>{item.value}</span>
              <span className='text-sm mt-1 text-slate-600 text-center'>{item.title}</span>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default KPIListing
