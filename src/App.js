import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { Socials } from "./components/Socials";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills"

function App() {
  return (
    <div>
        <NavBar />
        <Home />
        <About />
        <Projects />
        <Skills />
        <Socials />
    </div>
  );
}

export default App;
