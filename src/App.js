import React, { useState } from "react";
import "./App.css";
import Layout from "./Layout";
import Cycle from "./components/Cycle";
import Login from "./components/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      {isLoggedIn ? (
        <>
          <h1>Baby Stop</h1>
          <Layout />
          <Cycle />
        </>
      ) : (
        <Login setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
}

export default App;
