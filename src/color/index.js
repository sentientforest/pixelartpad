import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ChromePicker, PhotoshopPicker } from 'react-color'
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
    this.focusWell = this.focusWell.bind(this)
    this.closeColorPicker = this.closeColorPicker.bind(this)
    this.colorChange = this.colorChange.bind(this)
    this.saveColor = this.saveColor.bind(this)
    this.state = {
      selectedColor: props.finalColor,
      finalColor: props.finalColor,
      displayColorPicker: false
    }

  }

  focusWell() {
    if (this.props.edit) {
      this.setState({ displayColorPicker: !this.state.displayColorPicker})
    } else {
      this.props.setPenColor(this.state.finalColor)
    }
  }

  closeColorPicker() {
    this.setState({ displayColorPicker: false })
  }

  colorChange(color) {
    const rgb = color.rgb
    const rgbCss = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${rgb.a})`
    console.log('colorChange')
    console.log(color)
    this.setState({ selectedColor: rgbCss })
  }

  saveColor() {
    this.props.setPenColor(this.state.selectedColor)
    this.setState({ finalColor: this.state.selectedColor })
    this.closeColorPicker()
  }


  render() {
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
      <div className="color">
        <div className="well" style={{backgroundColor: this.state.selectedColor}}
        onClick={ this.focusWell }>
        </div>
        { this.state.displayColorPicker ? <div style={popover}>
          <div style={ cover } onClick={ this.closeColorPicker } />
          <ChromePicker onChangeComplete={this.colorChange} color={this.state.selectedColor } />
          <button className="button is-danger"
          onClick={ this.closeColorPicker }>Cancel</button>
          <button className="button is-primary"
          onClick={ this.saveColor }>Save</button>
        </div> : null }


      </div>
    )
  }
}

Color.defaultProps = {
  finalColor: 'rgba(0, 0, 0, 1)'
}

export default connect(mapStateToProps, mapDispatchToProps)(Color)
