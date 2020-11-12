import "./App.css";
import Form from "../Form";
//import RetrieveData from "../RetrieveData";
import Footer from "../Footer";
import Nav from "../Nav";
import { useAuth0 } from "@auth0/auth0-react";
import LoginPage from "../LoginPage";

function App() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  if (isAuthenticated) {
    return (
      <div>
        <div className="App">
          <Nav />

          <Footer />
        </div>
      </div>
    );
  } else {
    return <LoginPage />;
  }
}

export default App;

//<Home/>
// create a nav bar with three links mentor(form) mentee(form) matches(display)
//image - people working togteher
//text - blurb
//footer
