import React, { useState, useEffect } from "react";

const Timer = (props) => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let timer = null;

    const updateTimer = () => {
      // Mettez à jour les minutes et les secondes
      //   setMinutes((prevMinutes) => (prevMinutes - 1) % 60);
      setSeconds((prevSeconds) => (prevSeconds - 1) % 60);
    };

    // Démarrez le timer en utilisant setInterval
    timer = setInterval(updateTimer, 1000);

    // Nettoyez le timer lorsque le composant est démonté
    return () => clearInterval(timer);
  }, []);

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
