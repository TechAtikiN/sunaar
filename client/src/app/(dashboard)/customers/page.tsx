// named imports
import { customerColumns } from '@/components/customers/CustomersColumnDef'

// default imports
import EntityTable from '@/components/globals/EntityTable'
import CustomerHeader from '@/components/customers/CustomerHeader'

const data: Customer[] = [
  {
    id: 'C001',
    name: 'R. K. Sharma',
    email: 'rksharma@gmial.com',
    phone: '9876543210',
    location: 'Mumbai, Maharashtra',
    revenue: 100000,
    averageOrderValue: 500
  },
  {
    id: 'C002',
    name: 'Anil Kumar',
    email: 'anil@gmail.com',
    phone: '9876543210',
    location: 'Mumbai, Maharashtra',
    revenue: 1600000,
    averageOrderValue: 500
  },
  {
    id: 'C003',
    name: 'Piyush Jain',
    email: 'pjain@gmail.com',
    phone: '9876543210',
    location: 'Indore, Madhya Pradesh',
    revenue: 50000,
    averageOrderValue: 500
  },
  {
    id: 'C004',
    name: 'R. K. Sharma',
    email: 'rksharma@gmial.com',
    phone: '9876543210',
    location: 'Mumbai, Maharashtra',
    revenue: 702000,
    averageOrderValue: 500
  },
  {
    id: 'C005',
    name: 'Anil Kumar',
    email: 'anil@gmail.com',
    phone: '9876543210',
    location: 'Mumbai, Maharashtra',
    revenue: 61000,
    averageOrderValue: 500
  },
  {
    id: 'C006',
    name: 'Piyush Jain',
    email: 'pjain@gmail.com',
    phone: '9876543210',
    location: 'Indore, Madhya Pradesh',
    revenue: 500020,
    averageOrderValue: 500
  },
  {
    id: 'C007',
    name: 'R. K. Sharma',
    email: 'rksharma@gmial.com',
    phone: '9876543210',
    location: 'Mumbai, Maharashtra',
    revenue: 720000,
    averageOrderValue: 500
  },
  {
    id: 'C008',
    name: 'Anil Kumar',
    email: 'anil@gmail.com',
    phone: '9876543210',
    location: 'Mumbai, Maharashtra',
    revenue: 3400000,
    averageOrderValue: 500
  },
  {
    id: 'C009',
    name: 'Piyush Jain',
    email: 'pjain@gmail.com',
    phone: '9876543210',
    location: 'Indore, Madhya Pradesh',
    revenue: 500000,
    averageOrderValue: 500
  },
  {
    id: 'C010',
    name: 'R. K. Sharma',
    email: 'rksharma@gmial.com',
    phone: '9876543210',
    location: 'Mumbai, Maharashtra',
    revenue: 700000,
    averageOrderValue: 500
  },
  {
    id: 'C011',
    name: 'Anil Kumar',
    email: 'anil@gmail.com',
    phone: '9876543210',
    location: 'Mumbai, Maharashtra',
    revenue: 600000,
    averageOrderValue: 500
  },
  {
    id: 'C012',
    name: 'Piyush Jain',
    email: 'pjain@gmail.com',
    phone: '9876543210',
    location: 'Indore, Madhya Pradesh',
    revenue: 500000,
    averageOrderValue: 500
  }
]

const columns = customerColumns

export default function CustomersPage() {
  return (
    <div className='page h-screen'>
      {/* Header section */}
      <CustomerHeader />
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
