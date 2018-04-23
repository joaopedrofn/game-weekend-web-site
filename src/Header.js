import React from 'react';
import './Header.css';
import logo from './logo.png';
import univasfLogo from './univasf-logo.png';
import { Grid, Row, Col } from 'react-bootstrap';

const Header = (props) => {
    return (
        <Grid fluid className="header">
            <Row>
                <Col md={1} > <img src={logo} alt="Logo" className="logo" /></Col>
                <Col md={5} ><span className="title">Game Weekend</span></Col>
                <Col md={4} className="text-right date">&#8212; XX/YY/ZZZZ</Col>
                <Col md={2} className="text-right"><img src={univasfLogo} className="logo"/></Col>
            </Row>
        </Grid>
    );
}


export default Header;