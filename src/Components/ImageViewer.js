
import React, { Component } from 'react';
import Viewer from 'react-viewer';
import 'react-viewer/dist/index.css';

import m2 from '../assets/images/slide-banner/m2.jpg';
import m1 from '../assets/images/slide-banner/n2.jpg';


const items = [
    {src: m2, alt: ''},
    {src: m1, alt: ''},
];

class ImageViewer extends Component {
    
    constructor() {
      super();
  
      this.state = {
        visible: false,
      };
    }
  
    render() {
      return (
        <div>
          <button onClick={() => { this.setState({ visible: !this.state.visible }); } }>show</button>

          <Viewer
            visible={this.state.visible}
            onClose={() => { this.setState({ visible: false }); } }
            images={items}
            noFooter={true}
            drag={false}
            rotatable={false} // หมุน

            noImgDetails={true}
            changeable={false} // เปลี่ยนได้
            scalable={false} // สามารถปรับขนาดได้
            // noClose={true}

            zoomable={true}
            noToolbar={true}
            noNavbar={false}

            zoomSpeed={0.1}

            // onMaskClick={() => { this.setState({ visible: false }); }}
            // customToolbar=

            activeIndex={1}
          />
        </div>
      );
    }
  }

  export default ImageViewer;