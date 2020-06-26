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
    const datesOnly = this.props.dates.map(date => {
      delete date.tagNames
      delete date.createdAt
      delete date.updatedAt
      return date
    })

    // const remSleepTimeAverage = this.props.tags.map(tag => {
    //   delete date.tagNames
    //   delete date.createdAt
    //   delete date.updatedAt
    //   return (

    //   )
    // })

    console.log('dates: ', datesOnly)
    console.log('tagNameData:', this.props.tags)
    return (
      <div>
        <div>
          <ResponsiveContainer width="99%" height={500}>
            <LineChart data={datesOnly}>
              <XAxis dataKey="date" stroke="black" />
              <YAxis stroke="black" dataKey="remSleepTime" />
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="remSleepTime"
                stroke="black"
                activeDot={{r: 8}}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
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
