import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Logouts, SwitchTheme, ChangeLanguage, GetUserName } from '../../redux/action';
import {BsArrowBarRight, BsFillPersonLinesFill} from 'react-icons/bs';
import "../../assets/style/Themes.css";
import '../../assets/style/Home.css';
import { Dropdown} from 'react-bootstrap';

function Home() {
    const current = new Date();
    const date = current.toLocaleDateString();
    const time = current.toLocaleTimeString( );

    const checkTheme = useSelector((state) => state.Theme.checkTheme)
    const [checked, setChecked] = useState(checkTheme)
    const handleChangeTheme = (e) => {
        setChecked(e.target.value);
        dispatch(SwitchTheme(
            e.target.value
        ))
    };

    const langMode = useSelector((state) => state.Language.langis)
    const [lang, setLang] = useState(langMode)
    const handleLang = (e) => {
        setLang(e.target.value)
        dispatch(ChangeLanguage(
            e.target.value
        ))
    }

    const dispatch = useDispatch();
    const hadleLogout = () => {
        dispatch(Logouts(false))
        dispatch(GetUserName(''))
    }
    const User = useSelector((state) => state.Login.username)
    
    return (
        <div className={checked === 'dark' ? "dark-mode" : "light-mode"}>
            <header>
            <nav class="navbar navbar-expand-sm" style={{ background: checked === 'dark' ? "#494d4e" : "#3e95e2" }} id='nav'>
                <ul class="navbar-nav">
                    <li class="nav-item-logo">
                        <img className='logo-home' src='https://online.bvsc.com.vn/priceboard/static/media/logo_BVSC.2e992417.png' alt="" />
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
                        <Link to="/"><button className='btn-logout' onClick={hadleLogout}><BsArrowBarRight size="1.5em"/> Đăng xuất</button></Link>
                    </li>
                    <li class="nav-item-user">
                        <Dropdown>
                            <Dropdown.Toggle variant="" id="dropdown-basic">
                                <BsFillPersonLinesFill size="2em" color="#ffff"/>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className={checked === 'dark' ? 'setting-box-dark' : 'setting-box-light'}>
                                <div className='setting-box' >
                                    <div className='namelogin'>Xin chào: {User}</div>
                                    <div id='setting-box-theme' className={checked === 'dark' ? 'option-dark' : 'option-light'}>
                                        <span id="switchtheme">Giao diện</span>
                                        <div className="option-theme">
                                            <div className="option-theme-light">
                                                <input type='radio'
                                                    name='radio_theme'
                                                    value='light'
                                                    checked={checked === 'light'}
                                                    onChange={handleChangeTheme}
                                                />
                                                <span>Sáng</span>
                                            </div>
                                            <div className="option-theme-dark">
                                                <input type='radio'
                                                    name='radio_theme'
                                                    value='dark'
                                                    checked={checked === 'dark'}
                                                    onChange={handleChangeTheme}
                                                />
                                                <span>Tối</span>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div id='setting-box-language' className={checked === 'dark' ? 'option-dark' : 'option-light'} >
                                        <span id='lang'>Ngôn ngữ</span>
                                        <div className="option-language">                                          
                                            <div className="vn" >
                                                <input type="radio" name='radio-lang' value='vie'
                                                    checked={lang === 'vie'}
                                                    onChange={handleLang} />
                                                <img id="flagVn" src="https://online.bvsc.com.vn/sso/images/vietnam.svg" alt=''/>
                                            </div>
                                            <div className="us" >
                                                <input type="radio" name='radio-lang' value='eng'
                                                    checked={lang === 'eng'}
                                                    onChange={handleLang}/>
                                                <img id="flagUs" src="https://online.bvsc.com.vn/sso/images/uk.svg" alt=''/>
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