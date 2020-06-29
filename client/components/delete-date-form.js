import React from 'react'

export class DeleteDateForm extends React.Component {
  constructor() {
    super()
    this.state = {
      date: ''
    }
  }

  handleSubmit = async event => {
    event.preventDefault()
    let dateForm = {}
    dateForm.date = this.state.date
    await this.props.deleteExistingDate(dateForm)
    this.setState({
      date: ''
    })
    await this.props.fetchDates()
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h3>Delete Date</h3>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            value={this.state.date}
            name="date"
            placeholder="enter date"
            onChange={this.handleChange}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
