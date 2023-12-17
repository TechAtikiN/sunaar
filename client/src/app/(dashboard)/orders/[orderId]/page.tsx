// named imports
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { DownloadIcon } from 'lucide-react'
import { orderDescription } from '@/constants/data'

// default imports
import ProductsData from '@/components/orders/ProductsData'
import UpdateOrderStatus from '@/components/orders/UpdateOrderStatus'

export default function OrderDetails({ params }: { params: { orderId: string } }) {
  return (
    <div className='page text-slate-600'>

      {/* Header */}
      <h2 className='heading flex items-center'>
        <span>Order Details</span>
        <ChevronRightIcon className='h-8 w-8' />
        <span className='font-normal'> #{params.orderId}</span>
      </h2>

      {/* main section */}
      <div className='section my-5'>

        {/* Order Status */}
        <div className='flex justify-between items-center'>
          <div className='flex flex-col' space-y-1>
            <p className=' font-semibold text-slate-800'>Date: Mon, July 22, 2023</p>
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
            <UpdateOrderStatus />
          </div>
        </div>

        {/* Order Details */}
        <div className='py-2'>
          <div className='grid grid-cols-2 gap-x-6 border border-slate-200 p-4 rounded-md my-2'>
            <div className='border-r border-slate-200'>
              <h3 className='text-lg font-bold my-2'>Overview</h3>
              <div className='grid grid-cols-2 gap-y-4'>
                <p className='text-sm text-slate-600'><span className='font-bold'>Company Name</span>: {orderDescription.companyName}</p>
                <p className='text-sm text-slate-600'><span className='font-bold'>Contact</span>: {orderDescription.contact}</p>
                <p className='text-sm text-slate-600'><span className='font-bold'>Order Weight.</span>: {orderDescription.orderWeight}</p>
                <p className='text-sm text-slate-600'><span className='font-bold'>Order Value</span>: {orderDescription.orderValue}</p>
                <p className='text-sm text-slate-600'><span className='font-bold'>Order Status</span>: {orderDescription.status}</p>
              </div>
            </div>

            <div className='ml-14'>
              <h3 className='text-lg font-bold my-2'>Customer Details</h3>
              <div className='grid grid-cols-2 gap-y-4'>
                <p className='text-sm text-slate-600'><span className='font-bold'>Name</span>: {orderDescription.customerDetails.name}</p>
                <p className='text-sm text-slate-600'><span className='font-bold'>Customer ID</span>: {orderDescription.customerDetails.id}</p>
                <p className='text-sm text-slate-600'><span className='font-bold'>Email</span>: {orderDescription.customerDetails.email}</p>
                <p className='text-sm text-slate-600'><span className='font-bold'>Contact No.</span>: {orderDescription.customerDetails.phone}</p>
              </div>
            </div>
          </div>

          {/* product details  */}
          <div className='py-3'>
            <h3 className='text-lg font-bold my-2'>Products Detail</h3>
            <div className='h-[311px] overflow-auto py-1'>
              <ProductsData />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
