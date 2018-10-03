import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import Banner from "../Home/Banner";
import Sponsor from "../Home/Sponsor";

class News extends Component {
    constructor(props) {
      super(props);
    }

    render() {
        console.log( this.props.match.params );

        return (
            <React.Fragment>
                <Banner />
                
                <Sponsor />
            </React.Fragment>
        );
    }
}

export default News;