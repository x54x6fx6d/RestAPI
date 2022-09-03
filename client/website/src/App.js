import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a id="dev-site" class="text" href="https://tommy31.social/">
          Lotus Minecraft Server
        </a>
        <p class="text">Test</p>
        <input type="text" id="username" placeholder="Username"></input>
        <input type="button" id="btn" value="Start Server" onClick={()=>{
          let username = document.getElementById("username").value;
          window.location.assign(`http://localhost:3000/api/post/minecraft/startServer/${username}`);
        }}></input>
      </header>
    </div>
  );
}

export default App;
