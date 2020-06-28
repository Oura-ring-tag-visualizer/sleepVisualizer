import React from 'react'
import {connect} from 'react-redux'
import {
  fetchAllDates,
  fetchTag,
  createNewDate,
  updateExistingDate
} from '../store/tags'
import {Line} from 'react-chartjs-2'
import {NewDateForm} from './new-date-form'
import {UpdateDateForm} from './update-date-form'

class Data extends React.Component {
  componentDidMount = () => {
    this.props.fetchDates()
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

    const last31DatesOnly = datesOnly.slice(
      datesOnly.length - 31,
      datesOnly.length
    )

    const tagRemSleepHorizontalLine = Array(last31DatesOnly.length).fill(
      tagRemSleepTimeAvg
    )

    const chartData = {
      labels: last31DatesOnly,
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
          label: ['Tag'],
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
        <div>
          <button
            type="button"
            onClick={event => this.props.fetchTagData('coffee')}
          >
            Coffee
          </button>
          <button
            type="button"
            onClick={event => this.props.fetchTagData('alcohol')}
          >
            Alcohol
          </button>
          <button
            type="button"
            onClick={event => this.props.fetchTagData('exercise')}
          >
            Exercise
          </button>
        </div>
        <NewDateForm {...this.props} />
        <UpdateDateForm {...this.props} />
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
  fetchTagData: tagName => dispatch(fetchTag(tagName)),
  createNewDate: newDate => dispatch(createNewDate(newDate)),
  updateExistingDate: dateToUpdate => dispatch(updateExistingDate(dateToUpdate))
})

export default connect(mapStatetoProps, mapDispatchToProps)(Data)
