// named imports
import { formatQueryParam } from '@/lib/utils'

// default imports
import PurchaseOrdersHeader from '@/components/orders/PurchaseOrdersHeader'
import OrdersSection from '@/components/orders/OrdersSection'

export default async function PurchaseOrders({
  searchParams,
}: {
  searchParams?: {
    query?: string
    page?: string
    limit?: string
  }
}) {
  let query = searchParams?.query || ''
  query = formatQueryParam(query)
  const currentPage = Number(searchParams?.page) || 1
  const limit = Number(searchParams?.limit) || 7

  return (
    <div className='page h-screen'>
      <PurchaseOrdersHeader />

      <OrdersSection query={query} currentPage={currentPage} limit={limit} />
    </div>
  )
}

