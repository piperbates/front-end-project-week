import React from "react";
import { isCompositeComponent } from "react-dom/test-utils";
import "./style.css";
//This component will display the data from the data

function DisplayTable({ name, age, ethnicity, myersBriggs }) {
  return (
      <tr>
        <td>{name}</td>
        <td>{age}</td>
        <td>{ethnicity}</td>
        <td>{myersBriggs}</td>
      </tr>
  );
}

export default DisplayTable;
