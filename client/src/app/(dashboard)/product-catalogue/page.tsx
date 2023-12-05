// named imports
import ProductsListing from '@/components/product-catalogue/ProductsListing'
import SearchBar from '@/components/product-catalogue/SearchBar'
export default async function ProductCatalogue({
  searchParams
}: {
  searchParams: { category: string, cursor: string }
}) {
  let { category } = searchParams
  if (category) {
    category = category.charAt(0).toUpperCase() + category.slice(1)
  }

  return (
    <div className='page'>
      <div className='flex justify-between'>
        <h2 className='heading'>Products Catalogue</h2>
        <SearchBar />
      </div>
      {/* <UploadProduct /> */}
      <div className='section p-5 my-4'>
        <ProductsListing category={category} />
      </div>
    </div>
  )
}
