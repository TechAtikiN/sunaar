// named imports
import { ordersData } from '@/constants/data'

// default imports
import Link from 'next/link'

function RecentOrders() {
  return (
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
  )
}

export default RecentOrders
