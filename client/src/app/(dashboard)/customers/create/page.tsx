// named imports
import { authenticate } from '@/actions/auth'
import { redirect } from 'next/navigation'

// default imports
import CreateCustomerForm from '@/components/customers/CreateCustomerForm'

export default async function AddCustomerPage() {
  const status = await authenticate()
  if (status === 'fail') {
    redirect('/login')
  }

  return (
    <div className='page'>
      <div>
        <h2 className='heading'>Add New Customer</h2>

        {/* Add customer form */}
        <div className='section my-5'>
          <CreateCustomerForm />
        </div>
      </div>
    </div>
  )
}
