import NavBar from "./components/Navbar.jsx";
import { BrowserRouter, Link, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage/Homepage.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="cont-header">
        <Link to="/">
          <h1>Search Jobs</h1>
        </Link>
      </div>
      <NavBar/>

      <Route path="/" exact render={(routerProps)=> <Homepage {...routerProps}/>}/>
    </BrowserRouter>
  );
}

export default App;
