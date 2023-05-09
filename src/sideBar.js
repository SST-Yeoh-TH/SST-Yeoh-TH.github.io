import React, { useState } from "react";
import './sideBar.css';

function SideBar() {
    const [sideNavWidth, setSideNavWidth] = useState("0");
    const [mainMarginLeft, setMainMarginLeft] = useState("0");
  
    function openNav() {
      setSideNavWidth("250px");
      setMainMarginLeft("250px");
    }
  
    function closeNav() {
      setSideNavWidth("0");
      setMainMarginLeft("0");
    }
  
    return (
      <>
        <div id="sideNav" className="sidenav" style={{ width: sideNavWidth }}>
          <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
            &times;
          </a>
          <a href="#">Home</a>
          <a href="#">Education</a>
          <a href="#">🎼Musical Scores🎼</a>
          <a href="#">Contact</a>
        </div>
  
        <span onClick={openNav}>open</span>
  
        <div id="main" style={{ marginLeft: mainMarginLeft }}>
          {<p>try out the side bar!!! </p>}
        </div>
      </>
    );
  }
  
  export default SideBar;