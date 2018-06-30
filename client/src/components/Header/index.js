import React from 'react'
import { Grid, Row, Col, Image, Button } from 'react-bootstrap'

const Header = () => {
  return (
    <header>
      <Grid>
        <Row>
          <Col md={12}>
            <Image
              src="https://media.licdn.com/dms/image/C4E03AQFB1Bjdomws2Q/profile-displayphoto-shrink_200_200/0?e=1535587200&v=beta&t=zDkhZyGe8DsELe4AyyUNyUixxNvJh7_r_-vJL7m5QoE"
              circle
            />
            <div className="about">
              <div>Hello, my name is</div>
              <h2>Trần Nhật Duy</h2>
              <div className="des">
                I'm a fullstack developer. I love to build awesome product.
              </div>
              <Button>My CV</Button>
            </div>
          </Col>
        </Row>
      </Grid>
    </header>
  )
}

export default Header
