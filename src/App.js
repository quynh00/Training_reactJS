import React, { Component, Fragment } from 'react';
import Login from './components/login/Login';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Route, Router, Switch, Redirect } from 'react-router-dom';
import Home from './components/homePage/Home';

class App extends Component {
  
  render() { 
    return (
      <>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route path="/Home/:usename" component={Home}/>            
            <Route path="/Logout" component={Login}/>  
            {/* <PrivateRoute path='/Home' component={Home} />  */}
        </Switch>
      </>
    );
  }
}
 
export default App;
