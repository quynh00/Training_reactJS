import React, {  } from 'react';
import { useSelector } from 'react-redux';
import '../../assets/style/Home.scss';
import { useTranslation } from 'react-i18next';
import PriceBoard from './PriceBoard';
import Header from './Header';
import Navbar from './Navbar';
import { Form } from 'react-bootstrap';
import { RiLineChartLine } from 'react-icons/ri';
import { HiShoppingCart } from 'react-icons/hi';

function Home() {

    const checkTheme = useSelector((state) => state.Theme.checkTheme)
    const { t, i18n } = useTranslation(); 
    
    return (
        <>
            <div className={checkTheme === 'dark' ? "dark-main" : "light-main"}>
                <Header/>
                <Navbar/>
                <PriceBoard/>
                {/* <HNX/> */}
                {/* <Test/> */}
            </div>
            <div class="footer">
                <div className="footer-item">
                    <span>{t("footer.dv")}</span><span className="hs">x1000</span>
                    <span>{t("footer.kl")}</span><span className="hs">x10</span>
                    <span>{t("footer.ps-gia")}</span><span className="hs">x1</span>
                    <span>{t("footer.ps-kl")}</span><span className="hs">x1</span>
                    <span>{t("footer.ll")}</span><span className="hs">x1</span>
                </div>
                <div className='wrap-btn'>
                    <div className='btn-watch'>
                        <RiLineChartLine className='watch-chart-icon' />
                        <span>{t('footer.price_board')}</span>
                    </div>
                    <div className='btn-set'>
                        <HiShoppingCart className='watch-chart-icon' />
                        <span>{t('footer.set_order')}</span>
                    </div>
                </div>
            </div>
        </>   
  );
  }
export default Home;
