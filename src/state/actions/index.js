import { PEN_COLOR } from '../constants/action-types'

export function penColor(penColor) {
  console.log('action')
  console.log(penColor)
  console.log({ type: PEN_COLOR, penColor })
  return { type: PEN_COLOR, penColor }
}
