import React from 'react'
import PropTypes from 'prop-types'

import Step from '../../step/step'
import Text from '../../step/text'
import CodeSnippet from '../../step/codeSnippet'
import Console from '../../step/console'

import input from '../input.json'

export default class Step2 extends React.Component {
  render() {
    const { input } = this.props.state

    const pairs = []
    input.forEach((n1, i) =>
      input.forEach((n2, j) => {
        if (i !== j) pairs.push(n1, n2)
      }),
    )
    console.log(pairs)

    const codeSnippetLines = [
      'const pairs = []',
      'input.forEach((n1, i) =>',
      '  input.forEach((n2, j) => {',
      '    if (i !== j) pairs.push(n1, n2)',
      '  }),',
      ')',
      'console.log(pairs)',
    ]

    const consoleLines = []

    return (
      <Step title='Find Combination That Sums To 2020'>
        <Text>
          Now let's try every combination to find a pair that sums to 2020:
        </Text>
        <CodeSnippet language='javascript' lines={codeSnippetLines} />
        <Console lines={consoleLines} />
      </Step>
    )
  }
}

Step2.propTypes = {
  state: PropTypes.object.isRequired,
  setState: PropTypes.func.isRequired,
}
