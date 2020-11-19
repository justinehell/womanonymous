import React from "react";
import "./App.css";
import Layout from "./Layout";
import Cycle from "./components/Cycle";
import BoutonRegle from './components/BoutonRegle';

function App() {
  return (
    <div className="App">

      <h1>Baby Stop</h1>

      <Layout/>
      <Cycle />
      <BoutonRegle />
    </div>
  );
}

export default App;
