import React from 'react';
import './App.css';
import Login from './components/Login'
import ForgetPassword from './components/ForgetPassword'
import './QuoteGenerator.css';
import Nav from './components/Main'
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
    // <ForgetPassword/>
    
  );
}
   
 

export default App;


