import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { Socials } from "./components/Socials";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
        <NavBar />
        <Home />
        <About />
        <Projects />
        <Socials />
    </div>
  );
}

export default App;
