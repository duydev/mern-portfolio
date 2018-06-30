import React, { Component } from 'react'
import { Image } from 'react-bootstrap'
import { connect } from 'react-redux'

import { fetchAvatar } from '../../actions/header'

class Avatar extends Component {
  componentDidMount() {
    this.props.dispatch(fetchAvatar(this.props.email))
  }

  render() {
    const { avatarUrl } = this.props
    return <Image src={avatarUrl} circle />
  }
}

const mapStateToProps = state => ({
  email: state.header.email,
  avatarUrl: state.header.avatarUrl
})

export default connect(mapStateToProps)(Avatar)
