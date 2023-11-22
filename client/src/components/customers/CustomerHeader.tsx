// named imports
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'

function CustomerHeader() {
  return (
    <div className='flex justify-between'>
      <h2 className='heading'>Customers</h2>
      <div className='flex space-x-5'>
        <div className='flex items-center'>
          <input className='p-2 py-2 bg-gray-200 text-sm font-semibold text-gray-800 focus:outline-none focus:ring-1 ring-slate-400' placeholder='Search' type='text' />
          <MagnifyingGlassIcon className='-ml-7 w-5 h-5 text-gray-400' />
        </div>
        <button className='dashboard-btn'>Add Customer</button>
      </div>
    </div>
  )
}

export default CustomerHeader
