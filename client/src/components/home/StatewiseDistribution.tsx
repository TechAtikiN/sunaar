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
        '#F99417',
        '#FAA22E',
        '#FAB045',
        '#FAC15C',
        '#FAD274',
        '#FAE38B',
        '#FAF4A2'
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
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}

export default StatewiseDistribution