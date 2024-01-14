'use client'

// named imports
import { useState } from 'react'
import { getCustomerById } from '@/actions/customers'
import { useDebouncedCallback } from 'use-debounce'

export default function CustomerDetailsForm() {
  const [customer, setCustomer] = useState<Customer | undefined>()

  const handleCustomerFetchDetails = useDebouncedCallback(async (id: string) => {
    const result = await getCustomerById(id)
    const customer = result?.customer
    setCustomer(customer)
  }, 600)

  return (
    <div className='p-1 w-1/2'>
      <h2 className='font-bold text-slate-700'>Order Details</h2>
      <div className='w-full grid grid-cols-6 gap-x-4 gap-y-5 p-2'>
        <div className='col-span-3 flex flex-col space-y-2'>
          <label className='dashboard-form-label' htmlFor='customer_id'>Customer ID</label>
          <input
            required
            name='customer_id'
            onChange={(e) => { handleCustomerFetchDetails(e.target.value) }}
            type='text'
            className='dashboard-form-input text-sm p-2'
          />
        </div>

        <div className='col-span-3 flex flex-col space-y-2'>
          <label className='dashboard-form-label' htmlFor='name'>Customer Name</label>
          <input
            value={`${customer?.FirstName || ''} ${customer?.LastName || ''}`}
            disabled
            type='text'
            className='dashboard-form-input text-sm p-2'
          />
        </div>


        <div className='col-span-3 flex flex-col space-y-2'>
          <label className='dashboard-form-label' htmlFor='company_name'>Company Name</label>
          <input
            name='company_name'
            type='text'
            className='dashboard-form-input text-sm p-2'
          />
        </div>

        <div className='col-span-3 flex flex-col space-y-2'>
          <label className='dashboard-form-label' htmlFor='email'>Customer Email</label>
          <input
            value={customer?.Email || ''}
            disabled
            type='text'
            className='dashboard-form-input text-sm p-2'
          />
        </div>

        <div className='col-span-3 flex flex-col space-y-2'>
          <label className='dashboard-form-label' htmlFor='phone'>Customer Contact No.</label>
          <input
            value={customer?.Phone || ''}
            disabled
            type='text'
            className='dashboard-form-input text-sm p-2'
          />
        </div>

        <div className='col-span-3 flex flex-col space-y-2'>
          <label className='dashboard-form-label' htmlFor='status'>Status</label>
          <input
            disabled
            type='text'
            defaultValue={'Active'}
            className='dashboard-form-input text-sm p-2'
          />
        </div>

        <div className='col-span-6 flex flex-col space-y-2'>
          <label className='dashboard-form-label' htmlFor='order_remark'>Order Remark</label>
          <textarea
            name='order_remark'
            rows={2} className='dashboard-form-input'
          ></textarea>
        </div>
      </div>
    </div>
  )
}
