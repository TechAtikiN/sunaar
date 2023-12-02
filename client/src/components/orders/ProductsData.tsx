'use client'
// named imports
import { useRouter } from 'next/navigation'
import { productListing } from '@/constants/data'
import { handleCurrencyFormat } from '@/lib/utils'

export default function ProductsData() {
  const router = useRouter()

  return (
    <table className='w-full'>
      <thead className='border-b py-2 border-gray-300'>
        <tr className='bg-slate-300/50'>
          <th className='py-3 font-semibold text-sm '>Sr. No</th>
          <th className='py-3 font-semibold text-sm'>Name</th>
          <th className='py-3 font-semibold text-sm'>Weight</th>
          <th className='py-3 font-semibold text-sm '>Rate</th>
          <th className='py-3 font-semibold text-sm '>Quantity</th>
        </tr>
      </thead>
      <tbody className='border-b border-gray-200'>
        {productListing.map((product, index) => (
          <tr
            onClick={() => router.push(`/orders/${product.id}`)}
            key={product.id}
            className='border-b hover:cursor-pointer border-gray-200 hover:bg-slate-100/50'
          >
            <td className='py-3 text-sm text-center'>{index + 1}</td>
            <td className='flex flex-col py-2 text-sm text-center'>
              <span className='font-semibold'>{product.name}</span>
              <span className='text-xs'>{product.id}</span>
            </td>
            <td className='py-3 text-sm text-center'>{product.weight}gm</td>
            <td className='py-3 text-sm text-center'>{handleCurrencyFormat(product.rate)}</td>
            <td className='py-3 text-sm text-center'>{product.quantity}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
