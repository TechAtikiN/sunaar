'use client'

// named imports
import { formatId } from '@/lib/utils'
import { useToast } from '../ui/use-toast'

// default imports
import Image from 'next/image'

interface Props {
  product: Product
}

export default function ProductItem({ product }: Props) {
  const { toast } = useToast()

  const handleClick = () => {
    navigator.clipboard.writeText(product?.ID || '')
    toast({
      title: `Copied ID ${formatId(product?.ID)}`,
      description: 'Copied Product ID to clipboard ',
      duration: 3000,
    })
  }

  return (
    <div
      onClick={handleClick}
      className='relative overflow-hidden group hover:opacity-80 shadow-sm'
      key={product.ID}
    >
      <div className='relative'>
        <Image
          width={350}
          height={400}
          className='object-cover'
          src={product.Image}
          alt={product.Name}
        />
        <div className='absolute inset-0 bg-gray-200 bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity'>
          {/* Semi-transparent overlay */}
        </div>
      </div>
      <div className='absolute inset-0 flex flex-col justify-end items-start m-3 text-slate-800 hover:cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity'>
        <p className='font-bold'>{product.Name}</p>
        <p className='font-bold text-xs'>{product.Category}</p>
        <div className='flex justify-between items-center w-full'>
          <p className='font-semibold text-xs'>{formatId(product.ID)}</p>
          <p className='text-xs'><strong>{product.Weight}</strong>gm</p>
        </div>
      </div>
    </div>
  )
}
