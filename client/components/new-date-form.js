import React from 'react'
import {connect} from 'react-redux'
import createNewDate from '../store/tags'

export class NewDateForm extends React.Component {
  constructor() {
    super()
    this.state = {
      date: '',
      tagNames: '',
      remSleepTime: 0
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.createNewDate(this.state)
    this.setState({
      date: '',
      tagNames: '',
      remSleepTime: 0
    })
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    console.log('props:', this.props)
    const tagNames = this.state.tagNames
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            value={this.state.date}
            name="date"
            placeholder="enter date"
            onChange={this.handleChange}
          />

          <label htmlFor="remSleepTime">Rem Sleep Time (in seconds)</label>
          <input
            type="text"
            value={this.state.remSleepTime}
            name="remSleepTime"
            placeholder="enter rem sleep time"
            onChange={this.handleChange}
          />

          <label htmlFor="tagNames">Tag Names</label>
          <select
            name="tagNames"
            value={this.state.tagNames}
            onChange={this.handleChange}
          >
            <option value="coffee">Coffee</option>
            <option value="alcohol">Alcohol</option>
            <option value="exercise">Exercise</option>
          </select>

          <button
            disable={
              !this.state.date &&
              !this.state.tagNames &&
              !this.state.remSleepTime
            }
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    )
  }
}

const mapStatetoProps = state => ({
  dates: state.tagReducer.dates
})

const mapDispatchToProps = dispatch => ({
  createNewDate: newDate => dispatch(createNewDate(newDate))
})

export default connect(mapStatetoProps, mapDispatchToProps)(NewDateForm)
