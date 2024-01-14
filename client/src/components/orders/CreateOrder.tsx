'use client'

// named imports
import { useProductCartStore } from '@/store/useProductCartStore'
import { useRouter } from 'next/navigation'
import { useToast } from '../ui/use-toast'
import { createOrder } from '@/actions/orders'
import { Button } from '../ui/button'

// default imports
import CustomerDetailsForm from './CustomerDetailsForm'
import ProductDetailsForm from './ProductDetailsForm'

export default function CreateOrder() {
  const router = useRouter()
  const { toast } = useToast()
  const [products] = useProductCartStore((state) => [state.products])

  async function handleSubmit(formData: FormData) {
    // converting the products to order_products
    const order_products = products.map((product) => {
      return {
        "product_id": product.product.ID,
        "quantity": product.quantity,
      }
    })

    // converting the form data to order details
    let details = Object.fromEntries(formData.entries())
    details = {
      "customer_id": details.customer_id,
      "company_name": details.company_name,
      "order_remark": details.order_remark,
    }

    try {
      const response = await createOrder(details, order_products)
      if (response === 'success') {
        toast({
          title: "New order added!",
          description: "Order has been created successfully!",
          duration: 3000,
        })
        router.push('/orders')
      } else {
        toast({
          title: "An error occurred!",
          description: "Unable to create order!",
          duration: 3000,
        })
      }
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
