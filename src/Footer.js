import React from 'react';
import {
    Grid,
    Row,
    Col,
} from 'react-bootstrap';
import './Footer.css';
import FontAwesome from 'react-fontawesome';

const Footer = (props) => {
    return (
        <Grid fluid className="footer">
            <Row>
                <Col xs={12} className="text-center">
                    <FontAwesome name="facebook-square" />&nbsp;
                    <FontAwesome name="instagram" /> &nbsp;
                    <FontAwesome name="twitter" />
                </Col>
            </Row>
            <Row>
                <Col xs={12} className="text-center">
                    Desenvolvido por <a href="https://github.com/joaopedrofn">Joaopedrofn</a>. 2018.
                </Col>
            </Row>
        </Grid>
    );
}


export default Footer;