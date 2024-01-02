// named imports
import { formatDate, formatId, handleCurrencyFormat } from '@/lib/utils'
import { getAllOrders } from '@/actions/orders'

// default imports
import ActionDetails from '../globals/ActionDetails'

export default async function OrdersTable({
  query,
  currentPage,
  limit = 10
}: {
  query: string,
  currentPage: number,
  limit?: number
}) {
  // Fetch customers 
  const { orders }: { orders: OrderDetails[] } = await getAllOrders(query, currentPage, limit)

  return (
    <table className='w-full border border-gray-200 my-4 p-4 rounded-lg'>
      <thead className=''>
        <tr className='border-b border-slate-200'>
          <th className='text-center py-4 rounded-l-xl text-slate-500 font-semibold text-base'>Order ID</th>
          <th className='table-header-data'>Customer Name</th>
          <th className='table-header-data'>Company</th>
          <th className='table-header-data'>Order Weight</th>
          <th className='table-header-data'>Order Value</th>
          <th className='table-header-data'>Status</th>
          <th className='table-header-data'>Actions</th>
        </tr>
      </thead>

      <tbody>
        {orders?.length > 0 ? orders?.map((order: OrderDetails) => (
          <tr key={order?.ID} className='hover:bg-slate-100'>
            <td className='px-2 py-3 table-data'>
              <p className='font-bold'>{formatId(order?.ID)}</p>
              <p className='text-xs'>{formatDate(order?.CreatedAt)}</p>
            </td>
            <td className='table-data'>{order?.CustomerName}</td>
            <td className='table-data'>{order?.CompanyName}</td>
            <td className='table-data'>{order?.OrderWeight}&nbsp;gm</td>
            <td className='table-data'>{handleCurrencyFormat(order?.OrderValue)}</td>
            <td
              className='text-center px-2 py-2 text-slate-600 text-sm border-b border-slate-300'
            >
              <span className={`badge ${order.Status === 'In Progress' ? 'bg-yellow-100 text-yellow-700' : order.Status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}
              >{order?.Status}
              </span>
            </td>
            <td className='text-center px-2 py-2 text-slate-600 text-sm border-b border-slate-300'>
              <ActionDetails orderID={order?.ID} />
            </td>
          </tr>
        )) : (
          <tr>
            <td className='text-center px-2 py-4 text-slate-600 text-sm border-b border-slate-300' colSpan={7}>No Orders found</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}
