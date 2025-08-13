import React, { Component } from 'react'
import { connect } from 'react-redux'

import './pixel.css'

const mapStateToProps = state => {
  // console.log('mapStateToProps')
  // console.log(state)
  return { pen: state.pen }
}


class Pixel extends Component {
  constructor(props) {
    super(props)
    this.color = this.color.bind(this)
    this.state = {
      // penColor: props.penColor,
      bgc: props.bgc
    }
  }
  color(e) {
    let pen = this.props.pen
    console.log('colorize')
    console.log(pen)
    this.setState({
      bgc: pen.color
    })
  }
  render() {
    return (
      <div className={'pixel'} onClick={this.color}
      style={{backgroundColor: this.state.bgc}}></div>
    )
  }
}

Pixel.defaultProps = {
  page: 1,
  pen: {color: '#000'},
  bgc: 'transparent'
}

export default connect(mapStateToProps)(Pixel)
