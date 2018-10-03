import React, { Component } from 'react';
import { Badge, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink } from 'reactstrap';
import PropTypes from 'prop-types';

import MultiLanguagesURL from 'multi-languages-url';

// import { AppAsideToggler, AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
// import logo from '../../assets/img/brand/logo.svg'
// import sygnet from '../../assets/img/brand/sygnet.svg'

// Translation Higher Order Component
import { setTranslations, setDefaultLanguage, translate } from 'react-multi-lang';
import th from '../../Lang/th.json';
import { t } from 'react-multi-lang';

// Do this two lines only when setting up the application
setTranslations({th});
setDefaultLanguage('th');

const ml = new MultiLanguagesURL({languages: ['th']});

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
    // const { match } = this.props;
    const { children, ...attributes } = this.props;
    console.log( children );

    return (
      <React.Fragment>
        This Header

        <nav>
        <a href={ml.url('/blog')}>Blog</a>
        </nav>
        
        <div>Translation: home.Title => {t('Home')}</div>
        
      </React.Fragment>
    );
  }
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default translate(Header);