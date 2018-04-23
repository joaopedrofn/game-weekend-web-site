import React, { Component } from 'react';
import { 
    Grid, 
    Row , 
    Col, 
    Thumbnail,
    InputGroup,
    FormControl,
    Button
} from 'react-bootstrap';
import './Content.css';
import Sponsors from './Sponsors';
import FontAwesome from 'react-fontawesome';

export default class Content extends Component {
    render() {
        return (
            <Grid className="content">
                <Sponsors />
                <Row>
                    <Col md={6}>
                    <h2>Lorem Ipsum</h2>
                    <p>Exercitation voluptate consectetur deserunt id irure 
                        anim. Culpa nisi aute in est. Nisi nisi mollit officia 
                        incididunt. Exercitation cupidatat cillum ad id fugiat. 
                        Tempor aute sunt commodo in adipisicing qui duis nulla 
                        ipsum incididunt voluptate velit. Officia amet dolore 
                        dolor nulla ut nisi id duis mollit labore dolore aute 
                        eiusmod qui.</p>
                    <h2>Lorem Ipsum</h2>
                    <p>Enim aliqua duis commodo anim pariatur veniam sunt ex sit 
                        aute cupidatat id cupidatat. Nostrud excepteur cillum 
                        est ad ut do ullamco aliqua sint ea nostrud laborum 
                        incididunt. Et labore aliquip do cupidatat veniam 
                        proident veniam sit.</p>
                    <h2>Lorem Ipsum</h2>
                    <p>Consectetur culpa aute qui dolor nulla. Occaecat cillum 
                        do consequat ipsum. Eiusmod esse Lorem elit pariatur eu 
                        non.</p>
                    <h2>Lorem Ipsum</h2>
                    <p>Id dolor Lorem officia et qui nulla ea cillum eiusmod 
                        officia consectetur consectetur in labore. Qui aute 
                        dolore sunt duis id. Officia nisi pariatur amet dolore 
                        nisi quis sint sint est dolore consectetur. 
                        Eu non occaecat irure incididunt Lorem voluptate labore 
                        aliqua quis adipisicing.</p>
                    </Col>
                    <Col md={6}>
                        <h2>Inscrição individual</h2>
                        <form>
                            <p><InputGroup>
                                <InputGroup.Addon>
                                    &nbsp;<FontAwesome name="user" />&nbsp;
                                </InputGroup.Addon>
                                <FormControl type="text" placeholder="Nome" />
                            </InputGroup></p>
                            <p><InputGroup>
                                <InputGroup.Addon>
                                &nbsp;<FontAwesome name="envelope-open" />
                                </InputGroup.Addon>
                                <FormControl type="email" placeholder="E-mail" />
                            </InputGroup></p>
                            <p><InputGroup>
                                <InputGroup.Addon>
                                <FontAwesome name="id-card" />
                                </InputGroup.Addon>
                                <FormControl type="text" placeholder="CPF" />
                            </InputGroup></p>
                            <p><InputGroup>
                                <InputGroup.Addon>
                                <FontAwesome name="key" />
                                </InputGroup.Addon>
                                <FormControl type="password" placeholder="Senha" />
                            </InputGroup></p>
                            <Button bsStyle="success" bsSize="large">Inscrever</Button>
                        </form>
                        <h2>Inscrição Game Jam (Grupo)</h2>
                        <Button bsStyle="warning" bsSize="large" block>Incrição</Button>
                    </Col>
                </Row>
            </Grid>
        );
    }
}