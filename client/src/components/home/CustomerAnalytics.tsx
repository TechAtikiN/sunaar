// named imports
import { customerData } from '@/constants'

// default imports
import Link from 'next/link'

function CustomerAnalytics() {
  return (
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
  )
}

export default CustomerAnalytics
