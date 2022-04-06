import React, { useState, useEffect } from "react";
import '../../../assets/style/PriceBoard.scss';
import hose_instruments from '../../../dataFile/priceboard/hose_instruments.json';

export default function HOSE() {

    const [show, setShow] = useState(false);
    const [selectedData, setSelectedData] = useState({});
    const hanldeClick = (selectedRec) => {
        setSelectedData(selectedRec);
        setShow(true);
    };

    const hideModal = () => {
        setShow(false);
    };

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

    const ColorHighlight = (info, ref, ceil, floor) =>{
        if(info > ref && info < ceil){
            return "Highlight-green";
        }else if(info > floor && info < ref){
            return "Highlight-red"
        }else if(info === ref){
            return "Highlight-yellow"
        }else if(info === ceil){
            return "Highlight-violet"
        }else if(info === floor){
            return "Highlight-blue"
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
    const start = 0//Math.floor(Math.random() * 10)
    const end = Math.floor(Math.random() * (20 - 10)) + 10
    // console.log(start);
    let HoseData = hose_instruments.d;
    let get20Data = HoseData.slice(0, 20)
    const [info, setData] = useState(get20Data);
    const randomValue = (min, max) => {
    let value = Math.floor(Math.random() * (max - min + 1) + min)
    value = parseFloat(value / 1000).toFixed(2) * 1000;
    return value;
  }
  const ChangeData = () => {
    get20Data.slice(start, end).map((info) => {
        if (info.bidPrice2 && info.bidPrice3 &&
            info.offerPrice1 && info.offerPrice2 && info.offerPrice3 &&
            info.closePrice !== undefined) {
          randomValue(info.floor, info.ceiling)
          return (
            setData(get20Data.slice(0, 10)),
            info.bidPrice3 = randomValue(info.floor, info.ceiling),
            info.bidPrice2 = randomValue(info.floor, info.ceiling),
            info.bidPrice1 = randomValue(info.floor, info.ceiling),
            info.offerPrice1 = randomValue(info.floor, info.ceiling),
            info.offerPrice2 = randomValue(info.floor, info.ceiling),
            info.offerPrice3 = randomValue(info.floor, info.ceiling),
            info.closePrice = randomValue(info.floor, info.ceiling)
            )
        }else {
            return ''
        }
    })
  }
    useEffect(() => {
        setInterval(ChangeData, 3000)
    }, [])
    const TableHOSE = hose_instruments.d.map((info, i) =>  {
        const a = info.reference;
        const b = info.ceiling;
        const c = info.floor;

        return (
            <>
            <tr key={i}>
                <td className={getClass(info.closePrice, a, b, c)} title={info.FullName} onClick={() => hanldeClick(info)}>{info.symbol}</td>
                <td className='col-ref'>{Calculate(info.reference, 1000)}</td>
                <td className='col-ceil'>{Calculate(info.ceiling, 1000)}</td>
                <td className='col-floor'>{Calculate(info.floor, 1000)}</td>
                <td className={ColorHighlight(info.bidPrice3, a, b, c)}>{Calculate(info.bidPrice3, 1000)}</td>
                <td className={getClass(info.bidPrice3, a, b, c)}>{Calculate(info.bidVol3,1000)}</td>
                <td className={ColorHighlight(info.bidPrice2, a, b, c)}>{Calculate(info.bidPrice2,1000)}</td>
                <td className={getClass(info.bidPrice2, a, b, c)}>{Calculate(info.bidVol2, 1000)}</td>
                <td className={ColorHighlight(info.bidPrice1, a, b, c)}>{Calculate(Number(info.bidPrice1),1000)}</td>
                <td className={getClass(info.bidPrice1, a, b, c)}>{Calculate(info.bidVol1, 1000)}</td>
                <td className={ColorHighlight(info.closePrice, a, b, c)} id='khoplenh'>{Calculate(info.closePrice, 1000)}</td>
                <td className={getClass(info.closePrice, a, b, c)} id='khoplenh'>{Calculate(info.closeVol, 1000)}</td>
                <td className={getClass(info.closePrice, a, b, c)} id='khoplenh'>{Change(info.change, 1000)}</td>
                <td className={getClass(info.closePrice, a, b, c)} id='khoplenh'>{ChangePercent(info.change, 1000)}</td>
                <td className={ColorHighlight(info.offerPrice1, a, b, c)}>{Calculate(Number(info.offerPrice1), 1000)}</td>
                <td className={getClass(info.offerPrice1, a, b, c)}>{Calculate(info.offerVol1, 1000)}</td>
                <td className={ColorHighlight(info.offerPrice2, a, b, c)}>{Calculate(info.offerPrice2, 1000)}</td>
                <td className={getClass(info.offerPrice2, a, b, c)}>{Calculate(info.offerVol2,1000)}</td>
                <td className={ColorHighlight(info.offerPrice3, a, b, c)}>{Calculate(info.offerPrice3, 1000)}</td>
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
            {show && <Modal details={selectedData} handleClose={hideModal} />}

        </>
    )
}
const Modal = ({ handleClose, details }) => {
    return (
      <div className="modal display-block">
        <section className="modal-main">
          <div className="name-popup">
          {details?.FullName}
          </div>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Mã CK</th>
                  <th scope="col">Giá</th>
                  <th scope="col">+/-</th>
                  <th scope="col">KL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{details?.symbol}</td>
                  <td>{details?.closePrice}</td>
                  <td>{details?.change}</td>
                  <td>{details?.closeVol}</td>
                </tr>
              </tbody>
            </table>
          
          <button onClick={handleClose} id='btn-close'>Close</button>
        </section>
      </div>
    );
  };