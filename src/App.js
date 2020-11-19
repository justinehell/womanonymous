import "./App.css";
import Cycle from "./components/Cycle";
import InnerCycle from "./components/InnerCycle"

function App() {
  return (
    <div className="App">
      <h1>This is the App</h1>
      <Cycle />
      <InnerCycle dayOfCycle="8"/>
    </div>
  );
}

export default App;
