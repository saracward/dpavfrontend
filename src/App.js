import About from "./About";
import Brands from "./Brands";
import Contact from "./Contact";
import Projects from "./Projects";
import Home from "./Home";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">{/* <Nav /> */}</header>
      <main>
        <Switch>
          <Route
            exact={true}
            path="/about"
            render={(rp) => <About {...rp} />}
          />
          <Route exact={true} path="/Brands" render={(rp) => <Brands />} />
          <Route exact={true} path="/Projects" render={(rp) => <Projects />} />
          <Route exact={true} path="/Contactus" render={(rp) => <Contact />} />
          <Home />
        </Switch>
      </main>
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
