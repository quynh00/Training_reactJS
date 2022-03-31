import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Logouts, SwitchTheme, ChangeLanguage, GetUserName } from '../../redux/action';
import {BsArrowBarRight, BsFillPersonLinesFill} from 'react-icons/bs';
import '../../assets/style/Header.scss';
import { Dropdown} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
//import vd from '../../assets/img/vd.PNG'
import { ImPlus } from 'react-icons/im';
import PriceBoard from './PriceBoard';

function Header() {
    const current = new Date();
    const date = current.toLocaleDateString();
    const [time, setClockState] = useState();
    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setClockState(date.toLocaleTimeString());
        }, 1000);
    }, []);

    const checkTheme = useSelector((state) => state.Theme.checkTheme)
    const [checked, setChecked] = useState(checkTheme)
    const handleChangeTheme = (e) => {
        setChecked(e.target.value);
        dispatch(SwitchTheme(
            e.target.value
        ))
    };

    const { t, i18n } = useTranslation();

    const langMode = useSelector((state) => state.Language.langis)
    const [lang, setLang] = useState(langMode)

    const handleLang = (e) => {
        if(lang === 'vi'){
            i18n.changeLanguage('en');
            setLang(e.target.value);
            dispatch(ChangeLanguage(
                e.target.value
            ))
        }else if(lang === 'en'){
            i18n.changeLanguage('vi');
            setLang(e.target.value);
            dispatch(ChangeLanguage(
                e.target.value
            ))
        }
    };

    const dispatch = useDispatch();
    const hadleLogout = () => {
        dispatch(Logouts(false))
        dispatch(GetUserName(''))
    }
    const User = useSelector((state) => state.Login.username)
    
    return (
        // <div className={checked === 'dark' ? "dark-mode" : "light-mode"}>
            <header className='header'>
            <nav className="navbar navbar-expand-sm" style={{ background: checked === 'dark' ? "#494d4e" : "#3e95e2" }} id='nav'>
                <ul className="navbar-nav">
                    <li className="nav-item-logo">
                        <img className='logo-home' src='https://online.bvsc.com.vn/priceboard/static/media/logo_BVSC.2e992417.png' alt="" />
                    </li>
                    <li className="nav-item-date-time">
                        <div className='date-time'>
                            <span>&nbsp;</span>
                            <span>{date}</span>
                            <span>&nbsp;</span>
                            <span >{time}</span>
                        </div>
                    </li>
                    <li className="nav-item-marquee">
                    <marquee className='moving-header'>
                            <p className='marquee-header'>
                            <span className='marquee-item'>{t("home.marquee1")}</span>
                            <span className='marquee-item'>{t("home.marquee2")}</span>
                            <span className='marquee-item'>{t("home.marquee3")}</span>
                            <span className='marquee-item'>{t("home.marquee4")}</span>
                            <span className='marquee-item'>{t("home.marquee5")}</span>
                            <span className='marquee-item'>{t("home.marquee6")}</span>
                            <span className='marquee-item'>{t("home.marquee7")} </span>
                            <span className='marquee-item'>{t("home.marquee8")}</span>
                            <span className='marquee-item'>{t("home.marquee9")}</span>
                            <span className='marquee-item'>{t("home.marquee10")}</span>
                            </p>
                        </marquee>
                    </li>
                    <li className="nav-item-btn-logout">
                        <Link to="/"><button className='btn-logout' onClick={hadleLogout}><BsArrowBarRight size="1.5em"/>{t("home.logout")}</button></Link>
                    </li>
                    <li className="nav-item-user">
                        <Dropdown>
                            <Dropdown.Toggle variant="" id="dropdown-basic">
                                <BsFillPersonLinesFill size="2em" color="#ffff"/>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className={checked === 'dark' ? 'setting-box-dark' : 'setting-box-light'}>
                                <div className='setting-box' >
                                    <div className='namelogin'>{t("home.greet")}{User}</div>
                                    <div id='setting-box-theme' className={checked === 'dark' ? 'option-dark' : 'option-light'}>
                                        <span id="switchtheme">{t("home.theme")}</span>
                                        <div className="option-theme">
                                            <div className="option-theme-light">
                                                <input type='radio'
                                                    name='radio_theme'
                                                    value='light'
                                                    checked={checked === 'light'}
                                                    onChange={handleChangeTheme}
                                                />
                                                <span>{t("home.light")}</span>
                                            </div>
                                            <div className="option-theme-dark">
                                                <input type='radio'
                                                    name='radio_theme'
                                                    value='dark'
                                                    checked={checked === 'dark'}
                                                    onChange={handleChangeTheme}
                                                />
                                                <span>{t("home.dark")}</span>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div id='setting-box-language' className={checked === 'dark' ? 'option-dark' : 'option-light'} >
                                        <span id='lang'>{t("home.language")}</span>
                                        <div className="option-language">                                          
                                            <div className="vn" >
                                                <input type="radio" name='radio-lang' value='vi'
                                                    checked={lang === 'vi'}
                                                    onChange={handleLang} />
                                                <img id="flagVn" src="https://online.bvsc.com.vn/sso/images/vietnam.svg" alt=''/>
                                            </div>
                                            <div className="us" >
                                                <input type="radio" name='radio-lang' value='en'
                                                    checked={lang === 'en'}
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
        // </div>
  );
  }
export default Header;
