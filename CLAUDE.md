# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm start` - Starts the development server on http://localhost:3000
- `npm run build` - Creates production build in the `build` folder
- `npm test` - Runs tests in interactive watch mode

### Dependencies
- `npm install` - Install all project dependencies

## Architecture

### Core Technology Stack
- **React 18.3** with class components (not using hooks, uses createRoot API)
- **Redux 5.0** for global state management (using legacy_createStore)
- **React-Redux 9.1** for connecting components to store
- **Bootstrap 5.3** for styling framework
- **Create React App 5.0** as the build toolchain (not ejected)

### Application Structure

#### State Management
The Redux store (`src/state/store.js`) manages:
- **pen**: Current drawing color selected from palette
- **palette**: Color palette editing state

Redux follows standard patterns:
- Actions in `src/state/actions/index.js`
- Action types in `src/state/constants/action-types.js`
- Reducers in `src/state/reducers/`

#### Component Architecture

**Main Components:**
- **App** (`src/App.js`): Root component that renders multiple drawing boards with different scales
- **Sheet** (`src/sheet/`): Grid container for pixels, accepts width/height/scale props
- **Pixel** (`src/pixel/`): Individual pixel component, connected to Redux for pen color
- **Palette** (`src/palette/`): Color palette with 16 default colors
- **Color** (`src/color/`): Individual color well with picker, connected to Redux to set pen color

**Component Communication:**
- Pixels receive pen color from Redux store via `connect()`
- Color wells dispatch `penColor` action to update drawing color
- Components use class-based architecture with constructor binding

#### Key Implementation Details
- Sheet dynamically generates grid of Pixel components based on width × height
- Scaling is implemented via CSS viewport units (vw)
- Color picker uses `react-color` ChromePicker component
- Grid layout uses CSS Grid with dynamic `gridTemplateColumns`
- Store is exposed globally as `window.store` for debugging

### Current Implementation Status
The app renders drawing sheets but several features are incomplete:
- Save/load functionality buttons exist but handlers are not implemented
- Multiple sheet/page support is partially scaffolded but not functional
- Palette editing toggle exists but is not fully implemented