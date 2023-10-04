import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TimeForm from "./components/TimeForm";
import Timer from "./components/Timer";

function App() {
  const [timers, setTimers] = useState([]);
  const timeTimer = (e)=>{
    console.log(e.newNbTimer);
  }

  const addTimer = (newNbTimer) => {
    // Add the new timer to the list of timers
    setTimers([...timers, newNbTimer]);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="minuteur border-dark rounded w-60">
          <h1>Minuteur</h1>
          <div className="row">
            <div className="col-4">
              <TimeForm nbTimer={timeTimer} />
            </div>
            <div className="col-8">
              <Timer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
