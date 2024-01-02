'use client'

// named imports
import { useRouter } from 'next/navigation'
import { formatDate, handleCurrencyFormat } from '@/lib/utils'

interface Props {
  customerDetails: CustomerDetails | undefined
}

export default function CustomerOrderHistory({ customerDetails }: Props) {
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
        {customerDetails && customerDetails?.orders?.length > 0 ? customerDetails?.orders?.map((order: Order) => (
          <tr
            onClick={() => router.push(`/orders/${order.ID}`)}
            key={order.ID}
            className='border-b hover:cursor-pointer border-gray-200 hover:bg-slate-100/50'
          >
            <td className='flex flex-col py-2 text-sm text-center'>
              <span className='font-semibold'>{`${order?.ID.slice(0, 4)}...${order?.ID.slice(-4)}`}</span>
              <span className='text-xs'>{formatDate(order?.CreatedAt)}</span>
            </td>
            <td className='py-3 text-sm text-center'>{handleCurrencyFormat(order.OrderValue)}</td>
            <td className='py-3 text-sm text-center'>{order.OrderWeight}&nbsp;gm</td>
            <td className='py-3 text-sm text-center'>
              <span
                className={`badge ${order.Status === 'In Progress' ? 'bg-yellow-100 text-yellow-700' : order.Status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}
              >
                {order.Status}
              </span>
            </td>
          </tr>
        )) : (
          <tr className=''>
            <td className='text-center px-2 py-4 text-slate-600 text-sm border-b border-slate-300' colSpan={4}>No orders found</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}
