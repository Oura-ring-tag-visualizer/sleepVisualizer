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
import {Container, Row, Col, Button} from 'react-bootstrap'
import {element} from 'prop-types'
import {AnimatePresence, motion} from 'framer-motion'

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
          backgroundColor: ['rgb(195, 190, 204)'],
          fontColor: 'rgb(195, 190, 204)'
        },

        {
          label: ['Rem Sleep Time for Current Tag (in Hours)'],
          data: tagRemSleepHorizontalLine,
          borderColor: ['rgb(179, 255, 0)'],
          borderWidth: 6,
          fontColor: 'rgb(195, 190, 204)'
        }
      ]
    }

    const pageVariants = {
      initial: {
        opacity: 0,
        x: '-100vw',
        scale: 0.8
      },
      in: {
        opacity: 1,
        x: 0,
        scale: 1
      },
      out: {
        opacity: 0,
        x: '-100vw',
        scale: 1.2
      }
    }

    const pageTransition = {
      type: 'tween',
      ease: 'anticipate',
      duration: 1
    }

    return (
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        height="70%"
        width="50%"
      >
        <div className="chart">
          <Line
            data={chartData}
            options={{
              elements: {
                point: {
                  radius: 0
                }
              },
              scales: {
                yAxes: [
                  {
                    scaleLabel: {
                      display: true,
                      fontSize: 20,
                      fontColor: 'rgb(195, 190, 204)'
                    }
                  }
                ],
                xAxes: [
                  {
                    scaleLabel: {
                      display: true,
                      fontSize: 20,
                      fontColor: 'rgb(195, 190, 204)'
                    }
                  }
                ]
              },
              title: {
                text: 'REM Sleep Time by Tag',
                fontSize: 25,
                spanGaps: true,
                fontColor: 'rgb(195, 190, 204)'
              }
            }}
          />
        </div>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp;
        <hr className="white" />
        <h6 className="center white-text">Tags</h6>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp;
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
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp;
        <hr className="white" />
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp;
        <div className="offset m-3">
          <NewDateForm {...this.props} />
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp;
          <UpdateDateForm {...this.props} />
        </div>
      </motion.div>
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
