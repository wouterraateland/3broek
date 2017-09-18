import React, { Component } from 'react'
import './styles.css'

class Img extends Component {

  constructor(props) {
    super(props)
    this.state = {
      img: null,
      loaded: false
    }
  }

  onImageLoad() {
    this.setState({ loaded: true })
  }

  componentDidMount() {
    const img = new Image()
    this.setState({ img })
    img.onload = this.onImageLoad.bind(this)
    img.src = this.props.src
  }

  componentWillUnmount() {
    if (this.state.img) {
      this.setState({ img: { onload: null } })
    }
  }

  render() {
    const { loaded } = this.state
    const { src, alt, className, ...props } = this.props

    return (
      <img
        className={`Img${loaded ? ` loaded` : ``}${className ? ` ${className}`: ``}`}
        src={src}
        alt={alt}
        {...props} />
    )
  }
}

export default Img
