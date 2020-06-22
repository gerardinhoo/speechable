import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import UserInfo from "./components/UserInfo/UserInfo";

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <UserInfo />
      <Sidebar />
    </div>
  );
}

export default App;
