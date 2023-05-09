import React, { useState } from "react";
import './sideBar.css';


function SideBar() {
    const [sideNavWidth, setSideNavWidth] = useState("0");
    const [mainMarginLeft, setMainMarginLeft] = useState("0");
  
    function openNav() {
      setSideNavWidth("300px");
      setMainMarginLeft("300px");
    }
  
    function closeNav() {
      setSideNavWidth("0");
      setMainMarginLeft("0");
    }
  
    return (
      <div>
        <div id="main"></div>
        <div id="sideNav"class ="SideNav"style={{ width: sideNavWidth }}>
          <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
            &times;
        
          </a>
          <a href="#Home">Home</a>
          <a href="#Education">Education</a>
          <a href="#Achievements">Achievements</a>
          <a href="#Scores">🎼Musical Scores🎼</a>
          <a href="#Contact">Contact</a>
        </div>
        <span onClick={openNav}>&#9776; </span>
      </div>
    
    );
  }
  
  export default SideBar;