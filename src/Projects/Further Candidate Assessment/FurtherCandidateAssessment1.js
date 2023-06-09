import { Button } from "@mui/material";
import React, { useState } from "react";
import ShowHideButton from "./ShowHideButton";

//CA1
function FurtherCandidateAssessment1() {
  const [updateValue, setUpdateValue] = useState({
    updateValueOne: false,
    updateValueTwo: false,
    updateValueThree: false,
    updateValueFour: false,
  });
  const initialFormState = { name: "", email: "", phone: "" };
  const [formData, setFormData] = useState(initialFormState);

  let showOne = updateValue.updateValueOne ? "" : "none";
  let showTwo = updateValue.updateValueTwo ? "" : "none";
  let showThree = updateValue.updateValueThree ? "" : "none";
  let showFour = updateValue.updateValueFour ? "" : "none";

  function changeHandler({ target: { name, value } }) {
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  }

  return (
    <div>
      <div>
      <h1 style={{textAlign:"center"}}>Further Candidate Assessment One</h1>
        <br />

        <div className="row mb-3">
          
          <h2>Task One:</h2>
        </div>
        <div className="row mb-3">
          <div className="col col-3">
            <div className="row" style={{ gap: "20px" }}>
              <h5>Description:</h5>
              <ShowHideButton
                style={{ marginLeft: "5px" }}
                updateValue={updateValue}
                valueName={"updateValueOne"}
                setUpdateValue={setUpdateValue}
              />
            </div>
            <div style={{ display: showOne }}>
              <p>
                Create a button on an HTML page. When you click that button, an
                event should be sent into Google Tag Manager. Configure Google
                Tag Manager to send the trigger into Google Analytics. Create
                and configure a goal in Google Analytics so you can display said
                event as a conversion. Use{" "}
                <a href="https://loom.com">loom.com</a> to take a video of the
                process from end to end with the converstion showing up in
                Google Analytics
              </p>
            </div>
          </div>
          <div className="col col-5 " style={{ margin: "auto" }}>
            <Button
              className="btn mr-2"
              variant="contained"
              id="send_element"
              style={{ backgroundColor: "#737373" }}
            >
              Send Event
            </Button>
          </div>
        </div>
        <div className="row mb-3">
          <h2>Task Two:</h2>
        </div>
        <div className="row mb-3">
          <div className="col col-3">
            <div className="row" style={{ gap: "20px" }}>
              <h5>Description:</h5>
              <ShowHideButton
                style={{ marginLeft: "5px" }}
                updateValue={updateValue}
                valueName={"updateValueTwo"}
                setUpdateValue={setUpdateValue}
              />
            </div>
            <div style={{ display: showTwo }}>
              <p>
                Create an HTML form that pushes lead information (name, email
                and phone) into Zapier. Check if the email and phone are valid
                using a regular expression in Zapier, and then create a record
                in Google Sheets if they are. Use{" "}
                <a href="https://loom.com">loom.com</a> to take a video of the
                process from end to end.
              </p>
            </div>
          </div>
          <div className="col col-5" style={{ margin: "auto" }}>
            <form
              id="myForm"
              action="https://hooks.zapier.com/hooks/catch/15728688/3hvmdzf/"
              className="mb-4"
              type="POST"
            >
              <div className="row form-group">
                <label className="form-label" htmlFor="defLine">
                  Name
                </label>
                <input
                  className="form-control"
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={changeHandler}
                  required={true}
                />
                <small className="form-text text-muted">Enter Full Name.</small>
              </div>
              <div className="row form-group">
                <label className="form-label" htmlFor="defLine">
                  Email
                </label>
                <input
                  className="form-control"
                  id="email"
                  name="email"
                  type="text"
                  value={formData.email}
                  onChange={changeHandler}
                  required={true}
                />
                <small className="form-text text-muted">
                  Enter valid Email Address.
                </small>
              </div>

              <div className="row form-group">
                <label className="form-label" htmlFor="defLine">
                  Phone Number
                </label>
                <input
                  className="form-control"
                  id="phone"
                  name="phone"
                  type="text"
                  value={formData.phone}
                  onChange={changeHandler}
                  required={true}
                />
                <small className="form-text text-muted">
                  Enter valid 10 digit Phone Number.
                </small>
              </div>
              <div className="row form-group">
                <button
                  style={{ rightMargin: "500px" }}
                  type="submit"
                  value="submit"
                  id="Form-submit"
                  className="btn btn-primary"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="row mb-3">
          <h2>Task Three:</h2>
        </div>
        <div className="row mb-3">
          <div className="col col-3">
            <div className="row" style={{ gap: "20px" }}>
              <h5>Description:</h5>
              <ShowHideButton
                style={{ marginLeft: "5px" }}
                updateValue={updateValue}
                valueName={"updateValueThree"}
                setUpdateValue={setUpdateValue}
              />
            </div>
            <div style={{ display: showThree }}>
              <p>
                Use postman and our{" "}
                <a href="https://urldefense.com/v3/__https://api-docs.talkfurther.com/__;!!OH6fMn4!EEEv7kC3Zmg_MJfKOuwyJ0TwFzl1BM6Z76W7QIJ0gnZhq1g7QSdbg6MgzUQf9LZhSmokuT6OJa8KbA$">
                  API
                </a>{" "}
                to submit a lead into our backend and record it via Loom. If you
                run into an error please use your knowledge of APIs and our
                documentation to work around any errors.
              </p>
            </div>
          </div>
        </div>

        <div className="row mb-3">
          <h2>Task Four:</h2>
        </div>
        <div className="row mb-3">
          <div className="col col-3">
            <div className="row" style={{ gap: "20px" }}>
              <h5>Description:</h5>
              <ShowHideButton
                style={{ marginLeft: "5px" }}
                updateValue={updateValue}
                valueName={"updateValueFour"}
                setUpdateValue={setUpdateValue}
              />
            </div>
            <div style={{ display: showFour }}>
              <p>
                Please use CSS to style your project in a way that is
                aesthetically pleasing, simple, and creates a great user
                experience
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-3"></div>
    </div>
  );
}

export default FurtherCandidateAssessment1;
