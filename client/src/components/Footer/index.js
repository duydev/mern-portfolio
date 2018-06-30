import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import moment from 'moment'

const Footer = () => {
  return (
    <footer>
      <Grid>
        <Row>
          <Col md={12}>
            {moment().format('Y')} &copy; Make with{' '}
            <span style={{ color: 'red' }}>❤</span> Trần Nhật Duy
          </Col>
        </Row>
      </Grid>
    </footer>
  )
}

export default Footer
