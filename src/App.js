import React, { } from 'react';
import Login from './components/login/Login';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Navigate, Route, Routes} from 'react-router-dom';
import Home from './components/homePage/Home';
// import HomePage from './components/homePage/PrivateRoute';
import { checkLogin } from './redux/selectors';
import { useSelector } from 'react-redux';

function PrivateRoute({ children }){
  const usercheck = useSelector(checkLogin);
  return usercheck ? children : <Navigate to="/"/>;
}
const PrivateRouteLogin = ({ children}) => {
  const usercheck = useSelector(checkLogin);
  return !usercheck ? children : <Navigate to="/Home"/>
};

function App() {
    
    return (
      <>
        <Routes>
            <Route exact path="/" element={<PrivateRouteLogin>
              <Login/>
            </PrivateRouteLogin>}/>
            <Route path={"/Home/"} element={<PrivateRoute>
              <Home/>
            </PrivateRoute>}/>            
        </Routes>
      </>
    );
}
 
export default App;
