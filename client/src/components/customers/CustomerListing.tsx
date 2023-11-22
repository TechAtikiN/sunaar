import { customerListing } from "@/constants/data"

function CustomerListing() {
  return (
    <div className='h-[500px] overflow-auto'>
      <table className='font-normal w-full h-[100px]'>
        <thead className='my-1'>
          <tr className='bg-amber-100'>
            <th className='customer-table-header rounded-tl-lg'>Customer Name</th>
            <th className='customer-table-header'>Email</th>
            <th className='customer-table-header'>Phone</th>
            <th className='customer-table-header'>Location</th>
            <th className='customer-table-header'>
              Avg Order Val.
              <p className='text-center text-xs'>(In gm)</p>
            </th>
            <th className='customer-table-header rounded-tr-lg'>Total Revenue
              <p className='text-center text-xs'>(In Rs)</p>
            </th>
          </tr>
        </thead>

        <tbody className='border border-gray-200 h-[450px] overflow-x-hidden overflow-y-scroll'>
          {customerListing.map((customer, index) => (
            <tr
              key={index}
              className='border-b border-gray-200 last:border-none hover:bg-slate-200'
            >
              <td className='customer-table-data flex items-center space-x-2 text-right'>
                <div className='p-[2px] text-xl h-9 w-9 bg-slate-200 rounded-full ml-8'>
                  <p className='text-center pt-2 text-sm'>
                    {customer.name.split(' ')[0][0] + customer.name.split(' ')[1][0]}

                  </p>
                </div>
                <div>
                  <p className='text-sm font-semibold text-gray-800 mt-3'>{customer.name}</p>
                  <p className='text-xs text-left text-gray-500'>{customer.id}</p>
                </div>
              </td>
              <td className='customer-table-data'>{customer.email}</td>
              <td className='customer-table-data'>{customer.phone}</td>
              <td className='customer-table-data'>{customer.location}</td>
              <td className='customer-table-data'>{customer.averageOrderValue}</td>
              <td className='customer-table-data'>{customer.revenue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CustomerListing
