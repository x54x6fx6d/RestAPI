import logo from './logo.svg';
import './App.css';
import config from "./config.json";
import React from "react";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    const init = async() => {
      let req = await fetch("http://localhost:3001/api/get/discord/invite");
      console.dir(req);
      let past = await req.json();
      console.dir(past);
      setData(old=>past);
    }
    /*
    fetch("http://localhost:3001/api/get/discord/invite")
      .then((res) => res.json())
      .then((data) => setData(old=>data.message));
      */
     init();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a id="dev-site" class="text" href="https://tommy31.social/">
          Lotus Minecraft Server
        </a>
        <p id="inviteLink">{!data ? "Loading..." : "https://discord.gg/" + data?.message}</p>
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
