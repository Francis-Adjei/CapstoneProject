import React, { Component } from 'react';
import './App.css';
import './QuoteGenerator.css';
import Nav from './components/Nav'
import QuoteGenerator from './components/QuoteGenerator'
import Login from './components/Login'

class App extends Component {
  render() {
    return (
      <div>
       <Nav/>
      </div>
    );
  }
}

export default App;


