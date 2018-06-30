import React, { Component } from 'react'
import { Grid, Row, Col, Image, Button } from 'react-bootstrap'
import { connect } from 'react-redux'

import { fetchAvatar } from '../../actions/header'

class Header extends Component {
  componentDidMount() {
    this.props.dispatch(fetchAvatar(this.props.email))
  }

  render() {
    const { fullName, description, avatarUrl } = this.props

    return (
      <header>
        <Grid>
          <Row>
            <Col md={12}>
              <Image src={avatarUrl} circle />
              <div className="about">
                <div>Hello, my name is</div>
                <h2>{fullName}</h2>
                <div className="des">{description}</div>
                <Button>My CV</Button>
              </div>
            </Col>
          </Row>
        </Grid>
      </header>
    )
  }
}

const mapStateToProps = state => ({
  fullName: state.header.fullName,
  email: state.header.email,
  description: state.header.description,
  email: state.header.email,
  avatarUrl: state.header.avatarUrl,
  loading: state.header.loading,
  error: state.header.error
})

export default connect(mapStateToProps)(Header)
