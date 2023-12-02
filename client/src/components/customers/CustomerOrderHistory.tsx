'use client'

// named imports
import { useRouter } from 'next/navigation'
import { orderDetails } from '@/constants/data'

export default function CustomerOrderHistory() {
  const router = useRouter()

  return (
    <table className='w-full'>
      <thead className='border-b py-2 border-gray-300'>
        <tr className='bg-slate-300/50'>
          <th className='py-3 font-semibold text-sm '>Order Id</th>
          <th className='py-3 font-semibold text-sm'>Order Value</th>
          <th className='py-3 font-semibold text-sm'>Order Weight</th>
          <th className='py-3 font-semibold text-sm '>Status</th>
        </tr>
      </thead>
      <tbody className='border-b border-gray-200'>
        {orderDetails.map((order) => (
          <tr
            onClick={() => router.push(`/orders/${order.id}`)}
            key={order.id}
            className='border-b hover:cursor-pointer border-gray-200 hover:bg-slate-100/50'
          >
            <td className='flex flex-col py-2 text-sm text-center'>
              <span className='font-semibold'>{order.id}</span>
              <span className='text-xs'>{order.date}</span>
            </td>
            <td className='py-3 text-sm text-center'>{order.orderValue}</td>
            <td className='py-3 text-sm text-center'>{order.orderWeight}</td>
            <td className='py-3 text-sm text-center'>
              <span
                className={`px-2 py-1 rounded-full text-xs font-semibold ${order.orderStatus === 'In Progress' ? 'bg-yellow-100 text-yellow-700' : order.orderStatus === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}
              >
                {order.orderStatus}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
