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
  gid,
  gname,
  gpic,
  gtime,
  gemail,
}) {
  console.log(gemail);
  console.log(languages);

  // let lang = Array.from(languages);
  // let arrayNames = Object.keys(lang);
  // let keyNames = arrayNames.join(", ");
  // console.log(keyNames);
  // let keyNames = "";
  // for (let key in languages) {
  //   keyNames += `${key}, `;
  // }
  // console.log(keyNames);

  return (
    <tr className="tr">
      <img className="srcImgs" src={gpic} alt={gname} />
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
      <td>{gtime}</td>
      <td>
        <a onClick={(e) => e.preventDefault()} href={gemail}>
          {gemail}
        </a>
      </td>
    </tr>
  );
}

export default DisplayTable;
