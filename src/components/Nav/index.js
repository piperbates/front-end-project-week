import React from "react";
import "./styles.css";
import Form from "../Form"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav">
    <Router>
    <div>
    <Link to="/"><button className="btnNav" href="#">
        Apply for programme
      </button></Link>
      <Link to="/FindYourMatch"><button className="btnNav" href="#">
        {" "}
        Find Your Match 
      </button></Link>
      <Link to="/Chat"><button className="btnNav" href="#">
        Chat 
      </button></Link>
      <Switch>
          <Route path="/">
            <Form />
          </Route>
          </Switch>
        </div>
    </Router>
    </nav>
  );
}

export default Navbar;
