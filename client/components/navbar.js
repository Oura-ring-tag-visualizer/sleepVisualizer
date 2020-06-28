import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import Home from './home'
import Data from './data'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    <div className="navbar-fixed">
      <nav className="black">
        <div className="nav-wrapper">
          <h4 href="/home" className="brand-logo center">
            Sleep Visualizer
          </h4>
          <ul className="left hide-on-med-and-down">
            <li className="tab">
              <a target="_self" href="/home">
                Home
              </a>
            </li>
            <li className="tab">
              <a target="_self" href="/data">
                Data
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
