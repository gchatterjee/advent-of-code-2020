import React from 'react'
import PropTypes from 'prop-types'

import Step from '../../step/step'
import Text from '../../step/text'
import CodeSnippet from '../../step/codeSnippet'
import Console from '../../step/console'

import input from '../input.json'

export default class Step1 extends React.Component {
  render() {
    const codeSnippetLines = [
      "const input = fs.readFileSync('input.txt').split('\\n')",
      'console.log(input)',
    ]

    const consoleLines = input

    this.props.setState(() => ({ input }))

    return (
      <Step title='Load Data'>
        <Text>Let's load the input.txt file:</Text>
        <CodeSnippet language='javascript' lines={codeSnippetLines} />
        <Console lines={consoleLines} />
      </Step>
    )
  }
}

Step1.propTypes = {
  state: PropTypes.object.isRequired,
  setState: PropTypes.func.isRequired,
}
