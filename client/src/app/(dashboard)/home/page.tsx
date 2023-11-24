// named imports
import { getRates } from '../../../actions/getRates'

// default imports
import IncomeExpenseChart from '@/components/home/IncomeExpenseChart'
import StatewiseDistribution from '@/components/home/StatewiseDistribution'
import KPIListing from '@/components/home/KPIListing'
import CommodityRates from '@/components/home/CommodityRates'
import CustomerAnalytics from '@/components/home/CustomerAnalytics'
import RecentOrders from '@/components/home/RecentOrders'

export async function HomePage() {

  return (
    <div className='page grid grid-cols-6 gap-5'>

      {/* KPI listing */}
      <KPIListing />

      {/* Commodity rates */}
      <CommodityRates />

      {/* Income v/s Expense chart  */}
      <div className='section col-span-4'>
        <div className='flex justify-between items-center'>
          <h2 className='section-heading'>Statistics</h2>
          <div className='flex justify-end items-center space-x-2 text-sm'>
            <p>Income v/s Expense</p>
            <select className='p-1 text-sm text-center hover:cursor-pointer hover:bg-gray-100 focus:outline-none border border-gray-300 rounded-full' name="period" id="period">
              <option className='' value="weekly">Daily</option>
              <option className='' value="monthly">Weekly</option>
              <option className='' value="yearly">Monthly</option>
            </select>
          </div>
        </div>
        <IncomeExpenseChart />

      </div>

      {/* Statewise Distrubution of Sales and Customers */}
      <div className='section col-span-2'>
        <div className='flex justify-between items-center -pb-40'>
          <h2 className='section-heading'>Statewise Distribution</h2>
          <select className='p-1 text-sm text-center hover:cursor-pointer hover:bg-gray-100 focus:outline-none border border-gray-300 rounded-full' name="period" id="period">
            <option className='' value="monthly">Sales</option>
            <option className='' value="yearly">Customers</option>
          </select>
        </div>
        <StatewiseDistribution />
      </div>

      {/* Customer Analytics */}
      <CustomerAnalytics />

      {/* Recent Order */}
      <RecentOrders />
    </div>
  )
}

export default HomePage
