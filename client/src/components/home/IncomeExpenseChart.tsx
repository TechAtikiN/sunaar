'use client'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

function IncomeExpenseChart() {
  const options = {
    chart: {
      type: 'column'
    },
    title: {
      text: null
    },
    colors: ['#87C4FF', '#39A7FF'],
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Amount (in ₹)'
      },
      stackLabels: {
        enabled: true
      }
    },
    // tooltip: {
    //   headerFormat: '<b>{point.x}</b><br/>',
    //   pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
    // },
    plotOptions: {
      column: {
        stacking: 'normal',
      }
    },
    series: [{
      name: 'Income',
      data: [11000, 20100, 13000, 40200, 13000, 20200, 11000]
    }, {
      name: 'Expense',
      data: [5020, 21000, 11500, 6000, 3500, 5000, 1500]
    },
    ]
  };

  return (
    <div className=''>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}

export default IncomeExpenseChart