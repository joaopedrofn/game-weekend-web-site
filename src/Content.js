import React, { Component } from 'react';
import { 
    Grid, 
    Row , 
    Col, 
    Thumbnail
} from 'react-bootstrap';
import './Content.css';
import Sponsors from './Sponsors';

export default class Content extends Component {
    render() {
        return (
            <Grid className="content">
                <Sponsors />
            </Grid>
        );
    }
}