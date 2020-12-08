import React from 'react'
import PropTypes from 'prop-types'
import Highlight from 'react-highlight.js'

export default class Console extends React.Component {
  render() {
    return (
      <>
        <div className='small caption'>CONSOLE</div>
        <div className='console'>
          <Highlight language='plaintext'>
            {this.props.lines.join('\n')}
          </Highlight>
        </div>
      </>
    )
  }
}

Console.propTypes = {
  lines: PropTypes.array.isRequired,
}
