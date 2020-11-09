import React from "react";

// Input component take's in the user's answer
function Input({ labelName }) {
  return (
    <label>
      {labelName}
      <input />
    </label>
  );
}

export default Input;
