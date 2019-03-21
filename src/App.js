import React, { Component } from 'react'
import { ChromePicker, PhotoshopPicker } from 'react-color'
import Palette from './palette'
import Sheet from './sheet'
import Color from './color'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.acceptColor = this.acceptColor.bind(this)
  }

  acceptColor(arg1, arg2) {
    console.log('acceptColor')
    console.log(arg1)
    console.log(arg2)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>pixelartpad</h1>
        </header>
        <div>
          <div className="drawing-board">
            <Sheet width={16} height={16}></Sheet>
          </div>
        </div>
        <div className="palette-board">
          <Palette />
        </div>
        <div>
          <div className="drawing-board">
            <Sheet width={64} height={64}></Sheet>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
