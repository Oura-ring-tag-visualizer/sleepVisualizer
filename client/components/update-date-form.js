import React from 'react'

export class UpdateDateForm extends React.Component {
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
    let dateForm = {}
    dateForm.date = this.state.date
    dateForm.tagNames = [this.state.tagNames]
    dateForm.remSleepTime = this.state.remSleepTime
    this.props.updateExistingDate(dateForm)
    this.setState({
      date: '',
      tagNames: [],
      remSleepTime: 0
    })
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    const tagNames = this.state.tagNames
    console.log('props: ', this.props)
    return (
      <div className="container">
        <h6 className="white-text center"> Update Data</h6>
        <form onSubmit={this.handleSubmit}>
          <h3>Update Date</h3>
          <label className="white-text" htmlFor="date">
            Date
          </label>
          <input
            className="white-text"
            type="date"
            value={this.state.date}
            name="date"
            placeholder="enter date"
            onChange={this.handleChange}
          />

          <label className="white-text" htmlFor="remSleepTime">
            Rem Sleep Time (in seconds)
          </label>
          <input
            className="white-text"
            type="text"
            value={this.state.remSleepTime}
            name="remSleepTime"
            placeholder="enter rem sleep time"
            onChange={this.handleChange}
          />
          <br />

          <label className="white-text" htmlFor="tagNames">
            Tag Names
          </label>
          <select
            className="browser-default"
            type="text"
            value={this.state.tagNames}
            name="tagNames"
            onChange={this.handleChange}
          >
            <option value="" />
            <option value="coffee">Coffee</option>
            <option value="alcohol">Alcohol</option>
            <option value="exercise">Exercise</option>
          </select>

          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
