import React from "react";
import { isCompositeComponent } from "react-dom/test-utils";
import "./style.css";
//This component will display the data from the data

function DisplayTable({ payload }) {
  console.log(payload);
  return (
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
          {/* {payload.map((item) => {
            return (
              <tr>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.ethnicity}</td>
                <td>{item.myersBriggs}</td>
              </tr>
            );
          })} */}
        </tbody>
      </table>
    </div>
  );
}

export default DisplayTable;
