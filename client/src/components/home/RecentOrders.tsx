// named imports
import { handleCurrencyFormat } from '@/lib/utils'

// default imports
import Link from 'next/link'

function RecentOrders({ recentOrders }: { recentOrders: OrderDetails[] }) {
  return (
    <div className='section col-span-3'>
      <div className='flex justify-between items-center mb-4'>
        <h2 className='section-heading'>Recent Orders</h2>
        <Link href={'/orders'}
          className='text-amber-500 font-semibold text-sm hover:underline'>See All</Link>
      </div>

      <table className='w-full my-1 h-[80px]'>
        <thead className='my-5 pb-3 border-b border-amber-400'>
          <tr>
            <th className='table-header'>Company</th>
            <th className='table-header'>Order Weight</th>
            <th className='table-header'>Order Value</th>
            <th className='table-header'>Status</th>
          </tr>
        </thead>

        <tbody className=''>
          {recentOrders?.map((order, index) => (
            <tr key={order.ID} className='hover:cursor-pointer hover:bg-amber-50'>
              <td className='table-data'>{order.CompanyName}</td>
              <td className='table-data'>{order.OrderWeight}</td>
              <td className='table-data'>{handleCurrencyFormat(order.OrderValue)}</td>
              <td>
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${order.Status === 'In Progress' ? 'bg-yellow-100 text-yellow-700' : order.Status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {order.Status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default RecentOrders
