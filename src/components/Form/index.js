import React, { useState } from "react";
import "./styles.css";
import {
  myersBriggsTypes,
  personalInterests,
  industries,
  languages,
  menteeInterestValues,
  menteeIndustryValues,
  mentorInterestValues,
  mentorIndustryValues,
  mentorLanguageValues,
} from "./form-details";

// Parent component of Mentor, Mentee, submit. In here we will take the information from Mentor & Mentee and the submit component will pass the data to our database
function Form() {
  const [menteeForm, setMenteeForm] = useState("form hide");
  const [mentorForm, setMentorForm] = useState("form hide");

  /* TO REFACTOR (Another time)
  
    const [menteeFormValues, setMenteeFormValues] = useState ({})

    setMenteeFormValues = input value

    mentorFormValues = {
      TeeFirstName: "Piper"
      teeLastName: "Bates"
      
    }
setMentorFormValues = {...mentorFormValues, userInput}

  */

  //Getting input value and save to variable Mentee
  const [teeFirstName, setTeeFirstName] = useState("");
  const [teeLastName, setTeeLastName] = useState("");
  const [teeAbout, setTeeAbout] = useState("");
  const [teeMyersBriggs, setTeeMyersBriggs] = useState("");
  const [teeIndustry, setTeeIndustry] = useState([]);
  const [teeInterests, setTeeInterests] = useState([]);
  console.log(
    teeFirstName,
  );

  //Getting input value and save to variable Mentor
  const [torFirstName, setTorFirstName] = useState("");
  const [torLastName, setTorLastName] = useState("");
  const [torAbout, setTorAbout] = useState("");
  const [torMyersBriggs, setTorMyersBriggs] = useState("");
  const [torIndustry, setTorIndustry] = useState([]);
  const [torInterests, setTorInterests] = useState([]);
  const [torLanguages, setTorLanguages] = useState([]);
  // console.log(
  //   torFirstName,
  //   torLastName,
  //   torAbout,
  //   torMyersBriggs,
  //   torIndustry,
  //   torInterests,
  //   torLanguages
  // );

  /* TO DO ON THIS PAGE:
    - Rename all states
    - Add states for each input, mentor and mentee 
    - Figure out how to add state to checkboxes because I don't think this is working right now...
  */

  console.log(
    "log",
    torFirstName,
    torLastName,
    torAbout,
    torMyersBriggs,
    torIndustry
  );

  //Submut mentee function
  function postMenteeForm(firstName, lastName, introduction, myersBriggs, industry, interests) {
    console.log("mentee fnc", firstName, lastName, introduction, myersBriggs, industry, interests);
    fetch(`http://localhost:5000/mentee`, {
      method: "post",
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        introduction: introduction,
        myersBriggs: myersBriggs,
        industry: industry,
        interests: interests
      }),
      headers: { "Content-Type": "application/json" },
      //Validation: ContentType
    })
      .then((res) => res.json()) //res.json() is an async function
      .then((data) => console.log(data, "here's the data, buddy boy")) //In the browser
      .catch((error) => console.log(error, "my error")); //uncaught promise rejection. The promise throws and error and I need to catch otherwise it will be thrown into the ether
  }

  //Submut mantor function
  function postMentorForm(firstName, lastName, introduction, languages, myersBriggs, industry, interests) {
    console.log("mentor fnc", firstName, lastName, introduction, myersBriggs, industry);
    fetch(`http://localhost:5000/mentor`, {
      method: "post",
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        introduction: introduction,
        languages: languages,
        myersBriggs: myersBriggs,
        experience: industry,
        interests: interests,
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

  function pushDataIntoArray(array, item) {
    array.push(item);
  }

  return (
    <div className="containerForm">
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
            <label for="teeFname">First Name:</label>
            <br />
            <br />
            <input
              type="text"
              id="teeFname"
              name="teeFname"
              onChange={(e) => setTeeFirstName(e.target.value)}
            />
          </div>

          <div className="field">
            <label for="teeLname">Last Name:</label>
            <br />
            <br />
            <input
              type="text"
              id="teeLname"
              name="teeLname"
              onChange={(e) => setTeeLastName(e.target.value)}
            />
          </div>
          {/* About Mentee */}
          <div className="field">
            <label for="aboutMentee">Tell us about yourself?</label>
            <br />
            <br />
            <textarea
              maxlength="400"
              type="text"
              id="aboutMentee"
              name="aboutMentee"
              onChange={(e) => setTeeAbout(e.target.value)}
            ></textarea>
          </div>

          <div className="field">
            <label for="myersBriggs">Myers Briggs:</label>
            <br />
            <a
              href="https://www.16personalities.com/free-personality-test"
              target="_blank"
            >
              I haven't taken my Myers Briggs test
            </a>
            <br />
            <select
              id="lname"
              name="lname"
              onChange={(e) => setTeeMyersBriggs(e.target.value)}
            >
            {/*  <option 
                    onChange={(e) => setTorMyersBriggs(e.target.value)}
                  > */}
              {myersBriggsTypes.map((type) => {
                return <option>{type}</option>;
              })}
            </select>
          </div>

          <div className="field">
            <fieldset id="mentee-industries">
              <legend>What industries are you interested in?</legend>
              <ul>
                {industries.map((item) => {
                  return (
                    <li>
                      <label for={item} value={item}>
                        {item}
                      </label>
                      <input
                        name={item}
                        value={item}
                        type="checkbox"
                        onClick={() => {
                          pushDataIntoArray(menteeIndustryValues, item);
                        }}
                        onChange={() => {
                          setTeeIndustry(menteeIndustryValues);
                        }}
                      />
                      {/* setTeeIndustry */}
                    </li>
                  );
                })}
              </ul>
            </fieldset>

            <fieldset id="mentee-personal">
              <legend>What are your personal interests?</legend>
              <ul>
                {personalInterests.map((item) => {
                  return (
                    <li>
                      <label for={item} value={item}>{item}</label>
                      <input
                        name={item}
                        value={item}
                        type="checkbox"
                        onClick={() => {
                          pushDataIntoArray(menteeInterestValues, item);
                        }}
                        onChange={() => {
                          setTeeInterests(menteeInterestValues);
                        }}
                      />
                      {/* setTeeInterest */}
                    </li>
                  );
                })}
              </ul>
            </fieldset>
          </div>

          <div className="field">
            <button
              className="btnsForm"
              onClick={() => {
                setTeeIndustry(menteeInterestValues);
                setTeeInterests(menteeInterestValues);

                postMenteeForm(
                  teeFirstName,
                  teeLastName,
                  teeAbout,
                  teeMyersBriggs,
                  teeIndustry,
                  teeInterests
                );
              }}
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
            <label for="fname">First Name:</label>
            <br />
            <br />
            <input
              type="text"
              id="fname"
              name="fname"
              onChange={(e) => setTorFirstName(e.target.value)}
            />
          </div>

          <div className="field">
            <label for="lname">Last Name:</label>
            <br />
            <br />
            <input
              type="text"
              id="lname"
              name="lname"
              onChange={(e) => setTorLastName(e.target.value)}
            />
          </div>

          <div className="field">
            <label for="aboutMentee">Tell us about yourself?</label>
            <br />
            <br />
            <textarea
              maxlength="400"
              type="text"
              id="aboutMentee"
              name="aboutMentee"
              onChange={(e) => setTorAbout(e.target.value)}
            ></textarea>
          </div>

          <div className="field">
            <label for="myersBriggs">Myers Briggs:</label>
            <br />
            <a
              href="https://www.16personalities.com/free-personality-test"
              target="_blank"
            >
              I haven't taken my Myers Briggs test
            </a>
            <br />
            <select
              id="myersBriggs"
              name="myersBriggs"
              onChange={(e) => setTorMyersBriggs(e.target.value)}
            >
           
              {myersBriggsTypes.map((type) => {
                return <option>{type}</option>;
              })}
            </select>
          </div>

          <div className="field">
            <fieldset id="mentor-industries">
              <legend>What industries have you got experience in?</legend>
              <ul>
                {industries.map((item) => {
                  return (
                    <li>
                      <label for={item} value={item}>
                        {item}
                      </label>
                      <input
                        name={item}
                        value={item}
                        type="checkbox"
                        onClick={() => {
                          pushDataIntoArray(mentorIndustryValues, item);
                        }}
                        onChange={() => {
                          setTorIndustry(mentorIndustryValues);
                        }}
                      />
                    </li>
                  );
                })}
              </ul>
            </fieldset>
          </div>
          <div className="field">
            <fieldset id="mentor-personal">
              <legend>What are your interests?</legend>
              <ul>
                {personalInterests.map((item) => {
                  return (
                    <li>
                      <label for={item} value={item}>{item}</label>
                      <input
                        name={item}
                        type="checkbox"
                        value={item}
                        onClick={() => {
                          pushDataIntoArray(mentorInterestValues, item);
                        }}
                        onChange={() => {
                          setTorInterests(mentorInterestValues);
                        }}
                      />

                      {/* if checkbox is true, pass the item into an array 
                      Switches: Each switch would have a string of the input value.
                      */}
                      {/* setTorInterests */}
                    </li>
                  );
                })}
              </ul>
            </fieldset>
          </div>

          <div className="field">
            <fieldset id="languages">
              <legend>What languages are you familiar with?</legend>
              <ul>
                {languages.map((item) => {
                  return (
                    <li>
                      <label for={item} value={item}>{item}</label>
                      <input
                        name={item}
                        type="checkbox"
                        value={item}
                        onClick={() => {
                          pushDataIntoArray(mentorLanguageValues, item);
                        }}
                        onChange={() => {
                          setTorLanguages(mentorLanguageValues);
                        }}
                      />
                      {/* setTorLanguages */}
                    </li>
                  );
                })}
              </ul>
            </fieldset>
          </div>

          <div className="field">
            <button
              className="btnsForm"
              onClick={() => {
                postMentorForm(
                  torFirstName,
                  torLastName,
                  torAbout,
                  torLanguages,
                  torMyersBriggs,
                  torIndustry,
                  torInterests
                );
              }}
            >
              Submit!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
