// named imports
import { authenticate } from '@/actions/auth'
import { redirect } from 'next/navigation'

// default imports
import CreateOrder from '@/components/orders/CreateOrder'

export default async function CreateOrderPage() {
  const status = await authenticate()
  if (status === 'fail') {
    redirect('/login')
  }

  return (
    <div className='page'>
      <div>
        <h2 className='heading'>Create Order</h2>

        {/* Add customer form */}
        <div className='section my-5'>
          <CreateOrder />
        </div>
      </div>
    </div>
  )
}
