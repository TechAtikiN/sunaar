'use client'

// named imports
import { DownloadIcon } from 'lucide-react'
import { usePDF } from 'react-to-pdf';
import { formatDate, handleCurrencyFormat } from '@/lib/utils'
import { Button } from '../ui/button'

// default imports
import UpdateOrderStatus from '@/components/orders/UpdateOrderStatus'
import ProductsData from '@/components/orders/ProductsData'
import Link from 'next/link'

export default function OrderDetailsSection({ orderDetails }: { orderDetails: OrderDetails | undefined }) {
  const { toPDF, targetRef } = usePDF({ filename: 'invoice.pdf' })

  return (
    <>
      <div className='flex justify-between items-center'>
        <div className='flex flex-col' space-y-1>
          <p className=' font-semibold text-slate-800'>Date: {formatDate(orderDetails?.CreatedAt || '')}</p>
        </div>
        <div className='flex items-center space-x-4'>
          <Link
            className='hover:bg-slate-100 font-semibold border border-slate-300 rounded-md px-4 py-2 text-sm hover:text-slate-800'
            href={`/customers/${orderDetails?.CustomerID}`}
          >
            View Customer
          </Link>
          <UpdateOrderStatus orderId={orderDetails?.ID} />
          <Button onClick={() => toPDF()} variant={'ghost'}>
            <DownloadIcon className='h-6 w-6' />
          </Button>
        </div>
      </div>

      <div ref={targetRef} className='p-2'>
        <div className='border border-slate-200 p-4 rounded-md my-2'>
          <h3 className='text-lg font-bold mb-2'>Overview</h3>

          <div className='grid grid-cols-3 gap-y-4'>
            <p className='text-sm text-slate-600'><span className='font-bold'>ID</span>: {orderDetails?.ID}</p>
            <p className='text-sm text-slate-600'><span className='font-bold'>Company Name</span>: {orderDetails?.CompanyName}</p>
            <p className='text-sm text-slate-600'><span className='font-bold'>Order Weight.</span>: {orderDetails?.OrderWeight}&nbsp;gm</p>
            <p className='text-sm text-slate-600'><span className='font-bold'>Order Value</span>: {handleCurrencyFormat(orderDetails?.OrderValue as number)}</p>
            <p className='text-sm text-slate-600'><span className='font-bold'>Order Remark</span>: {orderDetails?.OrderRemark}</p>
            <p className='text-sm text-slate-600'><span className='font-bold'>Order Status</span>:
              <span className={`badge mx-2 ${orderDetails?.Status === 'In Progress' ? 'bg-yellow-100 text-yellow-700' : orderDetails?.Status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}
              >
                {orderDetails?.Status}
              </span>
            </p>
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
    </>
  )
}
