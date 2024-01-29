import { CubeIcon, CurrencyRupeeIcon } from '@heroicons/react/20/solid'
import { getRates } from '../../actions/getRates'

async function CommodityRates() {
  const commodities = await getRates()

  return (
    <div className='section col-span-2'>

      <div className='flex justify-center items-center space-x-3 mt-2'>
        {commodities.map((item, index) => (
          <div
            key={item.name}
            className='flex flex-col last:border-none border-r border-gray-400 px-5'
          >
            <p className='font-semibold'>{item.name}</p>
            <div className='flex flex-col justify-center items-center space-y-2 mt-3'>
              <CubeIcon className={`h-8 w-10 ${item.name === 'Gold' ? 'text-yellow-500' : 'text-gray-400'
                }`} />
              <div className='flex items-center text-gray-700 justify-center space-x-1'>
                <CurrencyRupeeIcon className='h-5 w-5 text-gray-600 font-light' />
                <p className='text-sm'>{item.price}/<span className='text-xs'>10gm</span></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CommodityRates