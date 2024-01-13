'use client'

// named imports
import { useProductCartStore } from '@/store/useProductCartStore'
import { Button } from '../ui/button'

// default imports
import CustomerDetailsForm from './CustomerDetailsForm'
import ProductDetailsForm from './ProductDetailsForm'

export default function CreateOrder() {
  const [products] = useProductCartStore((state) => [state.products])

  async function handleSubmit(formData: FormData) {
    // 'use server'
    try {
      // convert the form data to json
      const data = Object.fromEntries(formData.entries())

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
