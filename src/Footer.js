import React from 'react';
import {
    Grid,
    Row,
    Col,
} from 'react-bootstrap';
import './Footer.css';
import FontAwesome from 'react-fontawesome';
import univasf from './img/univasf-logo.png';

const Footer = (props) => {
    return (
        <Grid fluid className="footer">
            <Row>
                <div className="col align-self-center text-center">
                    <FontAwesome name="facebook-square" />&nbsp;
                    <FontAwesome name="instagram" /> &nbsp;
                    <FontAwesome name="twitter" />
                </div>
            </Row>
            <Row>
                <div className="col align-self-center text-center">
                    Desenvolvido por <a href="https://joaopedrofn.github.io/">Joaopedrofn</a>. 2018.
                </div>
            </Row>
            <Row>
                <div className="col align-self-center text-center">
                    <a href="http://portais.univasf.edu.br">
                        <img src={univasf} alt="UNIVASF" width="200"/>
                    </a>
                </div>
            </Row>
        </Grid>
    );
}


export default Footer;