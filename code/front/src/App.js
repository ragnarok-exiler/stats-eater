import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';


class App extends Component {
    constructor() {
        super();
        this.state = {
            test: {},
        };
        this.getTokenUrl();

    }

    getTokenUrl() {
        const url = 'http://stats-api/api/paladins/Especial';
        axios.get(url)
            .then(
                res => {
                    this.setState({test: res.data});
                }
            );
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to Reacting</h1>
                </header>
                <p className="App-intro"> To get started, edit <code>src/App.js</code> and save to reload.</p>
                <p>The CreateSession Url is: {this.state.test.token}</p>
                <button content="asdasdsa">kl</button>
            </div>
        );
    }
}

export default App;
