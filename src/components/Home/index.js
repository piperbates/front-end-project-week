import React from "react";
import Navbar from "../Nav";

function Home() {
  return (
    <div>
      <Navbar />
      <img
        src="../../imgs/home.JPG"
        alt="home banner"
        width="500px"
        height="auto"
      />
      <p> THIS IS OUR APP</p>
    </div>
  );
}

export default Home;
