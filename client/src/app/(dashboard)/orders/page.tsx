// named imports
import { Suspense } from 'react'
import { formatQueryParam } from '@/lib/utils'

// default imports
import LoadingSpinner from '@/components/globals/LoadingSpinner'
import OrdersTable from '@/components/orders/OrdersTable'
import PurchaseOrdersHeader from '@/components/orders/PurchaseOrdersHeader'
import TableFilters from '@/components/globals/TableFilters'

export default function PurchaseOrders({
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
  const limit = Number(searchParams?.limit) || 8

  return (
    <div className='page h-screen'>
      <PurchaseOrdersHeader />

      <div className='section my-5'>
        {/* Filters */}
        <TableFilters searchPlaceholder='Filter using Customer Name or Company' />

        {/* Table section */}
        <Suspense key={query + currentPage} fallback={<LoadingSpinner />}>
          <OrdersTable query={query} currentPage={currentPage} limit={limit} />
        </Suspense>

      </div>
    </div>
  )
}

