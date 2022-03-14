import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import './style/Home.css';
import { NavLink } from 'react-router-dom';
import {BsArrowBarRight, BsFillPersonLinesFill} from 'react-icons/bs';
class Home extends Component {
    state = {  } 
    render() { 
        return(
            <nav class="navbar navbar-expand-sm" id='nav'>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <img id='logo' src='https://online.bvsc.com.vn/priceboard/static/media/logo_BVSC.2e992417.png' />
                </li>
                <li class="nav-item">
                    
                </li>
                <li class="nav-item">
                <button className='btn-login-home'><BsArrowBarRight size="1.5em"/> Đăng nhập
                {/* <NavLink className="navlink-name" to={"./Login"}>Đăng nhập</NavLink> */}
                </button>
                </li>
                <li class="nav-item">
                    <div className='menu-user'>
                    <BsFillPersonLinesFill size="2em" color="#ffff" />
                    </div>
                </li>
            </ul>
            </nav>
        )
    }
}

export default Home;