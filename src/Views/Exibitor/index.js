import React, { Component } from 'react';

import Banner from "../Home/Banner";
import Sponsor from "../Home/Sponsor";

class Exibitor extends Component {
    constructor(props) {
      super(props);
  
    }

    render() {

        return (
            <React.Fragment>
                <Banner />
                

                <Sponsor />
            </React.Fragment>
            
        );
    }
}

export default Exibitor;