// named imports
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { getCustomerById } from '@/actions/customers'

// default imports
import CustomerOrderHistory from '@/components/customers/CustomerOrderHistory'

export default async function CustomerDetails({ params }: { params: { customerId: string } }) {
  const customerDetails: CustomerDetails | undefined = await getCustomerById(params.customerId)

  return (
    <div className='page text-slate-600'>

      {/* Header */}
      <h2 className='heading flex items-center'>
        <span>Customer Details</span>
        <ChevronRightIcon className='h-8 w-8' />
        <span className='font-semibold text-sm'> #{params.customerId}</span>
      </h2>

      {/* main section */}
      <div className='section my-5'>
        <div className='flex space-x-5'>
          {/* order history table */}
          <div className='p-4 border border-gray-300 rounded-md w-3/5'>
            <div className='pb-5'>
              <h3 className='text-lg font-bold pb-1'>Order History</h3>
              <div className='h-[511px] overflow-auto py-1'>
                <CustomerOrderHistory customerDetails={customerDetails} />
              </div>
            </div>
          </div>

          {/* customer? details */}
          <div className='p-4 w-3/5 border border-gray-300 rounded-md bg-slate-100/50'>
            <div>
              <div className='mb-2'>
                <h3 className='text-lg font-bold'>Personal Details</h3>
                <div className='grid grid-cols-2 gap-y-4 py-3'>
                  <p className='text-sm text-slate-600'><span className='font-bold'>Name</span>: {`${customerDetails?.customer?.FirstName} ${customerDetails?.customer?.LastName}`}</p>
                  <p className='text-sm text-slate-600'><span className='font-bold'>Email</span>: {customerDetails?.customer?.Email}</p>
                  <p className='text-sm text-slate-600'><span className='font-bold'>Phone No.</span>: {customerDetails?.customer?.Phone}</p>
                  <p className='text-sm text-slate-600'><span className='font-bold'>City</span>: {customerDetails?.customer?.City}</p>
                  <p className='text-sm text-slate-600'><span className='font-bold'>State</span>: {customerDetails?.customer?.State}</p>
                  <p className='text-sm text-slate-600'><span className='font-bold'>Postal Code</span>: {customerDetails?.customer?.PostalCode}</p>
                  <p className='text-sm text-slate-600'><span className='font-bold'>Address</span>: {customerDetails?.customer?.Address}</p>
                </div>
              </div>

              <hr className='pb-5 mx-5 text-gray-200' />

              <div className='mb-2'>
                <h3 className='text-lg font-bold'>Company Details</h3>
                <div className='grid grid-cols-2 gap-x-2 gap-y-4 py-3'>
                  <p className='text-sm text-slate-600'><span className='font-bold'>Name</span>: {customerDetails?.customer?.CompanyName}</p>
                  <p className='text-sm text-slate-600'><span className='font-bold'>Email</span>: {customerDetails?.customer?.CompanyEmail}</p>
                  <p className='text-sm text-slate-600'><span className='font-bold'>Contact No.</span>: {customerDetails?.customer?.CompanyPhone}</p>
                  <p className='text-sm text-slate-600'><span className='font-bold'>Remark</span>: {customerDetails?.customer?.Remark}</p>
                  <p className='text-sm text-slate-600'><span className='font-bold'>Address</span>: {customerDetails?.customer?.CompanyAddress}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
