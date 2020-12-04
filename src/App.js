import logo from "./logo.svg";
import "./App.css";
import About from "./About";
import Brands from "./Brands";
import Contact from "./Contact";
import Projects from "./Projects";
import { Link, Route, Switch } from "react-router-dom";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <img src="https://i.ibb.co/qrgf2x7/DPAV-Logo1.png" alt="dpavlogo" />

      <Switch>
        <Route exact={true} path="/about" render={(rp) => <About {...rp} />} />
        <Route
          exact={true}
          path="/brands"
          render={(rp) => <Brands {...rp} />}
        />
        <Route
          exact={true}
          path="/projects"
          render={(rp) => <Projects {...rp} />}
        />
        <Route
          exact={true}
          path="/contactus"
          render={(rp) => <Contact {...rp} />}
        />
      </Switch>

      <footer className="footer">
        <a href="https://www.instagram.com/dpaudiovideo/?hl=en">
          <img className="insta" src="https://i.ibb.co/X3v7DgD/ig.png" />
        </a>
        <a href="">
          <img
            className="fbook"
            src="https://i.ibb.co/VNzdZ9Y/46-facebook-512.png"
          />
        </a>
        <a href="mailto:cassandra@dpaudiovideo.net">
          <img
            className="email"
            src="https://i.ibb.co/BKy78jc/58485698e0bb315b0f7675a8.png"
          />
        </a>
      </footer>
    </div>
  );
}

export default App;
