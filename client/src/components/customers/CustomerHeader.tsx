// default imports
import Link from 'next/link'

function CustomerHeader() {
  return (
    <div className='flex justify-between items-center'>
      <h2 className='heading'>Customers</h2>
      <div className='flex space-x-5'>
        <Link
          className='bg-slate-900 p-3 rounded-md text-white text-sm'
          href={'/customers/create'}
        >
          Add new Customer
        </Link>
      </div>
    </div>
  )
}

export default CustomerHeader

