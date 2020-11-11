import React, { useState, useEffect } from "react";
import DisplayTable from "../DisplayTable";

// component is working without useEffect because it will only grab all the data.
// As we add more button (to find your match) then useeffect we will want them to run at different times.
function RetrieveData() {
  const [formData, setFormData] = useState([]);

  async function getAllData() {
    const res = await fetch("http://www.localhost:5000/mentor");
    const data = await res.json();
    let payload = data.payload;
    console.log(payload);
    setFormData(payload);
  }
  // function handleClick() {
  //   setFormData(formData);
  // }

  return (
    <div>
      <p>Example Test for the Retrieve Data comp</p>

      <button onClick={getAllData}>Get all data</button>
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
            {formData && formData.map((item) => {
              console.log(item.name)
              return (
              <DisplayTable
                name={item.name}
                age={item.age}
                ethnicity={item.ethnicity}
                myersBriggs={item.myersbriggs}
              />)
              
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
