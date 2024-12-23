import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
// use {} for variables to pass in as a classname
  return (
    <div className={styles.App}>
      <Navbar />
    </div>
  )
}

export default App
