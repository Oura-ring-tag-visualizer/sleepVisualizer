import React from 'react'
import {connect} from 'react-redux'
import {fetchAllDates, fetchTag} from '../store/tags'
import {Line} from 'react-chartjs-2'

class Data extends React.Component {
  componentDidMount = () => {
    this.props.fetchDates()
    this.props.fetchTagData('coffee')
  }

  render() {
    const datesAndRem = this.props.dates.map(date => {
      delete date.tagNames
      delete date.createdAt
      delete date.updatedAt
      return date
    })

    const datesOnly = datesAndRem.map(date => {
      return date.date
    })

    const remOnly = datesAndRem.map(date => {
      return date.remSleepTime
    })

    const tagRemSleepTimeArray = this.props.tags.map(remTime => {
      return Number(remTime.remSleepTime)
    })

    const tagRemSleepTimeSum = tagRemSleepTimeArray.reduce((a, b) => a + b, 0)

    const tagRemSleepTimeAvg = tagRemSleepTimeSum / tagRemSleepTimeArray.length

    const tagRemSleepHorizontalLine = Array(datesOnly.length).fill(
      tagRemSleepTimeAvg
    )

    console.log('Tag Rem Sleep Average: ', tagRemSleepHorizontalLine)

    const chartData = {
      labels: datesOnly,
      datasets: [
        {
          label: ['Rem sleep time'],
          data: remOnly,
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)',
            'rgba(255, 99, 132, 0.6)'
          ]
        },

        {
          label: ['Coffee'],
          data: tagRemSleepHorizontalLine,
          borderColor: [
            'rgba(75,192,192,1)',
            'rgba(75,192,192,1)',
            'rgba(75,192,192,1)',
            'rgba(75,192,192,1)',
            'rgba(75,192,192,1)',
            'rgba(75,192,192,1)'
          ]
        }
      ]
    }

    return (
      <div className="chart">
        <Line
          data={chartData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: 'REM Sleep Time by Tag',
              fontSize: 25,
              spanGaps: true
            }
          }}
        />
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
