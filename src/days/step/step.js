import React from 'react'
import PropTypes from 'prop-types'

export default class Step extends React.Component {
  render() {
    return (
      <div className='card step'>
        <div className='card-body'>
          {this.props.title && (
            <h5 className='card-title'>{this.props.title}</h5>
          )}
          {this.props.children}
        </div>
      </div>
    )
  }
}

Step.propTypes = {
  title: PropTypes.string,
  children: PropTypes.array.isRequired,
}
