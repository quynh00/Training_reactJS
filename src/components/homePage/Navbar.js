import React, { } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { ImPlus } from 'react-icons/im';
import { VscTriangleDown } from 'react-icons/vsc';
import { AiFillStar } from 'react-icons/ai';
import '../../assets/style/Navbar.scss'

function Test() {
    const checkTheme = useSelector((state) => state.Theme.checkTheme)

    const { t, i18n } = useTranslation();

    return (
        <div className={checkTheme === 'dark' ? "dark-menu" : "light-menu"}>
            <div className='search-box'>
                <div className='input-box'>
                    <input type='text' placeholder={t('nav.input-search')} className='input-search' />
                </div>
                <button type='submit' className='btn-search'><ImPlus className='plus-icon' /></button>
            </div>
            <ul className='primary'>
                <li className='tabWatchList '>
                    <a title={t('nav.fl-list')} className='fl-list'>{t('nav.fl-list')}<VscTriangleDown/></a>
                </li>
                <li className='sub-menu'>
                    <a title={t('nav.hose')} className='fl-list '>Hose<VscTriangleDown/></a>
                </li>
                <li className='sub-menu '>
                    <a title={t('nav.HNX_title')} className='fl-list'>HNX<VscTriangleDown/></a>
                </li>
                <li className='sub-menu '>
                    <a title={t('nav.Upcom_title')} className='fl-list'>UPCOM<VscTriangleDown/></a>
                </li>
                <li className='sub-menu '>
                    <a className='fl-list'>{t('nav.stock')}<AiFillStar/><VscTriangleDown/></a>
                </li>
                <li className='sub-menu '>
                    <a className='fl-list'>{t('nav.derivatives')}<VscTriangleDown/></a>
                </li>
                <li className='sub-menu '>
                    <a className='fl-list'>{t('nav.warrant')}</a>
                </li>
                <li className='sub-menu '>
                    <a className='fl-list'>{t('nav.bonds')}</a>
                </li>
                <li className='sub-menu '>
                    <a className='fl-list'>{t('nav.odd-lot')} <VscTriangleDown className='arrow-down' /></a>
                </li>
            </ul>
        </div>
    );
}

export default Test;
