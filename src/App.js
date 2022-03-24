import React, { } from 'react';
import Login from './components/login/Login';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes} from 'react-router-dom';
//import Home from './components/homePage/Home';
import HomePage from './components/homePage/PrivateRoute';

function App() {
    
    return (
      <>
        <Routes>
            <Route exact path="/" element={<Login/>}/>
            <Route path={"/Home/"} element={<HomePage/>}/>            
            {/* <PrivateRoute path='/Home' component={Home} />  */}
        </Routes>
      </>
    );
}
 
export default App;
