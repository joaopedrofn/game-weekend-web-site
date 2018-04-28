import React from 'react';
import './Header.css';
import logo from './img/logo.png';
import univasfLogo from './img/univasf-logo.png';
import { Grid, Row, Col, Navbar, NavItem, Nav } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

const Header = (props) => {
    return (
        <Grid fluid className="header">
            <Row>
                <Col md={12}>
                <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top">
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-toggle="collapse" 
                        data-target="#navbar" 
                        aria-controls="navbar" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                    >
                        <FontAwesome name="bars" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbar">
                        <ul className="navbar-nav mx-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Sobre
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Programacao</a>
                            </li> 
                            <li className="nav-item">
                                <a className="nav-link" href="#">Local</a>
                            </li> 
                            <li className="nav-item">
                                <a className="nav-link" href="#">Fotos</a>
                            </li> 
                            <li className="nav-item">
                                <a className="nav-link" href="#">Certificados</a>
                            </li> 
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contato</a>
                            </li> 
                            <li className="nav-item">
                                <a className="nav-link" href="#">Login</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                </Col>
            </Row>
            <Row>
                <Col md={12}  className="text-center"> 
                    <img src={logo} alt="Logo" className="logo"/>
                </Col>
            </Row>
            <Row>
                <Col md={12} className="text-center date">
                    XX de Agosto de 2018<br />Juazeiro
                </Col>
            </Row>
            
            {/* <Row className="text-center menu">
                <Col xs={2}>Sobre</Col>
                <Col xs={2}>Programação</Col>
                <Col xs={2}>Local</Col>
                <Col xs={2}>Fotos</Col>
                <Col xs={2}>Certificados</Col>
                <Col xs={2}>Contato</Col>
            </Row> */}
        </Grid>
    );
}


export default Header;