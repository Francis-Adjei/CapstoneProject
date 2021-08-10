import React from 'react';
import './App.css';
import Login from './components/Login'
import ForgetPassword from './components/ForgetPassword'
import './QuoteGenerator.css';
import Main from './components/Main'

import {BrowserRouter, Route, Switch} from 'react-router-dom'

const App = () => {
  return (
    
   <BrowserRouter>
   <Switch>
     <Route exact path ="/" component ={Login} />
     <Route exact path ="/main" component ={Main} />
     <Route exact path ="/forget-password" component ={ForgetPassword} />
    <Login/>
    </Switch>
    </BrowserRouter>
    
    
    
  );
}
   
 

export default App;


