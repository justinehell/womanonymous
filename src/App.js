import React, { useState } from "react";
import "./App.css";
import Layout from "./Layout";

import Login from "./components/Login";
import Burger from "./components/Burger.js";

function App() {
  const [isHidden, setIsHidden] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleHidden() {
    setIsHidden(!isHidden);
  }

  return (
    <div className="App">
      {isLoggedIn ? (
        <>
          <Burger
            handleHidden={handleHidden}
            isHidden={isHidden}
            setIsLoggedIn={setIsLoggedIn}
          />
          <div
            id="overlay"
            className={isHidden ? "overlay" : ""}
            onClick={isHidden ? handleHidden : ""}
          >
            <Layout />
          </div>
        </>
      ) : (
          <Login setIsLoggedIn={setIsLoggedIn} />
        )}
    </div>
  );
}

export default App;
