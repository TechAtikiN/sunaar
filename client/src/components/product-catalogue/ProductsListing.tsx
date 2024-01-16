// named imports
import { getAllProducts } from '@/actions/products'

// default imports
import ProductItem from './ProductItem';

export default async function ProductsListing({ category, page, limit }: { category: string, page: number, limit: number }) {
  const products = await getAllProducts(page, limit, category)

  return (
    <div>
      <div className='grid grid-cols-3 gap-4'>
        {products?.map((product: Product) => (
          <ProductItem key={product?.ID} product={product} />
        ))}
      </div>
    </div>
  )

}
