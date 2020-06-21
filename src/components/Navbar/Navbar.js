import React from 'react';
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-ul">
     <ul>
       <li className="app-title">Speechable</li>
       <li className="patient-name">
         Jewial Jones 
       </li>
       <span className="stars">⭐️</span>
       <li className="date-time">07-12-2020 | 10:00 am - 10:30am</li>
          <li>
          <button className="finish-button">
            <i className="fa fa-flag-o"></i>
            Finish
          </button>
          </li>
          <li>
            <button className="some-button">000</button>
          </li>
          <li>
            <button className="setting-button">
              <i className="fa fa-gear"></i>
            </button>
          </li>
     </ul>
    </div>
  )
}

export default Navbar;
