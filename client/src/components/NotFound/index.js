import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { Helmet } from 'react-helmet'

const NotFound = () => {
  return (
    <div>
      <Helmet>
        <title>Page Not Found</title>
      </Helmet>
      <Grid>
        <Row>
          <Col>
            <h2>Oops... Page Not Found!</h2>
          </Col>
        </Row>
      </Grid>
    </div>
  )
}

export default NotFound
