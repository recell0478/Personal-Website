import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Experience } from "./components/Experience/Experience";
import { Project } from "./components/Project/Project";
import { Contact } from "./components/Contact/Contact";


function App() {
// use {} for variables to pass in as a classname
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Project />
      <Contact />
    </div>
  )
}

export default App
