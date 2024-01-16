'use client'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

function StatewiseDistribution() {
  const options = {
    chart: {
      type: 'pie'
    },
    title: {
      text: null
    },
    series: [{
      name: 'Sales',
      borderRadius: 5,
      data: [{
        name: 'Madhya Pradesh',
        y: 505992,
        z: 92
      }, {
        name: 'Assam',
        y: 551695,
        z: 119
      }, {
        name: 'Uttar Pradesh',
        y: 312679,
        z: 121
      }, {
        name: 'Maharashtra',
        y: 78865,
        z: 136
      }, {
        name: 'Karnataka',
        y: 301336,
        z: 200
      }, {
        name: 'Tamil Nadu',
        y: 41284,
        z: 213
      }, {
        name: 'Kerala',
        y: 357114,
        z: 235
      }],
      colors: [
        '#4caefe',
        '#3dc3e8',
        '#2dd9db',
        '#1feeaf',
        '#0ff3a0',
        '#00e887',
        '#23e274'
      ]
    }],
    // reduce the margin
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: false,
          style: {
            color: 'black',
          }
        },
        size: '70%',
      },
      slicedOffset: 5,
    },
    credits: {
      enabled: false,
    },
  };

  return (
    <div className=''>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}

export default StatewiseDistribution