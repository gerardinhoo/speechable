import React from 'react';
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="container">
      <ul className="sidebar">
        <li>
            <button className="logo">LOGO</button>
            <p className="para">Swag</p>
        </li>
        <li>
          <button className="logo">LOGO</button>
          <p className="para">Activities</p>
        </li>
        <li>
          <button className="logo">LOGO</button>
          <p className="para">Chats</p>
        </li>
        <li>
          <button className="logo">LOGO</button>
         <p className="para"> Notes</p>
        </li>
        <li>
          <button className="logo">LOGO</button>
          <p className="para">Spotlight</p>
        </li>
        <li>
          <button className="logo">LOGO</button>
          <p className="para">People</p>
        </li>
        <li>
          <button className="logo">LOGO</button>
          <p className="para">Break</p>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar;
