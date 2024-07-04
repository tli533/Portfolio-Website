import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { Socials } from "./components/Socials";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { Contact } from "./components/Contact";
import Experience from "./components/Experience";

function App() {
  return (
    <div>
        <NavBar />
        <Home />
        <About />
        <Projects />
        <Skills />
        <Socials />
        <Experience />
        <Contact />
    </div>
  );
}

export default App;
