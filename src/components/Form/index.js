import React, { useState } from "react";
import "./styles.css";
import Navbar from "../Nav";
import Footer from "../Footer";

// Parent component of Mentor, Mentee, submit. In here we will take the information from Mentor & Mentee and the submit component will pass the data to our database
function Form() {
  const [menteeForm, setMenteeForm] = useState("form hide");
  const [mentorForm, setMentorForm] = useState("form hide");

  //Getting input value and save to variable Mentee
  const [teeForm1, setTeeForm1] = useState("");
  const [teeForm2, setTeeForm2] = useState("");
  const [teeForm3, setTeeForm3] = useState("");
  const [teeForm4, setTeeForm4] = useState("");

  //Getting input value and save to variable Mentor
  const [torForm1, setTorForm1] = useState("");
  const [torForm2, setTorForm2] = useState("");
  const [torForm3, setTorForm3] = useState("");
  const [torForm4, setTorForm4] = useState("");
  const [torForm5, setTorForm5] = useState("");
  console.log("log", torForm1, torForm2, torForm3, torForm4, torForm5);

  //Zaid's test
  let createTodo = (msg) => {
    console.log("todo fnc", msg);
    fetch(`http://localhost:5000/test`, {
      method: "post",
      body: JSON.stringify({ todo: msg }),
      headers: { "Content-Type": "application/json" },
      //Validation: ContentType
    })
      .then((res) => res.json()) //res.json() is an async function
      .then((data) => console.log(data, "here's the data, buddy boy")) //In the browser
      .catch((error) => console.log(error, "my error")); //uncaught promise rejection. The promise throws and error and I need to catch otherwise it will be thrown into the ether
  };
  //----------Test End------------//

  //Submut mentee function
  function postMenteeForm(msg1, msg2, msg3, msg4) {
    console.log("mentee fnc", msg1, msg2, msg3, msg4);
    fetch(`http://localhost:5000/mentee`, {
      method: "post",
      body: JSON.stringify({
        name: msg1,
        age: msg2,
        ethnicity: msg3,
        myersBriggs: msg4,
      }),
      headers: { "Content-Type": "application/json" },
      //Validation: ContentType
    })
      .then((res) => res.json()) //res.json() is an async function
      .then((data) => console.log(data, "here's the data, buddy boy")) //In the browser
      .catch((error) => console.log(error, "my error")); //uncaught promise rejection. The promise throws and error and I need to catch otherwise it will be thrown into the ether
  }

  //Submut mantor function
  function postMentorForm(torForm1, torForm2, torForm3, torForm4, torForm5) {
    console.log("mentor fnc", torForm1, torForm2, torForm3, torForm4, torForm5);
    fetch(`http://localhost:5000/mentor`, {
      method: "post",
      body: JSON.stringify({
        mentor: torForm1,
        mentor: torForm2,
        mentor: torForm3,
        mentor: torForm4,
      }),
      headers: { "Content-Type": "application/json" },
      //Validation: ContentType
    })
      .then((res) => res.json()) //res.json() is an async function
      .then((data) => console.log(data, "here's the data, buddy boy")) //In the browser
      .catch((error) => console.log(error, "my error")); //uncaught promise rejection. The promise throws and error and I need to catch otherwise it will be thrown into the ether
  }

  //Show and hide functions
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
      <br />
      <br />
      <button
        onClick={() => postMenteeForm(teeForm1, teeForm2, teeForm3, teeForm4)}
      >
        Test Submit
      </button>
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
      {/* MENTEE FORM BELOW */}
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
            <input
              type="text"
              id="fname"
              name="fname"
              onChange={(e) => setTeeForm1(e.target.value)}
            />
          </div>

          <div className="field">
            <label for="lname">Age:</label>
            <br />
            <br />
            <input
              type="text"
              id="lname"
              name="lname"
              onChange={(e) => setTeeForm2(e.target.value)}
            />
          </div>

          <div className="field">
            <label for="lname">Ethnicity</label>
            <br />
            <br />
            <input
              type="text"
              id="lname"
              name="lname"
              onChange={(e) => setTeeForm3(e.target.value)}
            />
          </div>

          <div className="field">
            <label for="lname">MyersBriggs:</label>
            <br />
            <br />
            <input
              type="text"
              id="lname"
              name="lname"
              onChange={(e) => setTeeForm4(e.target.value)}
            />
          </div>

          <div className="field">
            <button
              className="btnsForm"
              onClick={() =>
                postMenteeForm(teeForm1, teeForm2, teeForm3, teeForm4)
              }
            >
              Submit!
            </button>
          </div>
        </form>
      </div>

      {/*MENTOR FORM BELOW*/}

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
            <input
              type="text"
              id="fname"
              name="fname"
              onChange={(e) => setTorForm1(e.target.value)}
            />
          </div>

          <div className="field">
            <label for="lname">Age:</label>
            <br />
            <br />
            <input
              type="text"
              id="lname"
              name="lname"
              onChange={(e) => setTorForm2(e.target.value)}
            />
          </div>

          <div className="field">
            <label for="lname">Ethnicity</label>
            <br />
            <br />
            <input
              type="text"
              id="lname"
              name="lname"
              onChange={(e) => setTorForm3(e.target.value)}
            />
          </div>

          <div className="field">
            <label for="lname">MyersBriggs:</label>
            <br />
            <br />
            <input
              type="text"
              id="lname"
              name="lname"
              onChange={(e) => setTorForm4(e.target.value)}
            />
          </div>

          <div className="field">
            <label for="lname">Experience:</label>
            <br />
            <br />
            <input
              type="text"
              id="lname"
              name="lname"
              onChange={(e) => setTorForm5(e.target.value)}
            />
          </div>

          <div className="field">
            <button className="btnsForm" onClick={postMentorForm}>
              Submit!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
