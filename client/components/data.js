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

    const tagRemSleepTimeAvg =
      Math.round(
        tagRemSleepTimeSum / tagRemSleepTimeArray.length / 60 / 60 * 10
      ) / 10

    const last31DatesOnly = datesOnly.slice(
      datesOnly.length - 31,
      datesOnly.length
    )

    const last31RemDatesOnly = remOnly
      .slice(datesOnly.length - 31, datesOnly.length)
      .map(remData => {
        return Math.round(remData / 60 / 60 * 10) / 10
      })

    const tagRemSleepHorizontalLine = Array(last31DatesOnly.length).fill(
      tagRemSleepTimeAvg
    )

    const chartData = {
      labels: last31DatesOnly,
      datasets: [
        {
          label: ['Rem Sleep Time (in Hours)'],
          data: last31RemDatesOnly,
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
          label: ['Rem Sleep Time for Current Tag (in Hours)'],
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
      <div className="container">
        <div className="chart">
          <Line
            data={chartData}
            options={{
              scales: {
                yAxes: [
                  {
                    scaleLabel: {
                      display: true,
                      labelString: 'Daily Rem Sleep Time (in Hours)',
                      fontSize: 20
                    }
                  }
                ],
                xAxes: [
                  {
                    scaleLabel: {
                      display: true,
                      labelString: 'Dates',
                      fontSize: 20
                    }
                  }
                ]
              },
              title: {
                text: 'REM Sleep Time by Tag',
                fontSize: 25,
                spanGaps: true
              }
            }}
          />
          <div>
            <div className="container center">
              <button
                className="waves-effect waves-dark btn grey"
                type="button"
                onClick={event => this.props.fetchTagData('coffee')}
              >
                Coffee
              </button>

              <button
                className="waves-effect waves-dark btn grey"
                type="button"
                onClick={event => this.props.fetchTagData('alcohol')}
              >
                Alcohol
              </button>
              <button
                className="waves-effect waves-dark btn grey"
                type="button"
                onClick={event => this.props.fetchTagData('exercise')}
              >
                Exercise
              </button>
            </div>
          </div>
          <h6 className="white-text center"> New Data</h6>
          <NewDateForm {...this.props} />
          <h6 className="white-text center"> Update Data</h6>

          <UpdateDateForm {...this.props} />
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
  fetchTagData: tagName => dispatch(fetchTag(tagName)),
  createNewDate: newDate => dispatch(createNewDate(newDate)),
  updateExistingDate: dateToUpdate => dispatch(updateExistingDate(dateToUpdate))
})

export default connect(mapStatetoProps, mapDispatchToProps)(Data)
