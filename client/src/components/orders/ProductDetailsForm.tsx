'use client'

// named imports
import { useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'
import { getProductById } from '@/actions/products'
import { useProductCartStore } from '@/store/useProductCartStore'
import { formatId, handleCurrencyFormat } from '@/lib/utils'
import { useToast } from '../ui/use-toast'
import { Button } from '../ui/button'
import { PlusCircle } from 'lucide-react'
import { ExclamationCircleIcon, XMarkIcon } from '@heroicons/react/20/solid'

export default function ProductDetailsForm() {
  const { toast } = useToast()

  // states for the product details
  const [productId, setProductId] = useState<string>('')
  const [productDetails, setProductDetails] = useState<Product>()
  const [productQuantity, setProductQuantity] = useState<number>(1)
  const [products, addProduct, removeProduct] = useProductCartStore((state) => [
    state.products,
    state.addProduct,
    state.removeProduct
  ])

  // fetching the product details based on the product id
  const handleProductFetchDetails = useDebouncedCallback(async (id: string) => {
    setProductId(id)
    try {
      const product = await getProductById(id)
      setProductDetails(product)
    } catch (error) {
      toast({
        title: "An error occurred!",
        description: "Unable to fetch the product details!",
        duration: 3000,
      })
    }
  }, 300)

  // adding the product to the cart
  const handleAddProduct = () => {
    const cartProduct = {
      product: productDetails,
      quantity: productQuantity
    }
    if (cartProduct) {
      // check if the product is already added to the cart
      const productIndex = products.findIndex((product) => product?.product?.ID === cartProduct?.product?.ID)
      if (productIndex !== -1) {
        toast({
          title: "Product already added!",
          description: "The product is already added to the cart!",
          duration: 3000,
        })
      } else {
        // add the product to the cart
        addProduct(cartProduct as CartProduct)
        // setProductId('')
        // setProductQuantity(1)
      }
    } else {
      toast({
        title: "An error occurred!",
        description: "Unable to add the product to the cart!",
        duration: 3000,
      })
    }
  }

  // calculating the order value
  const orderValue = products
    .reduce(
      (acc, product) => acc + (6000 * +product?.product?.Weight * product?.quantity), 0)

  const formattedOrderValue = handleCurrencyFormat(orderValue)

  return (
    <div className='p-3 border-l border-gray-200 w-1/2'>
      <h2 className='font-bold text-slate-700'>Products Details</h2>

      <div className='px-3'>

        {/* debouncing and throttling */}
        <div className='flex space-x-4 my-2'>
          <input
            required
            value={productId}
            onChange={(e) => { handleProductFetchDetails(e.target.value) }}
            type='text'
            className='dashboard-form-input w-full text-sm p-2'
            placeholder='Enter Product ID'
          />
          <input
            type='text'
            value={productQuantity}
            onChange={(e) => setProductQuantity(+e.target.value)}
            className='dashboard-form-input w-full text-sm p-2'
            placeholder='Enter Quantity'
          />
          <Button
            type='button'
            onClick={handleAddProduct}
            variant={'outline'}
            className='text-sm'
          >
            <PlusCircle className='h-5 w-5 text-slate-800' />
          </Button>
        </div>

        <div className='p-2 border border-gray-200 rounded-md my-3 h-[360px] overflow-auto'>
          {products?.length === 0 && (
            <div className='flex flex-col items-center justify-center h-full'>
              <div className='flex items-center space-x-1'>
                <ExclamationCircleIcon className='h-6 w-6 text-amber-400' />
                <p className='text-sm text-slate-400'>No Products Added</p>
              </div>
            </div>
          )}

          <div className='grid grid-cols-2 gap-5 p-2'>
            {products?.length > 0 && products?.map((product) => (
              <div
                key={product?.product?.ID}
                className='p-2 bg-blue-900/5 hover:bg-blue-900/20 rounded-lg text-sm border border-slate-300'
              >
                <div className='flex justify-between'>
                  <div className='my-1 text-sm font-semibold'>
                    <p className='text-slate-900'>Name:&nbsp;{product?.product?.Name}</p>
                    <p className='text-slate-900'>ID:&nbsp;{formatId(product?.product?.ID)}</p>
                  </div>
                  <XMarkIcon
                    onClick={() => removeProduct(product)}
                    className='hover:cursor-pointer h-5 w-5 text-slate-800'
                  />

                </div>
                <div className='flex space-x-10'>
                  <div className='flex'>
                    <p className='text-xs text-slate-500'>Weight:</p>
                    <p className='text-xs text-slate-500'>{product?.product?.Weight}</p>
                  </div>
                  <div className='flex'>
                    <p className='text-xs text-slate-500'>Quantity:</p>
                    <p className='text-xs text-slate-500'>{product?.quantity}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <hr className='border border-slate-300' />

        <div className='my-3'>
          <div className='flex justify-between items-center'>
            <p className='text-amber-600'>Order Weight:</p>
            <p className='text-sm font-semibold text-slate-700'>
              {products.reduce((acc, product) => acc + +product?.product?.Weight * product.quantity, 0).toFixed(3)}
              &nbsp;gm
            </p>
          </div>
          <div className='flex justify-between items-center'>
            <p className='text-amber-600'>Order Value:</p>
            <p className='text-sm font-semibold text-slate-700'>{formattedOrderValue}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
