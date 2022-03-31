import '../../assets/style/PriceBoard.scss';
import hnx_instruments from '../../dataFile/priceboard/hnx_instruments.json';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

function PriceBoard() {
    
    const DisplayData = hnx_instruments.d.map(info => {
        return (
            <tr>
                <td title={info.FullName}>{info.symbol}</td>
                <td className='col-ref'>{(Math.round(info.reference) / 1000)}</td>
                <td className='col-ceil'>{(Math.round(info.ceiling) /1000)}</td>
                <td className='col-floor'>{(Math.round(info.floor)/1000)}</td>
                <td>{info.bidPrice3/1000}</td>
                <td>{info.bidVol3/10}</td>
                <td>{info.bidPrice2/1000}</td>
                <td>{info.bidVol2/10}</td>
                <td>{info.bidPrice1/1000}</td>
                <td>{info.bidVol1/10}</td>
                <td>{info.closePrice/1000}</td>
                <td>{info.closeVol/10}</td>
                <td></td>
                <td>{info.change/1000}%</td>
                <td>{info.offerPrice1/1000}</td>
                <td>{info.offerVol1/10}</td>
                <td>{info.offerPrice2/1000}</td>
                <td>{info.offerVol2/10}</td>
                <td>{info.offerPrice3/1000}</td>
                <td>{info.offerVol3/10}</td>
                <td>{info.totalTrading/1000}</td>
                <td>{info.totalTradingValue/1000}</td>
                <td>{info.high/1000}</td>
                <td>{(Math.round(info.averagePrice)/1000)}</td>
                <td>{info.low/1000}</td>
                <td>{info.TOTAL_OFFER_QTTY}</td>
                <td>{info.TOTAL_BID_QTTY}</td>
                <td>{info.foreignBuy}</td>
                <td>{info.foreignSell}</td>
                <td>{info.foreignRemain}</td>
            </tr>
        )
    }
    )

    const { t, i18n } = useTranslation();
    const checkTheme = useSelector((state) => state.Theme.checkTheme)


    return (
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
                    {DisplayData}
                </tbody>
            </table>
        </div>

    );
}

export default PriceBoard;
