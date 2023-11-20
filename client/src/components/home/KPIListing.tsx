// named imports
import { data } from '@/constants'

function KPIListing() {
  return (
    <div className='section sm:col-span-4 col-span-6'>
      <h2 className='section-heading'>Overview</h2>

      <div className='flex justify-center items-center'>
        {data.map((item, index) => (
          <div
            key={index}
            className='last:border-none border-r border-gray-400 px-5 flex flex-col items-center space-y-3'
          >
            <div>
              {item.icon}
            </div>
            <div className='flex justify-between items-center w-full space-x-4'>
              <span className='font-semibold'>{item.title}</span>
              <span className='text-sm mt-1'>{item.value}</span>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default KPIListing
