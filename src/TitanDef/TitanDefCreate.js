import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { createTitanDef } from "../utils/api";
import ErrorAlert from "../layout/ErrorAlert";

function TitanDefCreate() {
  const history = useHistory();

  const [titanDef, setTitanDef] = useState({
    defLine: "",
    maxPower: "",
    offLine: "",
    comments: "NA"
  });

  const [error, setError] = useState(null);

  function cancelHandler() {
    history.push("/HW/TitanDef");
  }

  function submitHandler(event) {
    event.preventDefault();
    createTitanDef(titanDef).then(() => {
      history.push("/HW/TitanDef");
    }).catch(setError);
  }
  function changeHandler({ target: { name, value } }) {
    setTitanDef((previousTitanDef) => ({
      ...previousTitanDef,
      [name]: value,
    }));
  }

  return (
    <main>
      <h1 className="mb-3">Create Titan Defensive Line</h1>
      <ErrorAlert error={error} />
      <form onSubmit={submitHandler} className="mb-4">
        <div className="row mb-3">
          <div className="col-6 form-group">
            <label className="form-label" htmlFor="defLine">
              Defensive Line
            </label>
            <input
              className="form-control"
              id="defLine"
              name="defLine"
              type="text"
              value={titanDef.defLine}
              onChange={changeHandler}
              required={true}
            />
            <small className="form-text text-muted">
              Enter 5 titans, include a space between each.
            </small>
          </div>
          <div className="col-6">
            <label className="form-label" htmlFor="offLine">
              Offensive Line
            </label>
            <input
              className="form-control"
              id="offLine"
              name="offLine"
              type="text"
              value={titanDef.offLine}
              onChange={changeHandler}
              required={true}
            />
            <small className="form-text text-muted">
            Enter 5 titans, include a space between each.
            </small>
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="comments">
            Comments
          </label>
          <input
              className="form-control"
              id="comments"
              name="comments"
              type="textArea"
              rows="3"
              value={titanDef.comments}
              onChange={changeHandler}
              required={true}
            />
        </div>
        <div>
          <button
            type="button"
            className="btn btn-secondary mr-2"
            onClick={cancelHandler}
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </main>
  );
}

export default TitanDefCreate;
