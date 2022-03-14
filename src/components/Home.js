import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './style/Home.css';
import Header from './Header';
import Footer from './Footer'

class Home extends Component {
    state = {  } 
    render() { 
        return(
            <>
            <Header></Header>
            <Footer></Footer>
            </>
        )
    }
}

export default Home;