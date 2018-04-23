import React, { Component } from 'react';
import { Grid, Row , Col} from 'react-bootstrap';

export default class Content extends Component {
    render() {
        return (
            <Grid className="content">
                <Row>
                    <Col xs={12}>
                        Teste
                    </Col>
                </Row>
            </Grid>
        );
    }
}