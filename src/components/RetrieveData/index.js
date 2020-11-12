import React, { useState } from "react";
import DisplayTable from "../DisplayTable";

import "./styles.css";

// component is working without useEffect because it will only grab all the data.
// As we add more button (to find your match) then useeffect we will want them to run at different times.
function RetrieveData() {
  const [formData, setFormData] = useState([]);
  const [text, setText] = useState("");

  async function getAllData() {
    const res = await fetch("http://www.localhost:5000/mentor");
    const data = await res.json();
    console.log(data);
    let payload = data.payload;
    console.log(payload);
    setFormData(payload);
  }
  // function handleClick() {
  //   setFormData(formData);
  // }

  // async function to get user input value, hand the value to the api and recieve the myersbriggs matches
  async function matchMB(text) {
    const res = await fetch(
      `http://www.localhost:5000/bootcamperMatch?myersBriggs=${text}`
    );
    console.log(text);
    const data = await res.json();
    let payload = data.payload;
    console.log(data);
    setFormData(payload);
  }

  return (
    <div className="containerMatch">
      <br />
      <br />
      <h1 className="h1Match">
        See your match, who <br /> your mentor's going to be
      </h1>
     
      <button onClick={getAllData} className="btnsForm">
        Get all data
      </button>
      <div>
        <input onChange={(e) => setText(e.target.value)} />
        <button onClick={() => matchMB(text)} className="btnsForm">
          Get matches
        </button>
      </div>
      <div>
        {/* <p>{quote.name}</p> */}
        <table id="data-display">
          <thead>
            <th>First Name</th>
            <th>Last Name</th>
            <th>About</th>
            <th>Language experience</th>
            <th>Myers Briggs</th>
            <th>Industry experience</th>
            <th>Interests</th>
          </thead>
          <tbody>
            {formData &&
              formData.map((item) => {
                return (
                  <DisplayTable
                    firstName={item.firstname}
                    lastName={item.lastname}
                    introduction={item.introduction}
                    languages={item.languages}
                    myersBriggs={item.myersbriggs}
                    industry={item.industry}
                    interests={item.interests}
                  />
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RetrieveData;

// render a button which onClick it will display display the data in the table the data from the server to show all data
// Display this data in  a <p></p>
