import "./App.css";
import Form from "../Form";
//import RetrieveData from "../RetrieveData";
import Footer from "../Footer";
import Nav from "../Nav";

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <Nav/>
      <Form />
      {/* <RetrieveData /> */}
      <Footer /> 
    </div>
  );
}

export default App;

//<Home/>
// create a nav bar with three links mentor(form) mentee(form) matches(display)
//image - people working togteher
//text - blurb
//footer
