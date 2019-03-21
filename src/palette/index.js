import React, { Component } from 'react'
import Color from '../color'

import './palette.css'

class Palette extends Component {
  constructor(props) {
    super(props)
    this.state = {
      wells: props.wells,
      edit: props.edit,
      defaults: props.defaults
    }
  }
  render() {
    let n = this.state.wells
    let defaults = this.state.defaults
    let edit = this.state.edit
    let wells = []
    for (let i = 0; i < n; i++) {
      wells.push(
        <Color edit={ edit } finalColor={ defaults[i] } key={ i }></Color>
      )
    }
    return (
      <div className="palette">
        { wells }
      </div>
    )
  }
}

Palette.defaultProps = {
  wells: 16,
  edit: false,
  defaults: [
    'rgba(0, 0, 0, 1)',
    'rgba(255, 255, 255, 1)',
    'rgba(200, 0, 0, 1)',
    'rgba(150, 200, 0, 1)',
    'rgba(100, 200, 0, 1)',
    'rgba(0, 200, 0, 1)',
    'rgba(0, 0, 200, 1)',
    'rgba(200, 0, 200, 1)',
    'rgba(100, 0, 100, 1)',
    'rgba(50, 50, 50, 1)',
    'rgba(150, 150, 150, 1)',
    'rgba(225, 225, 225, 1)',
    'rgba(25, 200, 100, 1)',
    'rgba(0, 200, 200, 1)',
    'rgba(0, 100, 100, 1)',
    'rgba(200, 200, 100, 1)'
  ]
}

export default Palette
