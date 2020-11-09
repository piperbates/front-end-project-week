import React from "react";
import Mentor from "../Mentor";
import Mentee from "../Mentee";
import Submit from "..Submit";

// Parent component of Mentor, Mentee, submit. In here we will take the information from Mentor & Mentee and the submit component will pass the data to our database
function Form() {
  return (
    <form>
      this will store our mentor/mentee components
      <Mentor />
      <Mentee />
      <Submit />
    </form>
  );
}

export default Form;
