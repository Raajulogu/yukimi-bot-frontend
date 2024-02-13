import React from 'react';
import LeftSideBox from '../Container/LeftSideBox';
import './Dashboard.css'
import RightSideBox from '../Container/RightSideBox';
import logo from '../assert/logo.jpg';
import yukimi from '../assert/yukimi.jpg';

const Dashboard = () => {
  return (
    <div className='dashboard-container'>
        <LeftSideBox/>
        <div className='main-content'>
            <img
            src={logo}
            alt="yukomi bot"
            className='logo'
            />
            <img
            src={yukimi}
            alt="image"
            className='yukimi'
            />
        </div>
        <RightSideBox/>
    </div>
  )
}

export default Dashboard