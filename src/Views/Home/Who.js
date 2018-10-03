import React, { Component } from 'react';
import { 
    Container 
  , Row, Col 
//   , Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle
//   , Button
//   , ListGroup, ListGroupItem
} from 'reactstrap';

const items = [
    {
        title: 'WHO SHOULD EXHIBIT?', 
        items: [
            'Cosmetics',
            'Products for beauty salon & SPA',
            'Products for hair salon',
            'Beauty device & equipment',
            'Beauty products & accessories',
        ]
    }
    , {
        title: 'WHO YOU CAN MEET', 
        items: [
            'Beauty salon & spa owners',
            'Importers',
            'Retailers (ofﬂine, on-line)',
            'Associations',
            'Government bodies',
        ]
    }
    , {
         title: 'BENEFITS FOR EXHIBITORS', 
         items: [
            'Business matched meetings',
            'Distributors and retailer network day',
            'Product registration service',
            'Product demonstration on stage',
            'New product showcase',
        ]
    }
];


class Who extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
        <section id="home-who" style={{
            background: '#5600b5',
            color: '#fff'
        }}>
            <Container>
                <Row>
                    {items.map((val, i) => {
                        return ( 
                            <div key={i} className="col-xs-12 col-md-4">
                                    <div className="home-who-box">
                                        <div className="p-3 mt-5 mb-2">
                                            <h3 className="text-center mb-2 color-2">{val.title}</h3>
                                            <ul>
                                                {val.items.map((value, key) => {
                                                    return <li key={key} className="home-who-item">
                                                       <i className="fa fa-chevron-circle-right mr-2"></i>
                                                        <span className="text">{value}</span>
                                                    </li>
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                            </div>
                        )
                    })}
                </Row>
            </Container>


            <Container>
                <Row>
                    <div className="col-xs-12 col-md-4">
                        <div className="p-3 mt-2 mb-5">
                            <div style={{
                                background: '#fff',
                                height: 150,
                                color: '#5600b5'
                            }}>
                                <div className="d-table w-100 h-100">
                                    <div className="d-table-cell align-middle text-center text-uppercase" style={{
                                            fontSize: 18,
                                            fontWeight: 400
                                        }}>
                                        <div>Show Space</div>
                                        <div style={{
                                            fontSize: 40,
                                            fontWeight: 700
                                        }}>4,300</div>
                                        <div>SQM</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-4">
                        <div className="p-3 mt-2 mb-5">
                            <div style={{
                                background: '#fff',
                                height: 150,
                                color: '#5600b5'
                            }}>
                                <div className="d-table w-100 h-100">
                                    <div className="d-table-cell align-middle text-center text-uppercase" style={{
                                            fontSize: 18,
                                            fontWeight: 400
                                        }}>
                                        <div>Participation of over</div>
                                        <div style={{
                                            fontSize: 40,
                                            fontWeight: 700
                                        }}>200</div>
                                        <div>Companies</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-4">
                         <div className="p-3 mt-2 mb-5">
                            <div style={{
                                background: '#fff',
                                height: 150,
                                color: '#5600b5'
                            }}>
                                <div className="d-table w-100 h-100">
                                    <div className="d-table-cell align-middle text-center text-uppercase" style={{
                                            fontSize: 24,
                                            fontWeight: 400
                                        }}>
                                        <div>Don't Miss Your</div>
                                        <div>Golden Opportunity</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
            
        </section>
    );
  }
}


export default Who;