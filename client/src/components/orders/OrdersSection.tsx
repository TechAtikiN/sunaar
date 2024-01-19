// named improts
import { Suspense } from 'react'
import { getAllOrders } from '@/actions/orders'

// default imports
import TableFilters from '../globals/TableFilters'
import OrdersTable from './OrdersTable'
import LoadingSpinner from '../globals/LoadingSpinner'

export default async function OrdersSection({ currentPage, query, limit }: { currentPage: number, query: string, limit: number }) {
  const orderResponse: OrderResponse = await getAllOrders(query, currentPage, limit)

  return (
    <div className='section my-5'>
      {/* Filters */}
      <TableFilters downloadAbleData={orderResponse?.orders} currentPage={currentPage} hasMore={orderResponse?.hasMore || false} searchPlaceholder='Filter using Company Name' />

      {/* Table section */}
      <Suspense key={query + currentPage} fallback={<LoadingSpinner />}>
        <OrdersTable orders={orderResponse?.orders} />
      </Suspense>
    </div>
  )
}
