import React, { Component } from 'react';
import Pixel from '../pixel'

import './sheet.css';

class Sheet extends Component {
  constructor(props) {
    super(props)
    this.calcGridColumns = this.calcGridColumns.bind(this)
    this.state = {
      scale: props.scale,
      width: props.width,
      height: props.height
    }
  }
  calcGridColumns() {
    let cssPieces = []
    let counter = this.props.width
    while (counter > 0) {
      cssPieces.push(' 1fr')
      counter--
    }
    let cssValue = cssPieces.join('')
    return cssValue
  }
  componentDidMount() {
  }

  render() {
    let page = this.state.page
    const width = this.state.width
    const scale = this.state.scale
    const sheetWidth = `${width * scale}vw`
    const height = this.state.height
    const sheetHeight = `${height * scale}vw`
    let pixels = []
    const gridTemplateColumns = this.calcGridColumns()
    for (let i = 1; i <= width * height; i++) {
      pixels.push(
        <Pixel key={i} page={page} className={'pixel-' + i}></Pixel>
      )
    }
    console.log('checking sheetWidth')
    console.log(sheetWidth)
    console.log(sheetHeight)
    return (
      <div className="gfx-sheet"
      style={{
        gridTemplateColumns: gridTemplateColumns,
        height: sheetHeight,
        width: sheetWidth
      }}>
        { pixels }

      </div>
    );
  }
}

Sheet.defaultProps = {
  page: 1,
  scale: 1,
  width: 16,
  height: 16
}
export default Sheet;
