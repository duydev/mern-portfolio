import React from 'react'
import { Grid, Row, Col, Button } from 'react-bootstrap'
import { connect } from 'react-redux'

import Avatar from './avatar'

const About = props => {
  const { fullName, description } = props

  return (
    <div className="about-me">
      <Grid>
        <Row>
          <Col md={12}>
            <Avatar />
            <div className="about">
              <div>Hello, my name is</div>
              <h2>{fullName}</h2>
              <div className="des">{description}</div>
              <Button>Download My CV</Button>
            </div>
          </Col>
        </Row>
      </Grid>
    </div>
  )
}

const mapStateToProps = state => ({
  fullName: state.header.fullName,
  description: state.header.description
})

export default connect(mapStateToProps)(About)
