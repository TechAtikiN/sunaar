'use client'

// named imports
import { Button } from '@/components/ui/button'
import { handleCurrencyFormat } from '@/lib/utils'
import { ExclamationCircleIcon, XMarkIcon } from '@heroicons/react/20/solid'

const products = [
  {
    id: 'P001',
    category: 'Gold Ring',
    weight: 10,
    quantity: 10
  },
  {
    id: 'P002',
    category: 'Mangalsutra',
    weight: 8.54,
    quantity: 10
  },
  {
    id: 'P003',
    category: 'Rose Gold Ring',
    weight: 20,
    quantity: 10
  },
  {
    id: 'P004',
    category: 'Men\'s Bracelet',
    weight: 14.5,
    quantity: 10
  },
  {
    id: 'P005',
    category: 'Nose Pin',
    weight: 10.266,
    quantity: 10
  },
  {
    id: 'P006',
    category: 'Kada Bracelet',
    weight: 34.66,
    quantity: 10
  },
  {
    id: 'P007',
    category: 'Maang Tika',
    weight: 56.34,
    quantity: 10
  },
  {
    id: 'P008',
    category: 'Nose Pin',
    weight: 10.266,
    quantity: 10
  },
  {
    id: 'P009',
    category: 'Nose Pin',
    weight: 10.266,
    quantity: 10
  },
]

export default function CreateOrderPage() {
  const orderValue = products
    .reduce(
      (acc, product) => acc + (6000 * product.weight * product.quantity), 0)
  const formattedOrderValue = handleCurrencyFormat(orderValue)

  return (
    <div className='page'>
      <div>
        <h2 className='heading'>Create Order</h2>

        {/* Add customer form */}
        <div className='section my-5'>
          <form action='' className=''>
            <div className='flex space-x-3'>
              {/* order details */}
              <div className='p-1 w-1/2'>
                <h2 className='font-bold text-slate-700'>Order Details</h2>
                <div className='w-full grid grid-cols-6 gap-x-4 gap-y-5 p-2'>
                  <div className='col-span-3 flex flex-col space-y-2'>
                    <label className='dashboard-form-label' htmlFor='firstName'>Customer Name</label>
                    <input type='text' className='dashboard-form-input text-sm p-2' />
                  </div>

                  <div className='col-span-3 flex flex-col space-y-2'>
                    <label className='dashboard-form-label' htmlFor='lastName'>Customer Id</label>
                    <input disabled defaultValue={'C001'} type='text' className='dashboard-form-input text-sm p-2' />
                  </div>

                  <div className='col-span-3 flex flex-col space-y-2'>
                    <label className='dashboard-form-label' htmlFor='phone'>Customer Contact No.</label>
                    <input type='text' className='dashboard-form-input text-sm p-2' />
                  </div>

                  <div className='col-span-3 flex flex-col space-y-2'>
                    <label className='dashboard-form-label' htmlFor='email'>Date</label>
                    <input type='date' className='dashboard-form-input text-sm p-2' />
                  </div>


                  <div className='col-span-3 flex flex-col space-y-2'>
                    <label className='dashboard-form-label' htmlFor='city'>Status</label>
                    <input disabled type='text' defaultValue={'Active'} className='dashboard-form-input text-sm p-2' />
                  </div>

                  <div className='col-span-6 flex flex-col space-y-2'>
                    <label className='dashboard-form-label' htmlFor='address'>Remark</label>
                    <textarea
                      rows={2} className='dashboard-form-input'
                    ></textarea>
                  </div>

                </div>
              </div>

              <div className='p-3 border-l border-gray-200 w-1/2'>
                <h2 className='font-bold text-slate-700'>Products Details</h2>

                <div className='px-3'>

                  {/* debouncing and throttling */}
                  <div className='flex space-x-4 my-2'>
                    <input
                      type='text'
                      className='dashboard-form-input w-full text-sm p-2'
                      placeholder='Enter Product ID'
                    />
                    <input
                      type='text'
                      className='dashboard-form-input w-full text-sm p-2'
                      placeholder='Enter Quantity'
                    />
                    <Button variant={'outline'} className='text-sm'>Add Product</Button>
                  </div>

                  <div className='p-2 border border-gray-200 rounded-md my-3 h-[360px] overflow-auto'>
                    {products.length === 0 && (
                      <div className='flex flex-col items-center justify-center h-full'>
                        <div className='flex items-center space-x-1'>
                          <ExclamationCircleIcon className='h-6 w-6 text-amber-400' />
                          <p className='text-sm text-slate-400'>No Products Added</p>
                        </div>
                      </div>
                    )}

                    <div className='grid grid-cols-2 gap-5 p-2'>
                      {products?.map((product) => (
                        <div
                          key={product.id}
                          className='p-2 bg-blue-900/5 hover:bg-blue-900/20 rounded-lg text-sm border border-slate-300'
                        >
                          <div className='flex justify-between items-center my-1'>
                            <span className=''>
                              <span className='font-semibold'>{product.id}-&nbsp;</span>
                              {product.category}
                            </span>
                            <XMarkIcon className='hover:cursor-pointer h-5 w-5 text-slate-800' />
                          </div>
                          <div className='flex space-x-10'>
                            <div className='flex'>
                              <p className='text-xs text-slate-500'>Weight:</p>
                              <p className='text-xs text-slate-500'>{product.weight}</p>
                            </div>
                            <div className='flex'>
                              <p className='text-xs text-slate-500'>Quantity:</p>
                              <p className='text-xs text-slate-500'>{product.quantity}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className='flex justify-end mb-3'>
                    <Button variant={'outline'} className='text-sm'>Confirm</Button>
                  </div>

                  <hr className='border border-slate-300' />

                  <div className='my-3'>
                    <div className='flex justify-between items-center'>
                      <p className='text-amber-600'>Order Weight:</p>
                      <p className='text-sm font-semibold text-slate-700'>
                        {products.reduce((acc, product) => acc + product.weight * product.quantity, 0).toFixed(3)}
                        &nbsp;gms
                      </p>
                    </div>
                    <div className='flex justify-between items-center'>
                      <p className='text-amber-600'>Order Value:</p>
                      <p className='text-sm font-semibold text-slate-700'>{formattedOrderValue}</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <div className='flex justify-end'>
              <Button type='submit' className='mr-5'>Create Order</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
