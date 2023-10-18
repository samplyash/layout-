import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

function Customers() {
  const [series] = useState([44, 55, 41, 17, 15]);
  const options = {
    chart: {
      type: 'donut'
    },
    dataLabels: {
      enabled: false
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 1000
          },
          legend: {
            show: false,
            position: 'bottom'
          }
        }
      }
    ],
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              show: true // Hide label names
            },
            value: {
              show: true,
              fontSize: '50px',
              margin: '5px',
              // fontWieght: '100px',
              // fontWeight: '100px',
              formatter: function (val) {
                return `${val}%`;
              }
            },
            total: {
              show: false,
              label: `Total New Customers`,

              color: '#333'
              // fontSize: '20px',
            }
          }
        }
      }
    },
    legend: {
      show: false // Hide legend
    }
  };

  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="donut" height={400} />
    </div>
  );
}

export default Customers;
