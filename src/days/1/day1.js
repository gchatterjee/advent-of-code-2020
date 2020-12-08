import React from 'react'
import Step1 from './steps/step1'

export default class Day1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <>
        <Step1 state={this.state} setState={this.setState.bind(this)} />
      </>
    )
  }
}
