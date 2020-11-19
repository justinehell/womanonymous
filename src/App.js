import React, { useState } from "react";
import "./App.css";
import Layout from "./Layout";
import Cycle from "./components/Cycle";
import Login from "./components/Login";
import Burger from './components/Burger.js';
import baroque from './img/baroque.png';
import baroquefooter from './img/baroquefooter.png';

function App() {
  const [isHidden, setIsHidden] = useState(false)
const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleHidden() {
    setIsHidden(!isHidden)
  }
  
  return (
    <div className="App">
      {isLoggedIn ? (
        <>
            <Burger handleHidden={handleHidden} isHidden={isHidden} />
                <div id="overlay" className={isHidden ? 'overlay' : ''} onClick={isHidden ? handleHidden : ''}>
                    <img src={baroque} className="background-baroque" />
                    <h1>Baby Stop</h1>
                    <Layout/>
                    <img src={baroquefooter} className="background-baroque" />
                </div>
        </>
      ) : (
        <Login setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
}

export default App;
