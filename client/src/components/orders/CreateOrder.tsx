// named imports
import { Button } from '../ui/button'
import { useToast } from '../ui/use-toast'

// default imports
import CustomerDetailsForm from './CustomerDetailsForm'
import ProductDetailsForm from './ProductDetailsForm'


export default async function CreateOrder() {

  async function handleSubmit(formData: FormData) {
    "use server"
    try {
      console.log(formData)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form action={handleSubmit} className=''>
      <div className='flex space-x-3'>
        {/* order details */}
        <CustomerDetailsForm />

        {/* products details */}
        <ProductDetailsForm />
      </div>

      <div className='flex justify-end'>
        <Button type='submit' className='mr-5'>Create Order</Button>
      </div>
    </form>
  )
}
