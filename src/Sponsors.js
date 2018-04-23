import React from 'react';
import {
    Row,
    Thumbnail,
    Col,
} from 'react-bootstrap';
import './Sponsors.css';
import logo from './logo.png';

const Sponsors = (props) => {
    return (
        <Row className="sponsors">
            <Col xs={4} >
                <Thumbnail className="right-caption">
                    <img src={logo} className="img-thumbnail"/> 
                    <div className="caption">
                        <h4>Patrocinador 1</h4>
                        <p>Um belo patrocinador!</p>
                    </div>
                </Thumbnail>
            </Col>
            <Col xs={4} >
                <Thumbnail className="right-caption">
                    <img src={logo} className="img-thumbnail"/> 
                    <div className="caption">
                        <h4>Patrocinador 2</h4>
                        <p>Um belo patrocinador!</p>
                    </div>
                </Thumbnail>
            </Col>
            <Col xs={4} >
                <Thumbnail className="right-caption">
                    <img src={logo} className="img-thumbnail"/> 
                    <div className="caption">
                        <h4>Patrocinador 3</h4>
                        <p>Um belo patrocinador!</p>
                    </div>
                </Thumbnail>
            </Col>
        </Row>
    );
}


export default Sponsors;