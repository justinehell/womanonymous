import React from "react";
import "./App.css";
import Layout from "./Layout";
import Cycle from "./components/Cycle";
import InnerCycle from "./components/InnerCycle"

function App() {
  return (
    <div className="App">

      <h1>Baby Stop</h1>

      <Layout/>
      <Cycle />
      <InnerCycle dayOfCycle="15"/>
    </div>
  );
}

export default App;
