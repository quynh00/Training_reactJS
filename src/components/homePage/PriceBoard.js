import React, { useState, useEffect } from 'react';
import '../../assets/style/PriceBoard.css';
import hose_instruments from '../../dataFile/priceboard/hose_instruments.json';
import { useTranslation } from 'react-i18next';


function PriceBoard() {   
    const DisplayData = hose_instruments.map(info => {
            return(
                <tr>
                    <td title={info.FullName}>{info.symbol}</td>
                    <td>{(Math.round(info.reference)/1000)}</td>
                    <td>{info.ceiling}</td>
                    <td>{info.floor}</td>
                    <td>{info.bidPrice3}</td>
                    <td>{info.bidVol3}</td>
                    <td>{info.bidPrice2}</td>
                    <td>{info.bidVol2}</td>
                    <td>{info.bidPrice1}</td>
                    <td>{info.bidVol1}</td>
                    <td>{info.closePrice}</td>
                    <td>{info.closeVol}</td>
                    <td></td>
                    <td>{info.change}</td>
                    <td>{info.offerPrice1}</td>
                    <td>{info.offerVol1}</td>
                    <td>{info.offerPrice2}</td>
                    <td>{info.offerVol2}</td>
                    <td>{info.offerPrice3}</td>
                    <td>{info.offerVol3}</td>
                    <td>{info.totalTrading}</td>
                    <td>{info.totalTradingValue}</td>
                    <td>{info.high}</td>
                    <td>{info.averagePrice}</td>
                    <td>{info.low}</td>
                    <td>{info.TOTAL_OFFER_QTTY}</td>
                    <td>{info.TOTAL_BID_QTTY}</td>
                    <td>{info.foreignBuy}</td>
                    <td>{info.foreignSell}</td>

                </tr>
            )
        }
    )
    
    const { t, i18n } = useTranslation();

    return (
        <>
        <table className='priceBoard'>
            <thead >
                <tr>
                    <th colSpan="1" rowSpan="2">{t("table.col1")}</th>
                    <th colSpan="1" rowSpan="2">{t("table.col2")}</th>
                    <th colSpan="1" rowSpan="2">{t("table.col3")}</th>
                    <th colSpan="1" rowSpan="2">{t("table.col4")}</th>
                    <th colSpan="6" rowSpan="1">{t("table.col5")}</th>
                    <th colSpan="4" rowSpan="1">{t("table.col6")}</th>
                    <th colSpan="6" rowSpan="1">{t("table.col7")}</th>
                    <th colSpan="1" rowSpan="2">{t("table.col8")}</th>
                    <th colSpan="1" rowSpan="2">{t("table.col9")}</th>
                    <th colSpan="3" rowSpan="1">{t("table.col10")}</th>
                    <th colSpan="2" rowSpan="1">{t("table.col11")}</th>
                    <th colSpan="3" rowSpan="1">{t("table.col12")}</th>
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
    </>
    );
}
 
export default PriceBoard;
