import React, { useState, useEffect } from "react";
import '../../../assets/style/PriceBoard.scss';
import hnx_instruments from '../../../dataFile/priceboard/hnx_instruments.json';

const CHANGING_COLUMNS = ["bidPrice1", "bidPrice2", "bidPrice3", "offerPrice1", "offerPrice2", "offerPrice3"];

function HNX() {   
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
      if (info !== 0 && info !== null && info !== undefined && info !== NaN) {
          return ((Math.round(info) / percent).toFixed(2))
      } else {
          return '';
      }
    }

    let get20Data = hnx_instruments.d.slice(0, 20) 
    const [data, setData] = useState(get20Data);

    //random giá trị [floor, ceiling]
    const randomValue = (min, max) => {
        let value = Math.floor(Math.random() * (max - min + 1) + min)
        return value;
    }

  //random các ô 
    const randomizeCells = (cellNumber, i = 0, result = []) => {
        const columnIndex = randomValue(0, CHANGING_COLUMNS.length);
        const cellValue = randomValue(0, 9);
        const pair = `${CHANGING_COLUMNS[columnIndex]}:${cellValue}`;

        if (!result.includes(pair)) {
            i++;
        } else {
            return randomizeCells(cellNumber, i, result);
        }
        if (i === 15) {
            return result;
          
        }
        result.push(pair);
        return randomizeCells(cellNumber, i, result);
    };

    const updateRandomInfoValues = ({ info, cellIndex, randomCells }) => {
        const infoKeys = Object.keys(info);
        for (const infoKey of infoKeys) {
            if (randomCells.some((cell) => cell === `${infoKey}:${cellIndex}`)) {
                info[infoKey] = randomValue(info.floor, info.ceiling);
            }
        }
        return info;
    };
  
    const ChangeData = () => {
        const randomCells = randomizeCells(5);
        console.log(randomCells);

        get20Data.slice().map((info, index) => {
          // console.log(index);
            if (info.bidPrice1 && info.bidPrice2 && info.bidPrice3 &&
                info.offerPrice1 && info.offerPrice2 && info.offerPrice3 &&
                info.closePrice !== undefined) {
                const updatedInfo = updateRandomInfoValues({
                    info: info,
                    randomCells: randomCells,
                    cellIndex: index
                });
            return (
                setData(get20Data.slice()),
                info.bidPrice1 = updatedInfo.bidPrice1,
                info.bidPrice2 = updatedInfo.bidPrice2,
                info.bidPrice3 = updatedInfo.bidPrice3,
                info.offerPrice2 = updatedInfo.offerPrice2,
                info.offerPrice3 = updatedInfo.bidPrice3
                );
            } else {
                return "";
            }
        });
    };
    useEffect(() => {
        setInterval(ChangeData, 3000)
    }, [])

    const setColor = (info, ref, ceil, floor) =>{
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

    const tableHNX = hnx_instruments.d.map((info) => {
        const a = info.reference;
        const b = info.ceiling;
        const c = info.floor;
        return(
            <>
              <tr>
                  <td className={setColor(info.closePrice, a, b, c)} title={info.FullName} onClick={() => hanldeClick(info)}>{info.symbol}</td>
                  <td className='col-ref'>{Calculate(info.reference, 1000)}</td>
                  <td className='col-ceil'>{Calculate(info.ceiling, 1000)}</td>
                  <td className='col-floor'>{Calculate(info.floor, 1000)}</td>
                  <td className={ColorHighlight(info.bidPrice3, a, b, c)}>{Calculate(info.bidPrice3, 1000)}</td>
                  <td className={setColor(info.bidPrice3, a, b, c)}>{Calculate(info.bidVol3,1000)}</td>
                  <td className={ColorHighlight(info.bidPrice2, a, b, c)}>{Calculate(info.bidPrice2,1000)}</td>
                  <td className={setColor(info.bidPrice2, a, b, c)}>{Calculate(info.bidVol2, 1000)}</td>
                  <td className={ColorHighlight(Number(info.bidPrice1), a, b, c)}>{Calculate(Number(info.bidPrice1),1000)}</td>
                  <td className={setColor(Number(info.bidPrice1), a, b, c)}>{Calculate(info.bidVol1, 1000)}</td>

                  <td className={ColorHighlight(info.closePrice, a, b, c)} id='khoplenh'>{Calculate(info.closePrice, 1000)}</td>
                  <td className={setColor(info.closePrice, a, b, c)} id='khoplenh'>{Calculate(info.closeVol, 1000)}</td>
                  <td className={setColor(info.closePrice, a, b, c)} id='khoplenh'>{info.change > 0 ? '+' : ''}{Calculate(info.change, 1000)}</td>
                  <td className={setColor(info.closePrice, a, b, c)} id='khoplenh'>{info.change > 0 ? '+' : ''}{Calculate(info.change, 1000)}{info.change ? '%' : ''}</td>

                  <td className={ColorHighlight(Number(info.offerPrice1), a, b, c)}>{Calculate(Number(info.offerPrice1), 1000)}</td>
                  <td className={setColor(Number(info.offerPrice1), a, b, c)}>{Calculate(Number(info.offerVol1), 1000)}</td>
                  <td className={ColorHighlight(info.offerPrice2, a, b, c)}>{Calculate(info.offerPrice2, 1000)}</td>
                  <td className={setColor(info.offerPrice2, a, b, c)}>{Calculate(info.offerVol2,1000)}</td>
                  <td className={ColorHighlight(info.offerPrice3, a, b, c)}>{Calculate(info.offerPrice3, 1000)}</td>
                  <td className={setColor(info.offerPrice3, a, b, c)}>{Calculate(info.offerVol3, 1000)}</td>

                  <td>{Calculate(info.totalTrading, 1000)}</td>
                  <td>{Calculate(info.totalTradingValue,1000)}</td>

                  <td className={setColor(info.high, a, b, c)}>{Calculate(info.high, 1000)}</td>
                  <td className={setColor(info.averagePrice, a, b, c)}>{Calculate(info.averagePrice, 1000)}</td>
                  <td className={setColor(info.low, a, b, c)}>{Calculate(info.low, 1000)}</td>

                  <td>{Calculate(info.TOTAL_OFFER_QTTY, 1)}</td>
                  <td>{Calculate(info.TOTAL_BID_QTTY, 1)}</td>
                  <td>{Calculate(info.foreignBuy, 1000)}</td>
                  <td>{Calculate(info.foreignSell, 1000)}</td>
                  <td>{Calculate(info.foreignRemain, 1000)}</td>
              </tr>
            </>
        )
      })
    return (
      <>
        {tableHNX}
        {show && <Modal details={selectedData} handleClose={hideModal} />}
      </>
    );
  }

export default HNX;
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