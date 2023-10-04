const TimeForm = (props) => {
  const nbTimers = props;
  return (
    <>
      <form action="#">
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
          />
        </div>
        <button type="button" className="btn btn-success">
          Play
        </button>
      </form>
    </>
  );
};

export default TimeForm;
