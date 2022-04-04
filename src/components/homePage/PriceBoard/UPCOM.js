import React from "react";
import '../../../assets/style/PriceBoard.scss';
import upcom_instruments from '../../../dataFile/priceboard/upcom_instruments.json'

export default function UPCOM() {
    const Calculate = (info, percent) => {
        if (info > 0) {
            return ((Math.round(info ) / percent).toFixed(2))
        } else {
            return ''
        }
    }
    
    const getClass = (info, ref, ceil, floor) =>{
        if(info > ref && info < ceil){
            return "green";
        }else if(info > floor && info < ref){
            return "red"
        }else if(info === ref){
            return "yellow"
        }else if(info === ceil){
            return "violet"
        }else if(info === floor){
            return "blue"
        }
    }
    const Change = (info, percent) => {
        if(info > 0) {
            return '+' + ((Math.round(info ) / percent).toFixed(2))
        }else if(info < 0){
            return ((Math.round(info ) / percent).toFixed(2))
        }else{
            return ''
        }
    }
    
    const ChangePercent = (info, percent) => {
        if(info > 0) {
            return '+' + ((Math.round(info ) / percent).toFixed(2)) + '%'
        }else if(info < 0){
            return ((Math.round(info ) / percent).toFixed(2)) + '%'
        }else{
            return ''
        }
    }
    const TableHOSE = upcom_instruments.d.map((info, i) =>  {
        const a = info.reference;
        const b = info.ceiling;
        const c = info.floor;
        const bidPrice1 = Number(info.bidPrice1)
        const offerPrice1 = Number(info.offerPrice1)

        return (
            <>
            <tr key={i}>
                <td className={getClass(info.closePrice, a, b, c)} title={info.FullName}>{info.symbol}</td>
                <td className='col-ref'>{Calculate(info.reference, 1000)}</td>
                <td className='col-ceil'>{Calculate(info.ceiling, 1000)}</td>
                <td className='col-floor'>{Calculate(info.floor, 1000)}</td>
                <td className={getClass(info.bidPrice3, a, b, c)}>{Calculate(info.bidPrice3, 1000)}</td>
                <td className={getClass(info.bidPrice3, a, b, c)}>{Calculate(info.bidVol3,1000)}</td>
                <td className={getClass(info.bidPrice2, a, b, c)}>{Calculate(info.bidPrice2,1000)}</td>
                <td className={getClass(info.bidPrice2, a, b, c)}>{Calculate(info.bidVol2, 1000)}</td>
                <td className={getClass(bidPrice1, a, b, c)}>{Calculate(info.bidPrice1,1000)}</td>
                <td className={getClass(bidPrice1, a, b, c)}>{Calculate(info.bidVol1, 1000)}</td>
                <td className={getClass(info.closePrice, a, b, c)}>{Calculate(info.closePrice, 1000)}</td>
                <td className={getClass(info.closePrice, a, b, c)}>{Calculate(info.closeVol, 1000)}</td>
                <td className={getClass(info.closePrice, a, b, c)}>{Change(info.change, 1000)}</td>
                <td className={getClass(info.closePrice, a, b, c)}>{ChangePercent(info.change, 1000)}</td>
                <td className={getClass(offerPrice1, a, b, c)}>{Calculate(info.offerPrice1, 1000)}</td>
                <td className={getClass(offerPrice1, a, b, c)}>{Calculate(info.offerVol1, 1000)}</td>
                <td className={getClass(info.offerPrice2, a, b, c)}>{Calculate(info.offerPrice2, 1000)}</td>
                <td className={getClass(info.offerPrice2, a, b, c)}>{Calculate(info.offerVol2,1000)}</td>
                <td className={getClass(info.offerPrice3, a, b, c)}>{Calculate(info.offerPrice3, 1000)}</td>
                <td className={getClass(info.offerPrice3, a, b, c)}>{Calculate(info.offerVol3, 1000)}</td>
                <td>{Calculate(info.totalTrading, 1000)}</td>
                <td>{Calculate(info.totalTradingValue,1000)}</td>
                <td className={getClass(info.high, a, b, c)}>{Calculate(info.high, 1000)}</td>
                <td className={getClass(info.averagePrice, a, b, c)}>{Calculate(info.averagePrice, 1000)}</td>
                <td className={getClass(info.low, a, b, c)}>{Calculate(info.low, 1000)}</td>
                <td>{Calculate(info.TOTAL_OFFER_QTTY, 1)}</td>
                <td>{Calculate(info.TOTAL_BID_QTTY, 1)}</td>
                <td>{Calculate(info.foreignBuy, 1000)}</td>
                <td>{Calculate(info.foreignSell, 1000)}</td>
                <td>{Calculate(info.foreignRemain, 1000)}</td>
            </tr>
        </>
        )
    }
    )
    return (
        <>
            {TableHOSE}
        </>
    )
}