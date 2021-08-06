import React, { Component } from 'react';
import './App.css';
import './QuoteGenerator.css';
import Nav from './components/Nav'
import {store} from './Redux/store'
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store = {store}>
        <div>
          <Nav/>
        </div>
    </Provider>
    
  );
}
   
 

export default App;


