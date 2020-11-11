import React, { useState } from "react";
import "./styles.css";
import Navbar from "../Nav";
import Footer from "../Footer";

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
    <div className="containerForm">
      <Navbar />
      <br />
      <br />
      <h1 className="h1Form">
        Hello, It's wonderful <br />
        to see you here
      </h1>
      <br />
      <br />
      <div className="buttonsDivForm">
        <button onClick={showMentor} className="btnsForm">
          Mentor Form
        </button>
        <button onClick={showMentee} className="btnsForm">
          Mentee Form
        </button>
      </div>
      <br />
      <br />
      <div className={menteeForm}>
        <button onClick={hideMentee} className="btnsCloseForm">
          x
        </button>

        <form>
          <div className="field">
            <h2 className="formTitleMentee">Want to find a mentor?</h2>
            <h3 className="formTitleMentee">
              Please fill in the details below so that we can get in contact
              with you.
            </h3>
          </div>

          <div className="field">
            <label for="fname">Name:</label>
            <br />
            <br />
            <input type="text" id="fname" name="fname" />
          </div>

          <div className="field">
            <label for="lname">Age:</label>
            <br />
            <br />
            <input type="text" id="lname" name="lname" />
          </div>

          <div className="field">
            <label for="lname">Ethnicity</label>
            <br />
            <br />
            <input type="text" id="lname" name="lname" />
          </div>

          <div className="field">
            <label for="lname">MyersBriggs:</label>
            <br />
            <br />
            <input type="text" id="lname" name="lname" />
          </div>
        </form>
      </div>

      <div className={mentorForm}>
        <button onClick={hideMentor} className="btnsCloseForm">
          x
        </button>
        <form>
          <div className="field">
            <h2 className="formTitleMentor">Want to become a mentor?</h2>
            <h3 className="formTitleMentor">
              Please fill in the details below so that we can get in contact
              with you.
            </h3>
          </div>
          <div className="field">
            <label for="fname">Name:</label>
            <br />
            <br />
            <input type="text" id="fname" name="fname" />
          </div>

          <div className="field">
            <label for="lname">Age:</label>
            <br />
            <br />
            <input type="text" id="lname" name="lname" />
          </div>

          <div className="field">
            <label for="lname">Ethnicity</label>
            <br />
            <br />
            <input type="text" id="lname" name="lname" />
          </div>

          <div className="field">
            <label for="lname">MyersBriggs:</label>
            <br />
            <br />
            <input type="text" id="lname" name="lname" />
          </div>

          <div className="field">
            <label for="lname">Experience:</label>
            <br />
            <br />
            <input type="text" id="lname" name="lname" />
          </div>

          <div className="field">
            <button className="btnsForm">Submit!</button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Form;
