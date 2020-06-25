import React from 'react'

const Graph = () => {
  return (
    <div>
      <h1>Graph</h1>
    </div>
  )
}

export default Graph

// import React, {Component} from 'react'
// import {Bar, Line, Pie} from 'react-chartjs-2'

// class Chart extends Component {
//   constructor() {
//     super()
//     this.state = {
//       chartData: {
//         //dates will change based on tagname
//         labels: ['06/23/20', '06/24/20', '06/25/20', '06/26/20'],
//         datasets: [
//           {
//             // tag, this will change based on tagname
//             label: ['coffee'],
//             //data will change based on tag name
//             data: [4530, 5610, 8236, 3124, 9323, 3213, 3123],
//             backgroundColor: [
//               'rgba(255, 99, 132, 0.6)',
//               'rgba(54, 162, 235, 0.6)',
//               'rgba(255, 206, 86, 0.6)',
//               'rgba(75, 192, 192, 0.6)',
//               'rgba(153, 102, 255, 0.6)',
//               'rgba(255, 159, 64, 0.6)',
//               'rgba(255, 99, 132, 0.6)'
//             ]
//           }
//         ]
//       }
//     }
//   }
//   render() {
//     return (
//       <div>
//         <div className="chart">
//           <Line data={this.state.chartData} options={{}} />
//         </div>
//         <div>
//           <button type="button">Coffee</button>
//           <button type="button">Alcohol</button>
//           <button type="button">Exercise</button>
//         </div>
//       </div>
//     )
//   }
// }

// export default Chart
