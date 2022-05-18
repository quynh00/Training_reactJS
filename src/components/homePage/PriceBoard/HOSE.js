import React, { useState, useEffect } from "react";
import $ from 'jquery'; 
import '../../../assets/style/PriceBoard.scss';
import hose_instruments from '../../../dataFile/priceboard/hose_instruments.json';

const COLUMNS = ["bidPrice1", "bidPrice2", "bidPrice3","closePrice", "offerPrice1", "offerPrice2", "offerPrice3"];
function HOSE() {   

  const Calculate = (info) => {
    if (info !== 0 && info !== null && info !== undefined && info !== NaN) {
        return ((Math.round(info) / 1000).toFixed(2))
    } else {
        return '';
    }
  }

  const [show, setShow] = useState(false);
  const [selectedData, setSelectedData] = useState({});
  const hanldeClick = (selectedRec) => {
    setSelectedData(selectedRec);
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };

  let get20Data = hose_instruments.d.slice(0, 20);
  const [data, setData] = useState(get20Data);
  
  const randomValue = (min, max) => {
    let value = Math.floor(Math.random() * (max - min + 1) + min)
    return value;
  }

  //random các ô theo vị trí cột : hàng
  const randomizeCells = (cellNumber, i = 0, result = []) => {
    const columnIndex = randomValue(0, COLUMNS.length); 
    const cellValue = randomValue(0, 15); 
    const pair = `${COLUMNS[columnIndex]}:${cellValue}`; 
    if (!result.includes(pair)) { 
      i++; 
    } else {
      return randomizeCells(cellNumber, i, result);
    }
    if (i === 20) { 
      return result;
    }
    result.push(pair);
    return randomizeCells(cellNumber, i, result);
  };
 
  //update giá trị cho các ô
  const updateRandomInfoValues = ({ info: {...info}, cellIndex, randomCells }) => {
    const infoKeys = Object.keys(info); 
    for (const infoKey of infoKeys) {
      if (randomCells.some((cell) => cell === `${infoKey}:${cellIndex}`)) {
        info[infoKey] = randomValue(info.floor, info.ceiling);
      }
    }
    return info;
  };
  
  const ChangeData = () => {
    const randomCells = randomizeCells();
    // console.log(randomCells);
    get20Data.slice().map((info, index) => {
      if (info.bidPrice1 && info.bidPrice2 && info.bidPrice3 &&
        info.offerPrice1 && info.offerPrice2 && info.offerPrice3 &&
        info.closePrice !== undefined) {
        const updatedInfo = updateRandomInfoValues({
          info: info,
          cellIndex: index,
          randomCells: randomCells
        });
          let bidPrice3 = updatedInfo.bidPrice3
          let bidPrice2 = updatedInfo.bidPrice2
          let bidPrice1 = updatedInfo.bidPrice1
          let offerPrice1 = updatedInfo.offerPrice1
          let offerPrice2 = updatedInfo.offerPrice2
          let offerPrice3 = updatedInfo.offerPrice3
          let closePrice = updatedInfo.closePrice
        return (
          info.bidPrice3_classHighLight = getHighLight(info.bidPrice3, bidPrice3, info),
          info.bidPrice2_classHighLight = getHighLight(info.bidPrice2, bidPrice2, info),
          info.bidPrice1_classHighLight = getHighLight(info.bidPrice1, bidPrice1, info),

          info.offerPrice1_classHighLight = getHighLight(info.offerPrice1, offerPrice1, info),
          info.offerPrice2_classHighLight = getHighLight(info.offerPrice2, offerPrice2, info),
          info.offerPrice3_classHighLight = getHighLight(info.offerPrice3, offerPrice3, info),

          info.closePrice_classHighLight = getHighLight(info.closePrice, closePrice, info),
          
          info.bidPrice1 = bidPrice1,
          info.bidPrice2 = bidPrice2,
          info.bidPrice3 = bidPrice3,
          info.offerPrice1 = offerPrice1,
          info.offerPrice2 = offerPrice2,
          info.offerPrice3 = offerPrice3,
          info.closePrice = closePrice
          );
      } else {
        return "";
      }
    });
    setData(get20Data.slice())
    setTimeout(() => {
      clearHighLight()
    }, 1000)

  };
  useEffect(() => {
      setInterval(ChangeData, 1000)
  }, [])
  
  const setColor = (name, info, value) =>{
    let className = ''
    if(value === info.reference){
        className = "yellow"
    }else if(value === info.ceiling){
        className = "violet"
    }else if(value === info.floor){
        className = "blue"
    }
    if(value > info.reference){
      className = "green"
    }else {
        className = "red"        
    }
    if(info[name + '_classHighLight']){
      className = className + ' ' + info[name + '_classHighLight']
    }
    return className
  }

  const getHighLight = (currentValue, value, info) => {
    let className = ''
    if(currentValue === value) {
      className = ''
    } else if(currentValue !== value && value === info.reference) {
      className = 'hight-light-yellow'
    } else if(currentValue !== value && value === info.ceiling) {
      className = 'hight-light-purple'
    } else if(currentValue !== value && value === info.floor) {
      className = 'hight-light-blue'
    } else if(currentValue !== value && value > info.reference) {
      className = 'hight-light-green'
    } else {
      className = 'hight-light-red' 
    }
    return className;
  }

  const clearHighLight = () => {
    $(".table tbody tr td").removeClass('hight-light-yellow')
    $(".table tbody tr td").removeClass('hight-light-purple')
    $(".table tbody tr td").removeClass('hight-light-blue')
    $(".table tbody tr td").removeClass('hight-light-green')
    $(".table tbody tr td").removeClass('hight-light-red')

  }

  const tableHOSE = hose_instruments.d.map((info) => {
    return(
      <>
          <tr>
          <td className={setColor('symbol', info, info.closePrice)} onClick={() => hanldeClick(info)}>{info.symbol}</td>
          <td className='col-ref'>{Calculate(info.reference)}</td>
          <td className='col-ceil'>{Calculate(info.ceiling)}</td>
          <td className='col-floor'>{Calculate(info.floor)}</td>
          
          <td className={setColor('bidPrice3', info, info.bidPrice3)}>{Calculate(info.bidPrice3)}</td>
          <td className={setColor('bidVol3', info, info.bidPrice3)}>{Calculate(info.bidVol3)}</td>
          <td className={setColor('bidPrice2', info, info.bidPrice2)}>{Calculate(info.bidPrice2)}</td>
          <td className={setColor('bidVol2', info, info.bidPrice2)}>{Calculate(info.bidVol2)}</td>
          <td className={setColor('bidPrice1', info, Number(info.bidPrice1))}>{Calculate(Number(info.bidPrice1))}</td>
          <td className={setColor('bidVol1', info, Number(info.bidPrice1))}>{Calculate(info.bidVol1)}</td>
          
          <td className={setColor('closePrice', info, info.closePrice)}>{Calculate(info.closePrice)}</td>
          <td className={setColor('closeVol',info, info.closePrice)}>{Calculate(info.closeVol)}</td>
          <td className={setColor('change', info, info.closePrice)}>{info.change > 0 ? '+' : ''}{Calculate(info.change)}</td>
          <td className={setColor('change', info, info.closePrice)}>{info.change > 0 ? '+' : ''}{Calculate(info.change)}{info.change ? '%' : ''}</td>
         
          <td className={setColor('offerPrice1', info, Number(info.offerPrice1))}>{Calculate(Number(info.offerPrice1))}</td>
          <td className={setColor('offerVol1', info, Number(info.offerPrice1))}>{Calculate(info.offerVol1)}</td>
          <td className={setColor('offerPrice2', info, info.offerPrice2)}>{Calculate(info.offerPrice2)}</td>
          <td className={setColor('offerVol2', info, info.offerPrice2)}>{Calculate(info.offerVol2)}</td>
          <td className={setColor('offerPrice3',info, info.offerPrice3)}>{Calculate(info.offerPrice3)}</td>
          <td className={setColor('offerVol3',info, info.offerPrice3)}>{Calculate(info.offerVol3)}</td>

          <td className='TVAL'>{Calculate(info.totalTrading)}</td>
          <td className='TVOL'>{Calculate(info.totalTradingValue)}</td>
      
          <td className={setColor('high', info, info.high)}>{Calculate(info.high)}</td>
          <td className={setColor('averagePrice',info, info.averagePrice)}>{Calculate(info.averagePrice)}</td>
          <td className={setColor('low', info, info.low)}>{Calculate(info.low)}</td>
          <td></td>
          <td></td>
          <td>{Calculate(info.foreignBuy)}</td>
          <td>{Calculate(info.foreignSell)}</td>
          <td>{Calculate(info.foreignRemain)}</td>
          </tr>
      </>
    )
  })
  return (
    <>
    {tableHOSE}
    {show && <Modal details={selectedData} handleClose={hideModal} />}
    </>
  );
}

export default HOSE;
const Modal = ({ handleClose, details }) => {
    return (
      <div className="modal display-block">
        <section className="modal-main">
            <div className="name-popup">
                {details?.FullName}
            </div>
            <table class="table-popup">
              <thead>
                <tr>
                  <th scope="col" >Mã CK</th>
                  <th scope="col">Giá</th>
                  <th scope="col">+/-</th>
                  <th scope="col">KL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{details?.symbol}</td>
                  <td>{details?.closePrice/1000}</td>
                  <td>{details?.change/1000}{details?.change ? '%' : ''}</td>
                  <td>{details?.closeVol/1000}</td>
                </tr>
              </tbody>
            </table>
          
          <button onClick={handleClose} id='btn-close'>Close</button>
        </section>
      </div>
    );
  };