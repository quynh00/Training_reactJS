import React, { useState, useEffect } from "react";
import '../../../assets/style/PriceBoard.scss';
import data from '../../../dataFile/priceboard/data.json'

export default function HOSE() {
    
    
    const getColor = (a, b, c, value) =>{
        if(value > a && value < b){
            return "green";
        }else if(value > c && value < a){
            return "red"
        }
      }
  
      let ListData = data.list;
      let get10Data = ListData.slice(0, 5)
  
      const [data, setData] = useState(get10Data);
      const randomValue = (min, max) => {
        let value = Math.floor(Math.random() * (max - min + 1) + min)
        // value = parseFloat(value / 1000).toFixed(2) * 1000;
        return value;
        }
    const ChangeData = () => {
      get10Data.slice().map((info) => {
          if (info.a && info.b &&
            info.c && info.d && info.e !== undefined) {
            randomValue(info.b, info.c)
            return (
              setData(get10Data.slice(0, 5)),
              info.d = randomValue(info.b, info.c),
              info.e = randomValue(info.b, info.c)
              )
          }else {
              return ''
          }
      })
    }
      useEffect(() => {
          setInterval(ChangeData, 3000)
      }, [])  
      
    const Reacords = data.list.map(info => {
        return (
            <tr>
                <td>{info.name}</td>
                <td>{info.a}</td>
                <td>{info.b}</td>
                <td>{info.c}</td>
                <td className={getColor(data.a, data.b, data.c, data.d)}>{data.d}</td>
                <td className={getColor(data.a, data.b, data.c, data.e)}>{data.e}</td>
            </tr>
        )
    })

    return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>a</th>
                        <th>b</th>
                        <th>c</th>
                        <th>d</th>
                        <th>e</th>
                    </tr>
                </thead>
                <tbody>
                    {Reacords}
                </tbody>
            </table>
    );
}