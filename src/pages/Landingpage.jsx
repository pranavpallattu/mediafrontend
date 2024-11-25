import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';



function Landingpage() {
  return (
    <>
      <Container className='mt-5'>
        <Row className='d-flex justify-content-center align-items-center mt-5'>
          <Col sm={12} md={6}>
            <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
            <p style={{ textAlign: 'justify' }} className='mt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius illum sint non voluptas suscipit qui tempora culpa obcaecati, unde praesentium, aspernatur nulla nobis aliquam alias deserunt distinctio perferendis fugiat esse. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor assumenda, blanditiis ratione unde, necessitatibus nam porro perspiciatis soluta ut doloribus maiores obcaecati. Ipsum facere doloribus accusantium magnam possimus voluptatibus cumque.</p>
            <Link to='/home'><button className='btn btn-warning mt-4'>Get Started</button></Link>
          </Col>
          <Col sm={12} md={6} className='d-flex justify-content-center'>
            <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWN8ZW58MHx8MHx8fDA%3D" alt="no image" className='w-100' />
          </Col>
        </Row>
      </Container>


      <div className="container-fluid mt-5">
        <div className="row mt-5">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <h4 className='text-center'>Features</h4>
            <div className="row mt-5">
              <div className="col-md-4">
                <Card style={{ width: '100%' }} className='p-3'>
                  <Card.Img variant="top" src="https://booksparks.com/wp-content/uploads/2018/04/dance-party-dancing-GIF-downsized-1.gif" className='w-100' height={'300px'} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-md-4">
                <Card style={{ width: '100%' }} className='p-3'>
                  <Card.Img variant="top" src="https://media.tenor.com/i2c_6CcJfTYAAAAM/champagne-poppin.gif" className='w-100' height={'300px'} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card></div>
              <div className="col-md-4">
                <Card style={{ width: '100%' }} className='p-3'>
                  <Card.Img variant="top" src="https://i.gifer.com/origin/86/86f539a0be45c7e13c2d2df398a89e99_w200.gif" className='w-100' height={'300px'} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
          <div className="col-md-2">

          </div>
        </div>
      </div>

      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10 border border-2 border-light p-4">
            <div className="row">
              <div className="col-md-6">
                <h3 className='text-warning'>Simple Fast and Powerful</h3>
                <p><span style={{ fontSize: '25px', fontWeight: 'bolder' }}>Play Everything</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa natus quis aperiam voluptates, dolore accusantium a reprehenderit excepturi et ipsum! Excepturi ipsa obcaecati, iste ducimus facere perspiciatis voluptates vero quam!</p>
                <p><span style={{ fontSize: '25px', fontWeight: 'bolder' }}>Play Everything</span> : Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus excepturi, sunt perspiciatis voluptatum ex in quas vel adipisci nisi ratione? Dignissimos itaque corporis numquam quibusdam architecto cum, autem minima quam.</p>
                <p><span style={{ fontSize: '25px', fontWeight: 'bolder' }}>Play Everything</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa natus quis aperiam voluptates, dolore accusantium a reprehenderit excepturi et ipsum! Excepturi ipsa obcaecati, iste ducimus facere perspiciatis voluptates vero quam!</p>

              </div>
              <div className="col-md-6 d-flex justify-content-center">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/lM8h5Mm6ODo?si=ApMRm4o33601xH2P" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    </>
  )
}

export default Landingpage