import React, { } from 'react';
import Login from './components/login/Login';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch} from 'react-router-dom';
import Home from './components/homePage/Home';

function App() {
    
    return (
      <>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route path="/Home/" component={Home}/>            
           
            {/* <PrivateRoute path='/Home' component={Home} />  */}
        </Switch>
      </>
    );
}
 
export default App;
