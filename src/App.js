import React from 'react';
import './App.css';
import Login from './components/Login'
import './QuoteGenerator.css';
import Nav from './components/Nav'
import {store} from './Redux/store'
import { Provider } from 'react-redux';

const App = () => {
  return (
    // <Provider store = {store}>
    //     <div>
    //       <Nav/>
    //     </div>
    // </Provider>

    <Login/>
    
  );
}
   
 

export default App;


