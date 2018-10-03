import React, { Component } from 'react';
import { 
    Container 
  , Row, Col 
//   , Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle
//   , Button
//   , ListGroup, ListGroupItem
} from 'reactstrap';

import image_right from '../../assets/images/home/about/right-cover.jpg';
import homeAboutCover from '../../assets/images/home/about/4681-d71583f153b.jpg';

class About extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <section id="home-about" className="home-about module-outer" style={{
            // backgroundImage: "url(" + { homeAboutCover } + ")",
            backgroundImage: `url(${homeAboutCover})`,
        }}>
            <Container>
                <Row className="no-gutters">
                    <div className="col-xs-12 col-md-7 left">
                        <div className=" home-about-box">
                            <div className="d-table h-100">
                                <div className="d-table-cell align-middle text-left">
                            
                                    <h2>WHY HANOI?</h2>
                                    <p>As one of the fastest-growing tourist destinations in Vietnam, Hanoi remains the most popular city for both domestic and international visitors. Because of good location and connectivity to neighboring countries, Hanoi trading opportunities are extremely convenient, either for domestic or international route. NOW is a good time to penetrate Hanoi and the Vietnam North Region market.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <Col xs="5" className="right" style={{
                        minHeight: 300,
                        overflow: 'hidden'
                    }}>
                        <figure className="hero bg-purple in-view" data-animate-in="fade" data-animate-in-delay="400"><img className="img-full" src={image_right} alt="" /></figure>
                    </Col> */}
                </Row>
            </Container>
        </section>
    );
  }
}

export default About;