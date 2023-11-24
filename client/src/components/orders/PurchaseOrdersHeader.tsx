// default imports
import Link from 'next/link'

export default function PurchaseOrdersHeader() {
  return (
    <div className='flex justify-between'>
      <h2 className='heading'>Purchase Orders</h2>
      <div className='flex space-x-5'>
        <Link
          className='bg-slate-900 p-3 rounded-md text-white text-sm'
          href={'/orders/create'}
        >
          Add new Order
        </Link>
      </div>
    </div>
  )
}
