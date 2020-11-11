import React from "react";
import "./style.css"
//This component will display the data from the data

function DisplayTable({ quote }) {
  console.log(quote)
  return (
    <div>
      {/* <p>{quote.name}</p> */}
      <table id="data-display">
        <thead>
          <th>
            Name
          </th>
          <th>
            Age
          </th>
          <th>
            Ethnicity
          </th>
          <th>
            Myers Briggs
          </th>

        </thead>
        <tbody>
          <td>Name goes here</td>
          <td>Age goes here</td>
          <td>Ethnicity goes here</td>
          <td>Myers Briggs goes here</td>
        </tbody>
      </table>
    </div>
  );
}

export default DisplayTable;
