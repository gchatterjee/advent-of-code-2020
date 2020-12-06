import React from 'react'
import PropTypes from 'prop-types'

export default class Jumbotron extends React.Component {
  render() {
    return (
      <section className='hero is-large is-primary is-bold'>
        <div className='hero-body'>
          <div className='container'>
            <h1 className='title'>{this.props.title}</h1>
            <h2 className='subtitle'>{this.props.subtitle}</h2>
          </div>
        </div>
      </section>
    )
  }
}

Jumbotron.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
}
