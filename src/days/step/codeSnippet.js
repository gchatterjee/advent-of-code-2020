import React from 'react'
import PropTypes from 'prop-types'
import Highlight from 'react-highlight.js'

export default class CodeSnippet extends React.Component {
  render() {
    const defaultLanguage = 'plaintext'

    return (
      <>
        <div className='small caption'>
          {(this.props.language && this.props.language.toUpperCase()) ||
            defaultLanguage.toUpperCase()}
        </div>
        <Highlight language={this.props.language || defaultLanguage}>
          {this.props.lines.join('\n')}
        </Highlight>
      </>
    )
  }
}

CodeSnippet.propTypes = {
  language: PropTypes.string,
  lines: PropTypes.array.isRequired,
}
