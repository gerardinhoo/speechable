import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import UserInfo from "./components/UserInfo/UserInfo";
import TherapistInfo from "./components/ThreapistInfo/TherapistInfo";


import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <UserInfo />
      <TherapistInfo/>
      <Sidebar />
    </div>
  );
}

export default App;
