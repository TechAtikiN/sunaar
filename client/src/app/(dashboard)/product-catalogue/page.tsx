// named imports
import ProductsListing from '@/components/product-catalogue/ProductsListing'
export default async function ProductCatalogue() {
  return (
    <div className='page'>
      <h2 className='heading'>Products Catalogue</h2>
      {/* <UploadProduct /> */}
      <div className='section p-5 my-4'>
        <ProductsListing />
      </div>
    </div>
  )
}
