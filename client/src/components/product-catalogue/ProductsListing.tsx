'use client'

// named imports
import React, { useEffect } from 'react'
import { useInfiniteQuery } from 'react-query'
import { useInView } from 'react-intersection-observer'
// default imports
import Image from 'next/image'
import axios from 'axios'
import LoadingSpinner from '../globals/LoadingSpinner'

export default function ProductsListing() {
  const { ref, inView } = useInView({ threshold: 0 })

  // fetch products on page load as per the cursor
  const {
    isLoading, isError, data: products, error,
    isFetchingNextPage, fetchNextPage, hasNextPage
  } = useInfiniteQuery('products', async ({ pageParam = '' }) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    const response = await axios.get(`http://localhost:8000/products?cursor=${pageParam}`)
    return response.data
  }, { getNextPageParam: (lastPage) => lastPage.nextId ?? false })

  // fetch products on scroll as per the cursor
  useEffect(() => {
    if (inView && hasNextPage) fetchNextPage()
  }, [inView])

  if (isLoading) return <LoadingSpinner />
  if (isError) return <div>Error!</div>

  return (
    <div>
      <div className='columns-3'>
        {products && products.pages.map((page) => (
          <React.Fragment key={page.nextId ?? 'lastPage'}>
            {page.products.map((product: Product) => (
              <div className='mb-6 relative hover:opacity-80 shadow-sm' key={product.id}>
                <div className='relative group max-h-full max-w-auto'>
                  <Image
                    width={350}
                    height={400}
                    className='object-contain bg-slate-300'
                    src={product.image}
                    alt={product.category}
                  />
                </div>
                <div className='group group-hover:visible absolute z-50 bottom-0 p-3'>
                  <div className='flex space-x-2'>
                    <p className='font-bold text-sm text-slate-800'>{product.category}-</p>
                    <p className='font-semibold text-sm text-slate-800'>{`P0${product.id}`}</p>
                  </div>
                  <p className='text-xs text-slate-600'>{product.weight}gm</p>
                </div>
              </div>
            ))}

            {/* intersection observer */}
            <span ref={ref} style={
              { visibility: 'hidden' }
            }>intersection observer</span>
          </React.Fragment>
        ))}
      </div>

      {/* loading spinner at bottom */}
      {isFetchingNextPage && (
        <LoadingSpinner />
      )}
    </div>
  )
}
