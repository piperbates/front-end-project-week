import React, { useState } from "react";
import "./styles.css";
import Navbar from "../Nav";

// Parent component of Mentor, Mentee, submit. In here we will take the information from Mentor & Mentee and the submit component will pass the data to our database
function Form() {
  const [menteeForm, setMenteeForm] = useState("form hide");
  const [mentorForm, setMentorForm] = useState("form hide");

  function showMentee() {
    if (mentorForm === "form") {
      setMentorForm("form hide");
    }
    setMenteeForm("form");
  }

  function hideMentee() {
    setMenteeForm("form hide");
  }

  function showMentor() {
    if (menteeForm === "form") {
      setMenteeForm("form hide");
    }
    setMentorForm("form");
  }

  function hideMentor() {
    setMentorForm("form hide");
  }

  return (
    <div className="container">
      <Navbar />
      <img />
      <div className="buttonsDiv">
        <button onClick={showMentor} className="btns">
          Mentor Form
        </button>
        <button onClick={showMentee} className="btns">
          Mentee Form
        </button>
      </div>

      <div className={menteeForm}>
        <div className="subForm">
          <button onClick={hideMentee} className="btns btnsClose">
            x
          </button>
          <form>
            <div className="field">
              <label for="fname">
                <strong>Name:</strong>
              </label>
              <input type="text" id="fname" name="fname" />
            </div>

            <div className="field">
              <label for="lname">Age:</label>
              <input type="text" id="lname" name="lname" />
            </div>

            <div className="field">
              <label for="lname">Ethnicity</label>
              <input type="text" id="lname" name="lname" />
            </div>

            <div className="field">
              <label for="lname">MyersBriggs:</label>
              <input type="text" id="lname" name="lname" />
            </div>
          </form>
        </div>
      </div>

      <div className={mentorForm}>
        <button onClick={hideMentor} className="btns btnsClose">
          x
        </button>
        <form>
          <div className="field">
            <label for="fname">Name:</label>
            <input type="text" id="fname" name="fname" />
          </div>

          <div className="field">
            <label for="lname">Age:</label>
            <input type="text" id="lname" name="lname" />
          </div>

          <div className="field">
            <label for="lname">Ethnicity</label>
            <input type="text" id="lname" name="lname" />
          </div>

          <div className="field">
            <label for="lname">MyersBriggs:</label>
            <input type="text" id="lname" name="lname" />
          </div>

          <div className="field">
            <label for="lname">Experience:</label>
            <input type="text" id="lname" name="lname" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
