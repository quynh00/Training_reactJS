import React, { Component, useState } from 'react';
import '../../assets/style/Home.css';
import { NavLink } from 'react-router-dom';
import {BsArrowBarRight, BsFillPersonLinesFill} from 'react-icons/bs';
import "../../assets/style/Themes.css";

function Home() {
    const [darkMode, setDarkMode] = useState(false);
    //const {username} = this.props.match.params;
    
    return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
        <nav class="navbar navbar-expand-sm" id='nav'>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <img id='logo' src='https://online.bvsc.com.vn/priceboard/static/media/logo_BVSC.2e992417.png' />
                </li>
                <li class="nav-item-theme">
                    <div className="container">
                    <span style={{ color: darkMode ? "blue" : "yellow" }}>Đổi theme</span>
                        <div className="switch-checkbox">
                            <label className="switch">
                            <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
                            <span className="slider round"> </span>
                        </label>
                        </div>
                    </div>
                </li>
                <li class="nav-item-user">
                    <div className='icon-user'>
                    <BsFillPersonLinesFill size="2em" color="#ffff" />
                    </div>
                </li>
                <li class="">
                <button className='btn-logout-home' ><BsArrowBarRight size="1.5em"/> Đăng xuất
                </button>
                </li>
            </ul>
        </nav>
        <h1>Xinchao</h1>
    </div>
  );
  }
export default Home;