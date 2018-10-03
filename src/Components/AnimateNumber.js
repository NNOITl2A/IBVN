import React, { Component } from 'react';
import AnimatedNumber from 'react-animated-number';

class AnimateNumber extends Component {
    
    
    render () {
        <AnimatedNumber component="text" value={bigValue}
            style={{
                transition: '0.8s ease-out',
                fontSize: 48,
                transitionProperty:
                    'background-color, color, opacity'
            }}
            frameStyle={perc => (
                perc === 100 ? {} : {backgroundColor: '#ffeb3b'}
            )}
            duration={300}
            formatValue={n => prettyBytes(n)}/>
    }
    
  }
  
  
  export default AnimateNumber;