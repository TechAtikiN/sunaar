// named imports
import { Button } from '../ui/button'

function CustomerHeader() {
  return (
    <div className='flex justify-between'>
      <h2 className='heading'>Customers</h2>
      <div className='flex space-x-5'>
        <Button>Add new Customer</Button>
      </div>
    </div>
  )
}

export default CustomerHeader

