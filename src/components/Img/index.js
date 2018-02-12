import React, { Component } from 'react'
import classNames from 'classnames'
import './styles.css'

const Status = {
  PENDING: 'pending',
  LOADING: 'loading',
  LOADED: 'loaded',
  FAILED: 'failed',
}

class Img extends Component {

  constructor(props) {
    super(props)
    this.state = {
      status: props.src
        ? Status.LOADING
        : Status.PENDING
    }
    this.img = null
  }

  componentDidMount() {
    if (this.state.status === Status.LOADING) {
      this.load()
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.src !== nextProps.src) {
      this.setState({
        status: nextProps.src ? Status.LOADING : Status.PENDING,
      })
    }
  }

  componentDidUpdate() {
    if (this.state.status === Status.LOADING && !this.img) {
      this.load()
    }
  }

  componentWillUnMount() {
    this.destroyLoader()
  }

  load() {
    this.destroyLoader()

    this.img = new Image()
    this.img.onload = this.handleLoad.bind(this)
    this.img.onerror = this.handleError.bind(this)
    this.img.src = this.props.src
  }

  destroyLoader() {
    if (this.img) {
      this.img.onload = null
      this.img.onerror = null
      this.img = null
    }
  }

  handleLoad() {
    this.setState({ status: Status.LOADED })
  }

  handleError() {
    this.setState({ status: Status.FAILED })
  }

  render() {
    const { status } = this.state
    const { src, alt, className, ...props } = this.props
    const cx = classNames('Img', status, className)

    switch (status) {
      case Status.LOADED:
        return (
          <img
            className={cx}
            src={this.img.src}
            alt={alt}
            {...props}
          />
        )
      default:
        return <span className={cx} />
    }
  }
}

export default Img
