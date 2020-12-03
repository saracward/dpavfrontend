import logo from "./logo.svg";
import "./App.css";
import About from "./About";
import Brands from "./Brands";
import Contact from "./Contact";
import Projects from "./Projects";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://i.ibb.co/qrgf2x7/DPAV-Logo1.png" alt="dpavlogo" />
        <About />
        <Brands />
        <Contact />
        <Projects />
      </header>
    </div>
  );
}

export default App;
