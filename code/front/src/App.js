import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Alert} from 'reactstrap';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p> Edit <code>src/App.js</code> and save to reload.</p>

                </header>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Bienvenidos a casa
                </a>
                <div>
                    <Alert color="primary">Adding new features</Alert>
                </div>
            </div>
        );
    }
}

export default App;
