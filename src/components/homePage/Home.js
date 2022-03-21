import React, { useState } from 'react';
import '../../assets/style/Home.css';
import { Link } from 'react-router-dom';
import {BsArrowBarRight, BsFillPersonLinesFill} from 'react-icons/bs';
import "../../assets/style/Themes.css";
import { Dropdown} from 'react-bootstrap';

function Home() {
    const [darkMode, setDarkMode] = useState(false);
    const current = new Date();
    const date = current.toLocaleDateString();
    const time = current.toLocaleTimeString( );
    
    return (
        <div className={darkMode ? "dark-mode" : "light-mode"}>
            <header>
            <nav class="navbar navbar-expand-sm" style={{ background: darkMode ? "#494d4e" : "#3e95e2" }} id='nav'>
                <ul class="navbar-nav">
                    <li class="nav-item-logo">
                        <img className='logo-home' src='https://online.bvsc.com.vn/priceboard/static/media/logo_BVSC.2e992417.png' />
                    </li>
                    <li class="nav-item-date-time">
                        <div className='date-time'>
                            <span>&nbsp;</span>
                            <span>{date}</span>
                            <span>&nbsp;</span>
                            <span >{time}</span>
                        </div>
                    </li>
                    <li class="nav-item-marquee">
                        <marquee className='moving-header'>
                            <p className='marquee-header'>
                            <span className='marquee-item'>KL thoả thuận: </span>
                            <span className='marquee-item'>1.984.252 tỷ</span>
                            <span className='marquee-item'>KLGD lô lẻ: </span>
                            <span className='marquee-item'>16.702</span>
                            <span className='marquee-item'>GTGD: </span>
                            <span className='marquee-item'>12.558.999 tỷ</span>
                            <span className='marquee-item'>GT thoả thuận: </span>
                            <span className='marquee-item'>1.235.468 tỷ</span>
                            <span className='marquee-item'>KLGD: </span>
                            <span className='marquee-item'>61.192.002 tỷ</span>
                            <span className='marquee-item'>KL thoả thuận: </span>
                            <span className='marquee-item'>1.984.252 tỷ</span>
                            <span className='marquee-item'>KLGD lô lẻ: </span>
                            <span className='marquee-item'>16.702</span>
                            <span className='marquee-item'>GTGD: </span>
                            <span className='marquee-item'>12.558.999 tỷ</span>
                            <span className='marquee-item'>GT thoả thuận: </span>
                            <span className='marquee-item'>1.235.468 tỷ</span>
                            <span className='marquee-item'>KLGD: </span>
                            <span className='marquee-item'>61.192.002 tỷ</span>
                            </p>
                        </marquee>
                    </li>
                    <li class="nav-item-btn-logout">
                        <Link to="/"><button className='btn-logout' ><BsArrowBarRight size="1.5em"/> Đăng xuất</button></Link>
                    </li>
                    <li class="nav-item-user">
                        <Dropdown>
                            <Dropdown.Toggle variant="" id="dropdown-basic">
                                <BsFillPersonLinesFill size="2em" color="#ffff" />
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <div className='setting-box'>
                                    <div className='setting-box-theme'>
                                        <span id="switchtheme">Đổi theme</span>
                                        <label className="switch">
                                            <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
                                            <span className="slider round" style={{ color: darkMode ? "blue" : "black" }}>Sáng  ---  Tối </span>
                                        </label>
                                    </div>
                                    <div className='setting-box-language'>
                                        <span id='lang'>Ngôn ngữ</span>
                                        <div className="row">
                                            <div className="col">
                                                <div className="vn" >
                                                    <input type="radio" name='radio-lang'/>
                                                    <img id="flagVn" src="https://online.bvsc.com.vn/sso/images/vietnam.svg" alt=''/>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="us" >
                                                    <input type="radio" name='radio-lang'/>
                                                    <img id="flagUs" src="https://online.bvsc.com.vn/sso/images/uk.svg" alt=''/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>    
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                
                </ul>
            </nav>
            </header>
            <div>
                <h1>Xin chào</h1>
            </div>
        </div>
  );
  }
export default Home;