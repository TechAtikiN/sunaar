// named imports
import { Suspense } from 'react'
import { getAllOrders } from '@/actions/orders'
import { formatQueryParam } from '@/lib/utils'

// default imports
import LoadingSpinner from '@/components/globals/LoadingSpinner'
import OrdersTable from '@/components/orders/OrdersTable'
import PurchaseOrdersHeader from '@/components/orders/PurchaseOrdersHeader'
import TableFilters from '@/components/globals/TableFilters'

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

  const orderResponse: OrderResponse = await getAllOrders(query, currentPage, limit)

  return (
    <div className='page h-screen'>
      <PurchaseOrdersHeader />

      <div className='section my-5'>
        {/* Filters */}
        <TableFilters currentPage={currentPage} hasMore={orderResponse?.hasMore || false} searchPlaceholder='Filter using Company Name' />

        {/* Table section */}
        <Suspense key={query + currentPage} fallback={<LoadingSpinner />}>
          <OrdersTable orders={orderResponse?.orders} />
        </Suspense>

      </div>
    </div>
  )
}

