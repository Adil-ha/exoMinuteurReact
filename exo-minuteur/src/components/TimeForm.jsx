import React, { useRef } from "react";

const TimeForm = (props) => {
  const {nbTimer} = props
  const nbTimerInput = useRef();

  const submitFormHandler = (e) => {
    e.preventDefault();
    const newNbTimer = nbTimerInput.current.value;
    nbTimer(newNbTimer); // Correction ici
    nbTimerInput.current.value = "";
  };

  return (
    <>
      <form action="#" onSubmit={submitFormHandler}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Name Minuteur"
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            className="form-control"
            id="time"
            placeholder="Time Minuteur"
            ref={nbTimerInput}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Play
        </button>
      </form>
    </>
  );
};

export default TimeForm;
