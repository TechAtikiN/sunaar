// named imports
import { formatId, handleCurrencyFormat } from '@/lib/utils'

// default imports
import Link from 'next/link'

function CustomerAnalytics({ topOrders }: { topOrders: OrderDetails[] }) {
  return (
    <div className='section col-span-3'>
      <div className='flex justify-between items-center mb-4'>
        <h2 className='section-heading'>Top Customers</h2>
        <Link href={'/customers'}
          className='text-amber-500 font-semibold text-sm hover:underline'>See All</Link>
      </div>

      <table className='w-full my-1 h-[80px]'>
        <thead className='my-5 pb-3 border-b border-amber-400'>
          <tr>
            <th className='table-header'>Customer ID</th>
            <th className='table-header'>Company</th>
            <th className='table-header'>Order Weight</th>
            <th className='table-header'>Order Value</th>
          </tr>
        </thead>

        <tbody className=''>
          {topOrders?.map((order, index) => (
            <tr
              key={order.ID}
              className='hover:cursor-pointer hover:bg-amber-50'
            >
              <td className='table-data'>{formatId(order.CustomerID)}</td>
              <td className='table-data'>{order.CompanyName}</td>
              <td className='table-data'>{order.OrderWeight}</td>
              <td className='table-data font-semibold'>{handleCurrencyFormat(order.OrderValue)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CustomerAnalytics
