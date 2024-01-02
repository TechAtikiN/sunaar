'use client'

// named imports
import { useRouter } from 'next/navigation'
import { formatId } from '@/lib/utils'

// default imports
import Image from 'next/image'

interface Props {
  products: Product[] | undefined
}

export default function ProductsData({ products }: Props) {
  const router = useRouter()

  return (
    <table className='w-full'>
      <thead className='border-b py-2 border-gray-300'>
        <tr className='bg-slate-300/50'>
          <th className='py-3 font-semibold text-sm'>Product</th>
          <th className='py-3 font-semibold text-sm'>ID</th>
          <th className='py-3 font-semibold text-sm'>Name</th>
          <th className='py-3 font-semibold text-sm'>Category</th>
          <th className='py-3 font-semibold text-sm'>Weight</th>
          <th className='py-3 font-semibold text-sm '>Quantity</th>
        </tr>
      </thead>

      <tbody className='border-b border-gray-200'>
        {products?.map((product, index) => (
          <tr
            key={product?.ID}
            className='border-b hover:cursor-pointer border-gray-200 hover:bg-slate-100/50'
          >
            <td className='py-2 text-sm flex items-center justify-center'>
              <Image
                src={product?.Image}
                alt={product?.Name}
                width={120}
                height={120}
                // align center
                className='object-center'
              />
            </td>
            <td className='py-2 text-sm text-center'>{formatId(product?.ID)}</td>
            <td className='py-2 text-sm text-center'>{product?.Name}</td>
            <td className='py-3 text-sm text-center'>{product?.Category}</td>
            <td className='py-3 text-sm text-center'>{product?.Weight}gm</td>
            <td className='py-3 text-sm text-center'>6</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
