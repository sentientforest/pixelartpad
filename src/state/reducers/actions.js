import { PEN_COLOR, PALETTE_EDIT } from '../constants/action-types'

const initialPenState = {
  color: '#000000'
}

const initialPaletteState = {
  edit: false
}

export function pen(state = initialPenState, action) {
  console.log('reducer')
  console.log(action)
  if (action.type === PEN_COLOR) {
    console.log('reducer output')
    console.log(Object.assign({}, state, {
      color: action.penColor
    }))
    return Object.assign({}, state, {
      color: action.penColor
    })
  }
  return state
}

export function palette(state = initialPaletteState, action) {
  if (action.type === PALETTE_EDIT) {

  }
}
