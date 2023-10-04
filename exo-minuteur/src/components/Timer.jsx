import React, { useState, useEffect } from "react";

const Timer = (props) => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let timer = null;
  
    const updateTimer = () => {
      if (minutes === 0 && seconds === 0) {
        clearInterval(timer);
        return;
      }
  
      if (seconds === 0) {
        setMinutes((prevMinutes) => prevMinutes - 1);
        setSeconds(59);
      } else {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }
    };
  
    timer = setInterval(updateTimer, 1000);
  
    return () => clearInterval(timer);
  }, [minutes, seconds]);

  // Formate les minutes et les secondes avec deux chiffres
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");

  return (
    <div className="border-dark rounded d-flex">
      <p className="mr-2">
        Temps écoulé : {formattedMinutes}:{formattedSeconds}
      </p>
      <button className="btn btn-danger">Supprimer</button>
    </div>
  );
};

export default Timer;
