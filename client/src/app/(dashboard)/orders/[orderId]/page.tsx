// named imports
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { DownloadIcon } from 'lucide-react'
import { getOrderById } from '@/actions/orders'
import { formatDate, handleCurrencyFormat } from '@/lib/utils'

// default imports
import UpdateOrderStatus from '@/components/orders/UpdateOrderStatus'
import ProductsData from '@/components/orders/ProductsData'

export default async function OrderDetails({ params }: { params: { orderId: string } }) {
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
        <div className='flex justify-between items-center'>
          <div className='flex flex-col' space-y-1>
            <p className=' font-semibold text-slate-800'>Date: {formatDate(orderDetails?.CreatedAt || '')}</p>
          </div>
          <div className='flex items-center space-x-4'>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <DownloadIcon className='h-6 w-6' />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Download Invoice</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <UpdateOrderStatus orderId={orderDetails?.ID} />
          </div>
        </div>

        {/* Order Details */}
        <div className='py-2'>
          <div className='grid grid-cols-2 gap-x-6 border border-slate-200 p-4 rounded-md my-2'>
            <div className='border-r border-slate-200'>
              <h3 className='text-lg font-bold my-2'>Overview</h3>
              <div className='grid grid-cols-2 gap-y-4'>
                <p className='text-sm text-slate-600'><span className='font-bold'>Company Name</span>: {orderDetails?.CompanyName}</p>
                <p className='text-sm text-slate-600'><span className='font-bold'>Order Weight.</span>: {orderDetails?.OrderWeight}</p>
                <p className='text-sm text-slate-600'><span className='font-bold'>Order Value</span>: {handleCurrencyFormat(orderDetails?.OrderValue as number)}</p>
                <p className='text-sm text-slate-600'><span className='font-bold'>Order Status</span>:
                  <span className={`badge mx-2 ${orderDetails?.Status === 'In Progress' ? 'bg-yellow-100 text-yellow-700' : orderDetails?.Status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}
                  >
                    {orderDetails?.Status}
                  </span>
                </p>
              </div>
            </div>

            <div className='ml-14'>
              <h3 className='text-lg font-bold my-2'>Customer Details</h3>
              <div className='grid grid-cols-2 gap-y-4'>
                <p className='text-sm text-slate-600'><span className='font-bold'>Name</span>: {orderDetails?.CustomerName}</p>
                <p className='text-sm text-slate-600'><span className='font-bold'>Email</span>: {orderDetails?.CustomerEmail}</p>
                <p className='text-sm text-slate-600'><span className='font-bold'>Contact No.</span>: {orderDetails?.CustomerPhone}</p>
              </div>
            </div>
          </div>

          {/* product details  */}
          <div className='py-3'>
            <h3 className='text-lg font-bold my-2'>Products Detail</h3>
            <div className='h-[311px] overflow-auto py-1'>
              <ProductsData products={orderDetails?.Products} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
