import React, {Component} from 'react'
import {Bar, Line, Pie} from 'react-chartjs-2'

class Chart extends Component {
  constructor() {
    super()
    this.state = {
      chartData: {
        labels: ['06/23/25'],
        datasets: [
          {
            label: ['coffee', 'alcohol', 'exercise'],
            data: [4530, 5610, 8236, 3124, 9323, 3213, 3123],
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          }
        ]
      }
    }
  }
  render() {
    return (
      <div>
        <div className="chart">
          <Line data={this.state.chartData} options={{}} />
        </div>
      </div>
    )
  }
}

export default Chart
