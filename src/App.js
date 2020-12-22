import styles from "./App.css";
import About from "./About";
import Brands from "./Brands";
import Contact from "./Contact";
import Projects from "./Projects";
import Lighting from "./Lighting";
import Audio from "./Audio";
import Video from "./Video";
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
          <Route exact={true} path="/Lighting" render={(rp) => <Lighting />} />
          <Route exact={true} path="/Audio" render={(rp) => <Audio />} />
          <Route exact={true} path="/Video" render={(rp) => <Video />} />

          <Home />
        </Switch>
      </main>
      <footer className="footer">
        <a href="https://www.instagram.com/dpaudiovideo/?hl=en">
          <img
            className="insta"
            src="https://i.ibb.co/Ny3V1nk/46-facebook-512.png"
          />
        </a>
        <a href="">
          <img className="fbook" src="https://i.ibb.co/64r8HqQ/fb-white.png" />
        </a>
        <a href="mailto:info@dpaudiovideo.net">
          <img
            className="email"
            src="https://i.ibb.co/89X70fs/mail-white.png"
          />
        </a>
      </footer>
    </div>
  );
}

export default App;
