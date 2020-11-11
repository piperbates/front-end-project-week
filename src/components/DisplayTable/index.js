import React from "react";
import { isCompositeComponent } from "react-dom/test-utils";
import "./style.css";
//This component will display the data from the data

function DisplayTable({ payload }) {
  console.log(payload);
  return (
   
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
    
  );
}

export default DisplayTable;
