import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default class Jumbotron extends React.Component {
  render() {
    return (
      <div className='jumbotron'>
        <h1 className='display-4'>{this.props.title}</h1>
        <p className='lead'>{this.props.subtitle}</p>
        <hr className='my-4' />
        <p>{this.props.description}</p>
        <p className='lead'>
          <Link className='btn btn-primary btn-lg' to='/1'>
            {this.props.buttonText}
          </Link>
        </p>
      </div>
    )
  }
}

Jumbotron.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}
