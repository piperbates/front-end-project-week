import React, { useState, useEffect } from "react";
import DisplayTable from "../DisplayTable";

import "./styles.css";

// component is working without useEffect because it will only grab all the data.
// As we add more button (to find your match) then useeffect we will want them to run at different times.
function RetrieveData() {
  const [formData, setFormData] = useState([]);

  async function getAllData() {
    const res = await fetch("http://www.localhost:5000/mentee");
    const data = await res.json();
    let payload = data.payload;
    console.log(payload);
    setFormData(payload);
  }
  // function handleClick() {
  //   setFormData(formData);
  // }

  return (
    <div className="containerMatch">
      <br />
      <br />
      <h1 className="h1Match">
        See your match, who's <br /> your mentors going to be
      </h1>
      <button onClick={getAllData} className="btnsForm">
        Get all data
      </button>
      <div className="matchImg">
        <img src="https://cdn.dribbble.com/users/1647667/screenshots/13994154/media/a90aab4e64f4c96cc62b3618c8017be9.jpg" />
      </div>

      <div>
        {/* <p>{quote.name}</p> */}
        <table id="data-display">
          <thead>
            <th>Name</th>
            <th>Age</th>
            <th>Ethnicity</th>
            <th>Myers Briggs</th>
          </thead>
          <tbody>
            {formData &&
              formData.map((item) => {
                console.log(item.name);
                return (
                  <DisplayTable
                    name={item.name}
                    age={item.age}
                    ethnicity={item.ethnicity}
                    myersBriggs={item.myersbriggs}
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
