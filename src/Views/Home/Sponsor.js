import React, { Component } from 'react';
import { 
    Container 
  , Row, Col 
//   , Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle
//   , Button
//   , ListGroup, ListGroupItem
} from 'reactstrap';


import image from '../../assets/images/sponsor/logo-gec.png';
// images: ['./dist/images/a-1.png', './dist/images/a-2.jpg', './dist/images/a-3.png', './dist/images/a-4.png', './dist/images/logo-gec.png']


class Sponsor extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <section id="home-sponsor">
            <Container>
              <Row>
                <Col className="p-5">

                  <div className="text-center" style={{margin: 36}}><span className="bold">Organize</span> by <img src={image} width="120" /></div>
                
                </Col>
              </Row>
            </Container>
        </section>
    );
  }
}

export default Sponsor;