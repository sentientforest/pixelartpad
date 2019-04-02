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
    this.editPalette = this.editPalette.bind(this)
    this.state = {
      palettes: {
        one: false,
        two: false
      }
    }
  }

  acceptColor(arg1, arg2) {
    console.log('acceptColor')
    console.log(arg1)
    console.log(arg2)
  }

  editPalette() {
    let palettes = {...this.state.palettes}
    palettes.one = !palettes.one
    this.setState({
      palettes: palettes
    })
  }

  render() {
    let editPalette = this.editPalette 
    return (
      <div className="App">
        <header className="App-header">
          <h1>pixelartpad</h1>
        </header>
        <section class="section">
          <div className="container">
            <div className="media">
              <div className="media-left">
                <div className="palette-board">
                  <button className="" onClick={editPalette}>Edit</button>
                  <Palette />
                </div>
              </div>
              <div className="media-content">
                <div className="drawing-board">
                  <Sheet width={16} height={16}></Sheet>
                </div>
              </div>

              <div>

              </div>
            </div>
            <div className="media">
              <div className="media-left">
                <div className="palette-board">
                  <Palette />
                </div>
              </div>
              <div className="media-content">
                <div className="drawing-board">
                  <Sheet width={64} height={64}></Sheet>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
