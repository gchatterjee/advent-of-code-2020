import React from 'react'
import PropTypes from 'prop-types'

export default class Jumbotron extends React.Component {
  render() {
    return (
      <div class="jumbotron">
        <h1 class="display-4">{this.props.title}</h1>
        <p class="lead">{this.props.subtitle}</p>
        <hr class="my-4" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p class="lead">
          <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
        </p>
      </div>
    )
  }
}

Jumbotron.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
}
