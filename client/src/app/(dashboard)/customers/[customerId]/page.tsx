// named imports
import { ChevronRightIcon } from '@heroicons/react/20/solid'

// default imports
import CustomerOrderHistory from '@/components/customers/CustomerOrderHistory'

const customerDetails = {
  name: 'Ram Kumar Sharma',
  companyName: 'R.K Jewellers',
  email: 'rksharma@gmail.com',
  phone: '9876543210',
  city: 'Mumbai',
  state: 'Maharashtra',
  postalCode: '400001',
  address: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptatum.',
  companyEmail: 'rkjewels@gmail.com',
  companyPhone: '9876543210',
  companyAddress: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptatum.',
  remark: 'Lorem, ipsum dolor sit amet consectetur'
}

export default function CustomerDetails({ params }: { params: { customerId: string } }) {
  return (
    <div className='page text-slate-600'>

      {/* Header */}
      <h2 className='heading flex items-center'>
        <span>Customer Details</span>
        <ChevronRightIcon className='h-8 w-8' />
        <span className='font-normal'> #{params.customerId}</span>
      </h2>

      {/* main section */}
      <div className='section my-3'>
        <div className='flex space-x-5'>
          {/* order history table */}
          <div className='p-4 border border-gray-300 rounded-md w-3/5'>
            <div className='pb-5'>
              <h3 className='text-lg font-bold pb-1'>Order History</h3>
              <div className='h-[511px] overflow-auto py-1'>
                <CustomerOrderHistory />
              </div>
            </div>
          </div>
          {/* customer details */}
          <div className='p-4 w-2/5 border border-gray-300 rounded-md bg-slate-100/50'>
            <div>
              <div className='mb-2'>
                <h3 className='text-lg font-bold'>Personal Details</h3>
                <div className='grid grid-cols-2 gap-x-2 gap-y-4 py-3'>
                  <p className='text-sm text-slate-600'><span className='font-bold'>Name</span>: {customerDetails.name}</p>
                  <p className='text-sm text-slate-600'><span className='font-bold'>Email</span>: {customerDetails.email}</p>
                  <p className='text-sm text-slate-600'><span className='font-bold'>Phone No.</span>: {customerDetails.phone}</p>
                  <p className='text-sm text-slate-600'><span className='font-bold'>City</span>: {customerDetails.city}</p>
                  <p className='text-sm text-slate-600'><span className='font-bold'>State</span>: {customerDetails.state}</p>
                  <p className='text-sm text-slate-600'><span className='font-bold'>Postal Code</span>: {customerDetails.postalCode}</p>
                  <p className='text-sm text-slate-600'><span className='font-bold'>Address</span>: {customerDetails.address}</p>
                </div>
              </div>

              <hr className='pb-5 mx-5 text-gray-200' />

              <div className='mb-2'>
                <h3 className='text-lg font-bold'>Company Details</h3>
                <div className='grid grid-cols-2 gap-x-2 gap-y-4 py-3'>
                  <p className='text-sm text-slate-600'><span className='font-bold'>Name</span>: {customerDetails.companyName}</p>
                  <p className='text-sm text-slate-600'><span className='font-bold'>Email</span>: {customerDetails.companyEmail}</p>
                  <p className='text-sm text-slate-600'><span className='font-bold'>Contact No.</span>: {customerDetails.companyPhone}</p>
                  <p className='text-sm text-slate-600'><span className='font-bold'>Remark</span>: {customerDetails.remark}</p>
                  <p className='text-sm text-slate-600'><span className='font-bold'>Address</span>: {customerDetails.companyAddress}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
