import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ChromePicker, PhotoshopPicker } from 'react-color'
import * as ColorLib from 'color'
import { penColor } from '../state/actions'
import './color.css'

const mapStateToProps = state => {
  return { pen: state.pen, palette: state.palette }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setPenColor: color => dispatch(penColor(color))
  }
}

class Color extends Component {
  constructor(props) {
    super(props)
    const brightness = ColorLib(props.selectedColor).isLight() ? 'light' : 'dark'
    this.focusWell = this.focusWell.bind(this)
    this.toggleColorPicker = this.toggleColorPicker.bind(this)
    this.colorChange = this.colorChange.bind(this)
    this.state = {
      brightness: brightness,
      selectedColor: props.selectedColor,
      displayColorPicker: false
    }
  }

  focusWell() {
    const c = this
    c.props.setPenColor(c.state.selectedColor)
  }

  toggleColorPicker() {
    const c = this
    c.setState({ displayColorPicker: !c.state.displayColorPicker })
  }

  colorChange(color) {
    const c = this
    const rgb = color.rgb
    const rgbCss = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${rgb.a})`
    const brightness = ColorLib(rgbCss).isLight() ? 'light' : 'dark'
    c.setState({
      brightness: brightness,
      selectedColor: rgbCss
    })
    c.props.setPenColor(c.state.selectedColor)

  }

  render() {
    const c = this
    const popover = {
      position: 'absolute',
      zIndex: 2
    }
    const cover = {
      position: 'fixed',
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px'
    }
    return (
      <div className={`color ${c.state.brightness}`}>
        <div className="well" style={{backgroundColor: this.state.selectedColor}}
        onClick={ c.focusWell }>
        </div>
        <svg width="1em" height="1em" viewBox="0 0 16 16"
        className="bi bi-sliders" fill={this.state.selectedColor}
        onClick={c.toggleColorPicker}
        xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M14 3.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0zM11.5 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM7 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0zM4.5 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm9.5 3.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0zM11.5 15a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
          <path fillRule="evenodd" d="M9.5 4H0V3h9.5v1zM16 4h-2.5V3H16v1zM9.5 14H0v-1h9.5v1zm6.5 0h-2.5v-1H16v1zM6.5 9H16V8H6.5v1zM0 9h2.5V8H0v1z"/>
        </svg>
        { c.state.displayColorPicker && <div style={popover}>
          <div style={ cover } onClick={ c.toggleColorPicker } />
          <ChromePicker onChangeComplete={c.colorChange} color={c.state.selectedColor } />
        </div> }
      </div>
    )
  }
}

Color.defaultProps = {
  selectedColor: 'rgba(0, 0, 0, 1)'
}

export default connect(mapStateToProps, mapDispatchToProps)(Color)
