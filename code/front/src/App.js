import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Alert, Container, Row, Col} from 'reactstrap';

class App extends Component {
    render() {
        return (
            <div className="App">
                {/*<header className="App-header">*/}
                {/*    <img src={logo} className="App-logo" alt="logo"/>*/}
                {/*    <p> Edit <code>src/App.js</code> and save to reload. </p>*/}
                {/*    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">*/}
                {/*        Learn React*/}
                {/*    </a>*/}
                {/*</header>*/}
                <Container fluid={true}>
                    <Row>
                        <Col>
                            <Alert color="primary">asdsad</Alert>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default App;
