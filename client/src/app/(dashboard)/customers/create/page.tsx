// default imports
import CreateCustomerForm from '@/components/customers/CreateCustomerForm'

export default async function AddCustomerPage() {
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
