import React, { Component, Fragment } from 'react';
import Login from './components/Login';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';

class App extends Component {
  state = {  } 
  render() { 
    return (
      <>
            <Switch>
                <Route path="/" component={Login} exact />
                <Route path="/Home" component={Home} />
            </Switch>
        </>
    );
  }
}
 
export default App;
