import React, { useState } from "react";
import './App.css';
import SideBar from "./sideBar";
import openNav from "./sideBar";
import './sideBar.css';


function App() {
  return (
    <div>
      <SideBar />
        <div>
        <h1>Hello There!</h1>
        <p> I cant fit everything in the whiteboard so here it is:
           My name is TH and I am a SST student in guitar ensemble!
        </p>
      </div>
    </div>
  );
}

export default App;
