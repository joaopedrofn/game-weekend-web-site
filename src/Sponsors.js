import React from 'react';
import {
    Row,
    Thumbnail,
    Col,
} from 'react-bootstrap';
import './Sponsors.css';
import unity from './img/unity-logo.png';
import pepsico from './img/pepsico-logo.png';
import padaria from './img/padaria-logo.png';
import cnpq from './img/cnpq-logo.png';

const Sponsors = (props) => {
    return (
        <Row className="sponsors">
            <div className="card-group">
                <div className="card h-100 justify-content-center align-items-center">
                    <img src={unity} className="card-img-top"/>
                    {/*<div className="card-body">
                        <h5 className="card-title">Patrocinador 1</h5>
                        <p className="card-text">Um belo patrocinador!</p>
    </div>*/}
                </div>
                <div className="card h-100 justify-content-center align-items-center">
                    <img src={pepsico} className="card-img-top align-middle"/>
                    {/*<div className="card-body">
                        <h5>Patrocinador 2</h5>
                        <p>Um belo patrocinador!</p>
    </div>*/}
                </div>
                <div className="card h-100 justify-content-center align-items-center">
                    <img src={padaria} className="card-img-top"/>
                    {/*<div className="card-body">
                        <h5>Patrocinador 3</h5>
                        <p>Um belo patrocinador!</p>
    </div>*/}
                </div>
                <div className="card h-100 justify-content-center align-items-center">
                    <img src={cnpq} className="card-img-top"/>
                    {/*<div className="card-body">
                        <h5>Patrocinador 4</h5>
                        <p>Um belo patrocinador!</p>
    </div>*/}
                </div>
            </div>
        </Row>
    );
}


export default Sponsors;