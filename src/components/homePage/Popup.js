// import React, { useState, useEffect } from "react";
import '../../assets/style/PriceBoard.scss';
import hose_instruments from '../../dataFile/priceboard/hose_instruments.json'

export default function Popup() {

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
}