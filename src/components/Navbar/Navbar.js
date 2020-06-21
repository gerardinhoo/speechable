import React from 'react';
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-ul">
     <ul>
       <li>Speechable</li>
       <li>Jewial Jones <span>⭐️</span></li>
       <li>07-12-2020 | 10:00 am - 10:30am</li>
       <li>
         <button>Finish</button>
       </li>
       <li>
         <button>000</button>
       </li>
       <li>
         <button>Settings</button>
       </li>
     </ul>
    </div>
  )
}

export default Navbar;
