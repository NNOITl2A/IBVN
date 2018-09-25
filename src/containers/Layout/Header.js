import React, { Component } from 'react';
import { Badge, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink } from 'reactstrap';
import PropTypes from 'prop-types';

// import { AppAsideToggler, AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
// import logo from '../../assets/img/brand/logo.svg'
// import sygnet from '../../assets/img/brand/sygnet.svg'

// Translation Higher Order Component
import { setTranslations, setDefaultLanguage, translate } from 'react-multi-lang';
import th from '../../Lang/th.json';
import en from '../../Lang/en.json';
import { t } from 'react-multi-lang';

// Do this two lines only when setting up the application
setTranslations({th, en});
setDefaultLanguage('en');


const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class Header extends Component {

  constructor(props){
    super(props);
    
    this.state = {
        status: '',
        currentLanguage: 0,
    };
  }

  render() {
    // console.log( Translate );
    // eslint-disable-next-line
    const { children, ...attributes } = this.props;
    // const { activeIndex } = this.state;
    // const { translate } = this.props;

    return (
      <React.Fragment>
        This Header

        <div>Translation: home.Title => {t('home.Title')}</div>
        
      </React.Fragment>
    );
  }
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default translate(Header);