// named imports
import { getOrderById } from '@/actions/orders'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { redirect } from 'next/navigation'
import { authenticate } from '@/actions/auth'

// default imports
import OrderDetailsSection from '@/components/orders/OrderDetailsSection'


export default async function OrderDetails({ params }: { params: { orderId: string } }) {
  const status = await authenticate()
  if (status === 'fail') {
    redirect('/login')
  }

  const orderDetails: OrderDetails | undefined = await getOrderById(params.orderId)

  return (
    <div className='page text-slate-600'>

      {/* Header */}
      <h2 className='heading flex items-center'>
        <span>Order Details</span>
        <ChevronRightIcon className='h-8 w-8' />
        <span className='font-semibold text-sm'> #{params.orderId}</span>
      </h2>

      {/* main section */}
      <div className='section my-5'>

        {/* Order Status */}
        <OrderDetailsSection orderDetails={orderDetails} />
      </div>
    </div>
  )
}
