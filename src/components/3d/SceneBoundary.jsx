import { Component } from 'react'

// WebGL ન ચાલે તો આખું page ન તૂટે, ફક્ત fallback દેખાય
export default class SceneBoundary extends Component {
  state = { failed: false }

  static getDerivedStateFromError() {
    return { failed: true }
  }

  componentDidCatch(error) {
    console.warn('3D scene disabled:', error)
  }

  render() {
    return this.state.failed ? this.props.fallback : this.props.children
  }
}