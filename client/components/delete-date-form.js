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
        <div className="col s6 m10">
          <div className="card-container black">
            <form onSubmit={this.handleSubmit}>
              <h3 className="white-text center">Delete</h3>
              <label htmlFor="date" className="white-text center">
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
              <button
                className="waves-effect waves-dark btn grey"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
