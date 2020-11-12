import React from "react";
// import { isCompositeComponent } from "react-dom/test-utils";
import "./style.css";
//This component will display the data from the data

function DisplayTable({
  firstName,
  lastName,
  introduction,
  languages,
  myersBriggs,
  industry,
  interests,
}){
  console.log(languages)

  return (
    <tr>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{introduction}</td>
      <td>{languages}</td>
      
      {/* {languages.map((item) => {
        <td>{item.toString()}</td>

      })} */}
      
      <td>{myersBriggs}</td>
      <td>{industry}</td>
      <td>{interests}</td>
    </tr>
  );
}

export default DisplayTable;
