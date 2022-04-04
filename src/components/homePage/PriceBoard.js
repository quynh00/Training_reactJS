import '../../assets/style/PriceBoard.scss';
// import hose_instruments from '../../dataFile/priceboard/hose_instruments.json';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
// import HOSE from './PriceBoard/Hose';
import HNX from './PriceBoard/HNX';
import VN30 from './PriceBoard/VN30';
import UPCOM from './PriceBoard/UPCOM';
import HOSE from './PriceBoard/HOSE';

function PriceBoard() {

    const table_tab = useSelector((state) => state.Login.table_tab)
    const Switch_tab = () => {
        if(table_tab === 'HOSE'){
            return (<HOSE/>)
        }else if(table_tab === 'VN30'){
            return (<VN30/>)
        }else if(table_tab === 'HNX'){
            return (<HNX/>)
        }else{
            return (<UPCOM/>)
        }
    }
    
    const { t, i18n } = useTranslation();
    const checkTheme = useSelector((state) => state.Theme.checkTheme)

    return (
        <>
        <div className={checkTheme === 'dark' ? "dark-table" : "light-table"}>
            <table className='priceBoard'>
                <thead className='table-header'>
                    <tr>
                        <th colSpan="1" rowSpan="2" className='symbol'>{t("table.col1")}</th>
                        <th colSpan="1" rowSpan="2" className='ref'>{t("table.col2")}</th>
                        <th colSpan="1" rowSpan="2" className='ceil'>{t("table.col3")}</th>
                        <th colSpan="1" rowSpan="2" className='floor'>{t("table.col4")}</th>
                        <th colSpan="6" rowSpan="1" className='bid'>{t("table.col5")}</th>
                        <th colSpan="4" rowSpan="1" className='matched'>{t("table.col6")}</th>
                        <th colSpan="6" rowSpan="1" className='ask'>{t("table.col7")}</th>
                        <th colSpan="1" rowSpan="2" className='t-vol'>{t("table.col8")}</th>
                        <th colSpan="1" rowSpan="2" className='t-val'>{t("table.col9")}</th>
                        <th colSpan="3" rowSpan="1" className='prices'>{t("table.col10")}</th>
                        <th colSpan="2" rowSpan="1" className='remain'>{t("table.col11")}</th>
                        <th colSpan="3" rowSpan="1" className='foreign'>{t("table.col12")}</th>
                    </tr>
                    <tr>
                        <th colSpan="1" rowSpan="1">{t("table.col13")}</th>
                        <th colSpan="1" rowSpan="1">{t("table.col14")}</th>
                        <th colSpan="1" rowSpan="1">{t("table.col15")}</th>
                        <th colSpan="1" rowSpan="1">{t("table.col16")}</th>
                        <th colSpan="1" rowSpan="1">{t("table.col17")}</th>
                        <th colSpan="1" rowSpan="1">{t("table.col18")}</th>
                        <th colSpan="1" rowSpan="1">{t("table.col19")}</th>
                        <th colSpan="1" rowSpan="1">{t("table.col20")}</th>
                        <th colSpan="1" rowSpan="1">{t("table.col21")}</th>
                        <th colSpan="1" rowSpan="1">{t("table.col22")}</th>
                        <th colSpan="1" rowSpan="1">{t("table.col23")}</th>
                        <th colSpan="1" rowSpan="1">{t("table.col24")}</th>
                        <th colSpan="1" rowSpan="1">{t("table.col25")}</th>
                        <th colSpan="1" rowSpan="1">{t("table.col26")}</th>
                        <th colSpan="1" rowSpan="1">{t("table.col27")}</th>
                        <th colSpan="1" rowSpan="1">{t("table.col28")}</th>
                        <th colSpan="1" rowSpan="1">{t("table.col29")}</th>
                        <th colSpan="1" rowSpan="1">{t("table.col30")}</th>
                        <th colSpan="1" rowSpan="1">{t("table.col31")}</th>
                        <th colSpan="1" rowSpan="1">{t("table.col32")}</th>
                        <th colSpan="1" rowSpan="1">{t("table.col33")}</th>
                        <th colSpan="1" rowSpan="1">{t("table.col34")}</th>
                        <th colSpan="1" rowSpan="1">{t("table.col35")}</th>
                        <th colSpan="1" rowSpan="1">{t("table.col36")}</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {DisplayData} */}
                    {Switch_tab()}
                </tbody>
            </table>
        </div>
</>
    );
}

export default PriceBoard;
