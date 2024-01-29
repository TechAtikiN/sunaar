// named imports
import { formatQueryParam } from '@/lib/utils'
import { redirect } from 'next/navigation'
import { authenticate } from '@/actions/auth'

// default imports
import ProductsListing from '@/components/product-catalogue/ProductsListing'
import SearchBar from '@/components/product-catalogue/SearchBar'

export default async function ProductCatalogue({
  searchParams
}: {
  searchParams?: {
    page?: string
    limit?: string
    category?: string
  }
}) {
  const page = Number(searchParams?.page) || 1
  const limit = Number(searchParams?.limit) || 8
  let category = searchParams?.category || ''
  category = formatQueryParam(category)

  const status = await authenticate()
  if (status === 'fail') {
    redirect('/login')
  }

  return (
    <div className='page'>
      <div className='flex justify-between'>
        <h2 className='heading'>Products Catalogue</h2>
        <SearchBar />
      </div>
      {/* <UploadProduct /> */}
      <div className='section p-5 my-4'>
        <ProductsListing category={category} page={page} limit={limit} />
      </div>
    </div>
  )
}
