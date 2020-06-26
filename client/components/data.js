import React from 'react'
import {connect} from 'react-redux'
import {fetchAllDates, fetchTag} from '../store/tags'
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer'
import LineChart from 'recharts/lib/chart/LineChart'
import Line from 'recharts/lib/cartesian/Line'
import XAxis from 'recharts/lib/cartesian/XAxis'
import YAxis from 'recharts/lib/cartesian/YAxis'
import CartesianGrid from 'recharts/lib/cartesian/CartesianGrid'
import Tooltip from 'recharts/lib/component/Tooltip'
import Legend from 'recharts/lib/component/Legend'

class Data extends React.Component {
  componentDidMount = () => {
    this.props.fetchDates()
    this.props.fetchTagData('coffee')
  }

  render() {
    console.log('props:', this.props)
    return (
      <div>
        <div>Data</div>
        <div>{/* <Chart {...this.props}/> */}</div>
      </div>
    )
  }
}

const mapStatetoProps = state => ({
  tags: state.tagReducer.tags,
  dates: state.tagReducer.dates
})

const mapDispatchToProps = dispatch => ({
  fetchDates: () => dispatch(fetchAllDates()),
  fetchTagData: tagName => dispatch(fetchTag(tagName))
})

export default connect(mapStatetoProps, mapDispatchToProps)(Data)
