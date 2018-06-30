import React from 'react'
import { Helmet } from 'react-helmet'
import { Grid, Row, Col } from 'react-bootstrap'

const About = () => {
  return (
    <div>
      <Helmet>
        <title>About Me</title>
      </Helmet>
      <Grid>
        <Row>
          <Col md={9}>Main</Col>
          <Col md={3}>Sidebar</Col>
        </Row>
      </Grid>
    </div>
  )
}

export default About
