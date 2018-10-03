import React, { Component } from 'react';
import { 
      Container
    , Nav, NavItem 
    , Row, Col
    , Dropdown, DropdownToggle, DropdownMenu, DropdownItem

} from 'reactstrap';
import { Link } from "react-router-dom";
// import FlagIcon from '../../Components/FlagIcon';
import logo from '../../assets/images/logo.svg';
import logoWhite from '../../assets/images/logo-white.svg';

// Badge, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink 

const css = {
    header: 'web-header fixed',
};

const header = {
    header: css.header,
    scrolled: 'is-scrolling',
};

class Header extends Component {

    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: false
        };
        this._body = document.body;
    }

    componentDidMount () {
        this._bindScroll();

        document.getElementById("menu-trigger").addEventListener("click", this.displayMenu);
    }
    componentWillUnmount () {
        this._unbindScroll();

    }
    _bindScroll = () => {
        // Use passive event listener if available
        let supportsPassive = false
        try {
            const opts = Object.defineProperty({}, 'passive', {
                get: () => {
                    supportsPassive = true
                },
            })
            window.addEventListener('test', null, opts)
        }
        catch (e) {} // eslint-disable-line no-empty

        window.addEventListener(
            'scroll',
            this._handleScroll,
            supportsPassive ? { passive: true } : false
        )
    }
    _unbindScroll = () => {
        window.removeEventListener('scroll', this._handleScroll)
    }
    _handleScroll = () => {

        // Ugly cross-browser compatibility
        const top = document.documentElement.scrollTop
          || document.body.parentNode.scrollTop
          || document.body.scrollTop
    
        // Test < 1 since Safari's rebound effect scrolls past the top
        
        if (top < 1) {
          const className = `${header.header}`
          this._header.className = className;
          this._logo.src = logoWhite;
        }
        else {
          const className = `${header.header} ${header.scrolled}`
          this._header.className = className;
          this._logo.src = logo;
        }
    }
    

    toggle() {
        this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
        }));
    }


    displayMenu( evt ) {

        var body = document.getElementsByTagName("body")[0];
        if( body.className.match('has-menu') ){
          body.classList.remove("has-menu");
        }
        else{
          body.classList.add("has-menu");
        }
    }

    render() {
        
      return (
        <header 
            id="web-header"
            className={css.header}
            ref={(ref) => {
                this._header = ref
            }}
        >
            
            <Container className="h-100">
                <Row>
                    <Col xs="auto">

                        <h1 className="web-logo ml-3">
                       
                            <Link to="/"><img 
                                src={logoWhite} 
                                alt=""
                                ref={(ref) => {
                                    this._logo = ref
                                }}    
                            /> </Link>
                        </h1>
                    </Col>

                    <Col id="global-actions">
                        
                        <Nav className="web-menu">
                            { this.props.routes.map((val, key)=>{

                               return val.path!='/' && !val.backend && !val.more
                                    ? <NavItem key={key} className={val.items && 'has-sup' }>
                                            
                                        <Link className="link" to={val.link?val.link:val.path}>
                                            <span>{val.name}</span>

                                            { val.items && <i className="fa fa-angle-down ml-1"></i> }
                                        </Link>
                                        
                                        { val.items && <ul className="sup">
                                            {val.items.map((value, i) => {
                                            return <li key={i}><Link className="link" to={value.link?value.link:value.path}>{value.name}</Link></li>
                                            })}
                                        </ul> }
                                    </NavItem>
                                    : (null)
                            }) }
                            
                            {/* <NavItem>
                                <Dropdown className="change-languages" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                    <DropdownToggle tag="a" className="link" caret>More</DropdownToggle>
                                    <DropdownMenu right>

                                        { this.props.routes.map((val, key)=>{

                                        return val.more
                                            ? <DropdownItem key={key}>
                                                <Link className="link" to={val.link?val.link:val.path}>{val.name}</Link>
                                            </DropdownItem>
                                            : (null)
                                        }) }
                                    </DropdownMenu>
                                </Dropdown>
                            </NavItem> */}
                        </Nav>
                    </Col>
                    <Col xs="auto">
                        <Nav id="" className="web-menu">
                            <NavItem>
                                <Link className="link" to="/"><span>English</span><i className="fa fa-angle-down ml-1"></i></Link>
                                <ul className="sup right">
                                    <li><Link className="link" to="/vn">Tiếng Việt</Link></li>
                                </ul>
                                {/* <Dropdown className="change-languages" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                    <DropdownToggle tag="a" className="link" caret>English</DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem tag="a">Tiếng Việt</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown> */}
                            </NavItem>
                        </Nav>
                    </Col>
                    <Col xs="auto" className="menu-trigger-wrap">
                        <button type="button" id="menu-trigger" className="menu-trigger"></button>
                    </Col>
                    
                </Row>
            </Container>
        </header>
      );
    }
}
 
// Header.propTypes = propTypes;
// Header.defaultProps = defaultProps;
  
  export default Header;