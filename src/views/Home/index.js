import React, { Component } from 'react';
import { 
      Container 
    , Row, Col 
    , Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle
    , Button
    , ListGroup, ListGroupItem
} from 'reactstrap';




import Banner from "./Banner";
import About from "./About";
import Who from "./Who";
import Highlight from "./Highlight";
import Gallery from "./Gallery";
import Sponsor from "./Sponsor";

// import { url } from 'inspector';
class Home extends Component {

    constructor(props) {
      super(props);
    }
    
    render() {
        return (
            <React.Fragment>

                <Banner />
                
                <About />
    
                <Who />

                <Highlight />

                <Gallery />

                <Sponsor />

            </React.Fragment>
        );
    }
}

export default Home;