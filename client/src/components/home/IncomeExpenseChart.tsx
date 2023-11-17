'use client'
// named imports
import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const chartData = [
  {
    name: 'January',
    income: 1000,
    expenses: 1500,
  },
  {
    name: 'February',
    income: 1500,
    expenses: 750,
  },
  {
    name: 'March',
    income: 2000,
    expenses: 1200,
  },
  {
    name: 'April',
    income: 1500,
    expenses: 1250,
  },
  {
    name: 'May',
    income: 2000,
    expenses: 1500,
  },
  {
    name: 'June',
    income: 2500,
    expenses: 1750,
  },
  {
    name: 'July',
    income: 2000,
    expenses: 1500,
  }
]

function IncomeExpenseChart() {
  return (
    <LineChart
      width={720}
      height={230}
      data={chartData}
      margin={{
        top: 20,
        right: 10,
        left: 0,
        bottom: 15
      }}
      style={{
        fontSize: '0.8rem'
      }}
    >
      <Line type="monotone" dataKey="income" stroke="#29ADB2" strokeWidth={1} />
      <Line type="monotone" dataKey="expenses" stroke="#7071E8" strokeWidth={1} />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </LineChart>
  )
}

export default IncomeExpenseChart