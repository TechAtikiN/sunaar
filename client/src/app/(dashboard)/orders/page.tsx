// named imports
import { Suspense } from 'react'

// default imports
import CustomerFilters from '@/components/customers/CustomerFilters'
import LoadingSpinner from '@/components/globals/LoadingSpinner'
import OrdersTable from '@/components/orders/OrdersTable'
import PurchaseOrdersHeader from '@/components/orders/PurchaseOrdersHeader'
import OrdersFilters from '@/components/orders/OrdersFilters'

export default function PurchaseOrders({
  searchParams,
}: {
  searchParams?: {
    query?: string
    page?: string
    limit?: string
  }
}) {
  const query = searchParams?.query || ''
  const currentPage = Number(searchParams?.page) || 1
  const limit = Number(searchParams?.limit) || 8

  return (
    <div className='page h-screen'>
      <PurchaseOrdersHeader />

      <div className='section my-5'>
        {/* Filters */}
        <OrdersFilters searchPlaceholder='Filter using Customer Name or Email or Status' />

        {/* Table section */}
        <Suspense key={query + currentPage} fallback={<LoadingSpinner />}>
          <OrdersTable query={query} currentPage={currentPage} limit={limit} />
        </Suspense>

      </div>
    </div>
  )
}

