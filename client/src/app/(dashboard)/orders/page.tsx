// named imports
import { orderColumns } from '@/components/orders/OrdersColumnDef'

// default imports
import EntityTable from '@/components/globals/EntityTable'
import PurchaseOrdersHeader from '@/components/orders/PurchaseOrdersHeader'

const yesterday = new Date(new Date().setDate(new Date().getDate() - 1)).toLocaleDateString('en-IN')

const data: Order[] = [
  {
    id: 'OD001',
    date: new Date().toLocaleDateString('en-IN'),
    customerId: 'C001',
    customerName: 'R. k Sharma',
    orderValue: 100000,
    status: 'In Progress',
    orderWeight: 200,
  },
  {
    id: 'OD002',
    date: yesterday,
    customerId: 'C001',
    customerName: 'Piyush Sharma',
    orderValue: 490000,
    status: 'Active',
    orderWeight: 300,
  },
  {
    id: 'OD003',
    date: yesterday,
    customerId: 'C001',
    customerName: 'Jayant Agarwal',
    orderValue: 100000,
    status: 'Active',
    orderWeight: 100,
  },
  {
    id: 'OD004',
    date: yesterday,
    customerId: 'C001',
    customerName: 'R. k Sharma',
    orderValue: 300000,
    status: 'Completed',
    orderWeight: 50,
  },
  {
    id: 'OD005',
    date: yesterday,
    customerId: 'C001',
    customerName: 'Piyush Sharma',
    orderValue: 100000,
    status: 'Active',
    orderWeight: 100,
  },
  {
    id: 'OD006',
    date: yesterday,
    customerId: 'C001',
    customerName: 'Mohit Bansal',
    orderValue: 100000,
    status: 'Completed',
    orderWeight: 100,
  },
  {
    id: 'OD007',
    date: yesterday,
    customerId: 'C001',
    customerName: 'R. k Sharma',
    orderValue: 100000,
    status: 'In Progress',
    orderWeight: 100,
  },
  {
    id: 'OD008',
    date: yesterday,
    customerId: 'C001',
    customerName: 'R. k Sharma',
    orderValue: 100000,
    status: 'Active',
    orderWeight: 100,
  },
  {
    id: 'OD009',
    date: yesterday,
    customerId: 'C001',
    customerName: 'R. k Sharma',
    orderValue: 100000,
    status: 'Active',
    orderWeight: 100,
  },
]

export default function PurchaseOrders() {

  const columns = orderColumns

  return (
    <div className='page h-screen'>
      <PurchaseOrdersHeader />

      <div className='section my-5'>

        {/* Table section */}
        <EntityTable
          columns={columns}
          data={data}
        />
      </div>
    </div>
  )
}

