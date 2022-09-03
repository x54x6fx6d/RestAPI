import logo from './logo.svg';
import './App.css';
import config from "./config.json";
import { useState, useEffect } from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a id="dev-site" class="text" href="https://tommy31.social/">
          Lotus Minecraft Server
        </a>
        <input type="button" value="Test" onClick={() => {
          let command = config.serverLink + "/webhook/sendMessage/" + "Test " + "/" + config.WhId + "/" + config.WhToken;
          window.location.assign(command);
        }}></input>
        <input type="text" id="username" placeholder="Username"></input>
        <input type="button" id="btn" value="Start Server" onClick={()=>{
          let username = document.getElementById("username").value;
          let cmd = config.startServerLink + username;
          window.location.assign(cmd);
        }}></input>
      </header>
    </div>
  );
}

export default App;
