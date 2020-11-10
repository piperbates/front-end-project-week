import React from "react";
import Input from "../Input";

// Mentee component is taking in the information from the student, using the input value with onChange
function Mentee() {
  return (
    <div>
      <Input labelName="kj" />
      <Input labelName="jh" />
      <Input labelName="ljkb" />
    </div>
  );
}

export default Mentee;
