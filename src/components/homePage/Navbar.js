import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { ImPlus } from 'react-icons/im';
import { VscTriangleDown } from 'react-icons/vsc';
import { AiFillStar } from 'react-icons/ai';
import '../../assets/style/Navbar.scss';
import { ChangeTabName, SwitchTab } from '../../redux/action'

function Navbar() {
    const checkTheme = useSelector((state) => state.Theme.checkTheme)
    const { t, i18n } = useTranslation();

    const dispatch = useDispatch();
    const Table_tab = useSelector((state) => state.Login.table_tab) 
    const [table, setTable] = useState(Table_tab)
    const tabHose = useSelector((state) => state.Login.namePriceBoard)
    const [tabName, settabName] = useState(tabHose)

    const tableHOSE = () =>{
        setTable('HOSE')
        dispatch(SwitchTab('HOSE'))
        settabName('HOSE')
        dispatch(ChangeTabName('HOSE'))
    }
    const tableVN30 = () =>{
        setTable('VN30')
        dispatch(SwitchTab('VN30'))
        settabName('VN30')
        dispatch(ChangeTabName('VN30'))
    }
    const tableHNX = () =>{
        setTable('HNX')
        dispatch(SwitchTab('HNX'))
    }
    const tableUPCOM = () =>{
        setTable('UPCOM')
        dispatch(SwitchTab('UPCOM'))
    }

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
                <li className='sub-menu item'>
                    <a title={t('nav.hose')} className='fl-list' onClick={tableHOSE}>{tabName}<VscTriangleDown/></a>
                    <ul className='sub-menu-item'>
                        <li className='sub-menu-list' onClick={tableHOSE}>
                            <a><span>HOSE</span></a>
                        </li>
                        <li className='sub-menu-list' onClick={tableVN30}>
                            <a><span>VN30</span></a>
                        </li>
                    </ul>
                </li>
                <li className='sub-menu item'>
                    <a title={t('nav.HNX_title')} className='fl-list' onClick={tableHNX}>HNX<VscTriangleDown/></a>
                    <ul className='sub-menu-item'>
                        <li className='sub-menu-list' onClick={tableHNX}>
                            <a ><span>HNX</span></a>
                        </li>
                        <li className='sub-menu-list' >
                            <a><span>HNX30</span></a>
                        </li>
                    </ul>
                </li>
                <li className='sub-menu '>
                    <a title={t('nav.Upcom_title')} className='fl-list' onClick={tableUPCOM}>UPCOM<VscTriangleDown/></a>
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

export default Navbar;
