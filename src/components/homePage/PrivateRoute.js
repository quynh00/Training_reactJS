import React from 'react';
import Home from './Home';
import { useSelector } from 'react-redux';
import { checkLogin} from '../../redux/selectors';
import Login from '../login/Login';

export default function HomePage(){
    const usercheck = useSelector(checkLogin);
    
    if(usercheck){
        return <Home/>
    }else{
        return <Login/>
    }
}