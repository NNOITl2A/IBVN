import React, { Component } from 'react';
import { Nav, NavItem, NavLink, Progress, TabContent, TabPane, ListGroup, ListGroupItem } from 'reactstrap';
import PropTypes from 'prop-types';


const propTypes = {
    children: PropTypes.node,
  };
  
  const defaultProps = {};
  
  class Aside extends Component {
  
    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        activeTab: '1',
      };
    }
  
    toggle(tab) {
      if (this.state.activeTab !== tab) {
        this.setState({
          activeTab: tab,
        });
      }
    }
  
    render() {
        // eslint-disable-next-line
        const { children, ...attributes } = this.props;

        return (
            <nav>This Aside</nav>
        );
    }
  }
  
  Aside.propTypes = propTypes;
  Aside.defaultProps = defaultProps;
  
  export default Aside;