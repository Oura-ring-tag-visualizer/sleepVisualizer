// import React from 'react'
// import {fetchAllDates, fetchTag} from '../store/tags'
// import {connect} from 'react-redux'
// import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer'
// import LineChart from 'recharts/lib/chart/LineChart'
// import Line from 'recharts/lib/cartesian/Line'
// import XAxis from 'recharts/lib/cartesian/XAxis'
// import YAxis from 'recharts/lib/cartesian/YAxis'
// import CartesianGrid from 'recharts/lib/cartesian/CartesianGrid'
// import Tooltip from 'recharts/lib/component/Tooltip'
// import Legend from 'recharts/lib/component/Legend'

// export class Chart extends React.Component {
//   componentDidMount= () => {
//     this.props.fetchTagData('exercise')
//     console.log(this.props)
//   }

//   render() {
//     const tags = this.props.tags
//     console.log('props:', tags)
//     return (
//       <div>
//         <div>hi</div>
//         {/* <div>{tag[0].tagNames[0]}</div> */}

//       </div>

//       // <LineChart width={500} height={300} data={tag}>
//       //   <XAxis dataKey="name" />
//       //   <YAxis />
//       //   <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
//       //   <Line type="monotone" dataKey='' stroke="#8884d8" />
//       //   <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
//       // </LineChart>
//     )
//   }
// }

// const mapStatetoProps = state => ({
//   tags: state.tags
// })

// const mapDispatchToProps = dispatch => ({
//   fetchDates: () => dispatch(fetchAllDates()),
//   fetchTagData: tagName => dispatch(fetchTag(tagName))
// })

// export default connect(mapStatetoProps, mapDispatchToProps)(Chart)

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
